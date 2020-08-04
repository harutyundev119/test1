import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { SalesState, Sale, SalesResponse } from './types/SalesTypes'
import { SalesService } from '~/api/services/salesService'
import { DateParse } from '~/helpers/dateParser'
import { EventsState } from '~/store/types/EventsTypes'
import { MatchesMapper } from '~/helpers/matchesMapper'

export const state = (): SalesState => ({
  currentSale: null,
  sales: null,
  slug: '',
  offset: 0,
  defaultOffset: 0,
  defaultLimit: 10
})

export const mutations: MutationTree<SalesState> = {
  setSales(state: SalesState, payload: Sale[]): void {
    if (payload.length === 0) state.sales = null
    else {
      payload.forEach((sale) => {
        sale.parsedDate = DateParse({
          from: sale.date_from,
          to: sale.date_to,
          type: true
        })
      })
      state.sales = payload
    }
  },
  setSlug(state: SalesState, payload: string): void {
    state.slug = payload
  },
  setCurrentSale(state: SalesState, payload: Sale): void {
    const newSale = JSON.parse(JSON.stringify(payload))
    newSale.components = payload.components.map((component) => {
      if (component.type !== 'sku-table') return component
      if (!component.data.skus) return component
      component.data.skus = MatchesMapper(component.data.skus)
      return component
    })
    state.currentSale = newSale
  },
  setOffset(state: SalesState, payload: number | null): void {
    state.offset = payload
  }
}

export const getters: GetterTree<SalesState, {}> = {
  isScrollPagination: (state: SalesState): boolean => {
    if (!state.sales) return true
    if (!state.offset) return true
    return state.offset > state.sales.length
  },
  getCurrentSlug(state: SalesState): Sale | null {
    if (state.sales === null) return null
    if (state.sales.length === 0) return null
    if (state.slug === '') return null
    return state.sales.find((sale) => sale.slug === state.slug) || null
  },
  getTopOfActiveSales(state: SalesState, getters): Sale[] | null {
    if (!getters.getActiveSales) return null
    if (getters.getActiveSales.length === 0) return null
    return getters.getActiveSales.slice(0, 4)
  },
  getScrolledElements: (state: SalesState): Sale[] | null => {
    if (!state.sales) return null
    const qOffset = state.offset ? state.offset : state.defaultOffset
    return state.sales.slice(0, qOffset + state.defaultLimit)
  },
  getActiveSales(state: SalesState): Sale[] | null {
    if (state.sales === null) return null
    if (state.sales.length === 0) return null
    const currentDate = new Date()
    const result = state.sales.filter(
      (sale: Sale) => new Date(sale.date_to) >= currentDate
    )
    if (result.length === 0) return null
    return result
  },
  getTopOfActive(state: SalesState, getters): Sale[] | null {
    if (getters.getActiveSales === null) return null
    if (getters.getActiveSales.length === 0) return null
    return getters.getActiveSales.slice(0, 10)
  },
  getPassiveSales(state: SalesState): Sale[] | null {
    if (state.sales === null) return null
    if (state.sales.length === 0) return null
    const currentDate = new Date()
    const result = state.sales.filter(
      (sale: Sale) => new Date(sale.date_to) < currentDate
    )
    if (result.length === 0) return null
    return result
  }
}

export const actions: ActionTree<SalesState, {}> = {
  async getSales({ commit, state }): Promise<void> {
    if (state.sales !== null && state.sales.length > 0) return
    await SalesService.getSales((response: SalesResponse) => {
      commit('setSales', response.data)
    })
  },
  async getCurrentSale({ commit, state }): Promise<void> {
    await SalesService.getSaleBySlug(state.slug, (response: SalesResponse) => {
      commit('setCurrentSale', response.data)
    })
  }
}

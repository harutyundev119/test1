import { ActionTree, MutationTree } from 'vuex'
import { SkuSearchService } from '~/api/services/skuSearchService'
import { SkuSearchResponse, SkuSearchState } from '~/store/types/SkuSearchTypes'
import { Sku } from '~/store/types/Catalog/CatalogTypes'

export const state = (): SkuSearchState => ({
  code: null,
  items: [],
  query: '',
  isEmpty: false
})

export const mutations: MutationTree<SkuSearchState> = {
  setSkuCode(state: SkuSearchState, payload: string | null): void {
    state.code = payload
  },
  setQuery(state: SkuSearchState, payload: string): void {
    state.query = payload
  },
  setSkuResult(state: SkuSearchState, payload: Sku[]): void {
    state.items = payload
    state.isEmpty = payload.length === 0
  },
  clearSkuItems(state: SkuSearchState): void {
    state.items = []
    state.isEmpty = false
  },
  clearState(state: SkuSearchState): void {
    state.code = null
    state.items = []
    state.isEmpty = false
    state.query = ''
  }
}

export const actions: ActionTree<SkuSearchState, {}> = {
  async getSku({ commit, state }): Promise<void> {
    if (!state.query) {
      commit('clearSkuItems')
      return
    }
    await SkuSearchService.getSkuSearch(
      state.query,
      (response: SkuSearchResponse) => {
        commit('setSkuResult', response.data)
      }
    )
  }
}

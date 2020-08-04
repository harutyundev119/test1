import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { DealersService } from '@/api/services/dealersService'
import { Dealer, DealersState, DealersResponse } from './types/DelatersTypes'

export const state = (): DealersState => ({
  dealers: [],
  type: 0,
  types: [
    {
      title: 'Официальный дилер LADA',
      value: 'lada-image'
    },
    {
      title: 'LADA Dеталь',
      value: 'lada-detail'
    }
  ],
  query: ''
})

export const getters: GetterTree<DealersState, {}> = {
  getDealerByID: (state: DealersState) => (id: number): Dealer | null => {
    if (state.dealers.length === 0) return null
    const result = state.dealers.find((dealer) => dealer.id === id)
    if (typeof result === 'undefined') return null
    return result
  }
}

export const mutations: MutationTree<DealersState> = {
  setDealers(state: DealersState, payload: Dealer[]): void {
    state.dealers = payload
  },
  setType(state: DealersState, payload: number): void {
    state.type = payload
  },
  setQuery(state: DealersState, payload: string): void {
    state.query = payload
  }
}

export const actions: ActionTree<DealersState, {}> = {
  async getDealers({ commit, state }): Promise<void> {
    const selectedType: string = state.types[state.type].value
    await DealersService.getDealers(
      selectedType,
      state.query,
      (response: DealersResponse) => {
        commit(
          'setDealers',
          response.data.map((dealer) => {
            // TODO  лишние символы в координатах пока поставил кастыль, без него крешится карта
            if (dealer.coordinates.lat.includes(','))
              dealer.coordinates.lat = dealer.coordinates.lat.slice(0, -1)
            return dealer
          })
        )
      }
    )
  }
}

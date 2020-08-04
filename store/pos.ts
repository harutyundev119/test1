import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { PosResponse, PosState } from '~/store/types/PosTypes'
import { PosService } from '~/api/services/posService'

export const state = (): PosState => ({
  pos: [],
  defaultLimit: 10,
  pagination: null,
  isLoading: false
})

export const getters: GetterTree<PosState, {}> = {
  isScrollPagination: (state: PosState): boolean => {
    if (state.isLoading) return false
    if (!state.pagination) return true
    if (state.pos.length === 0) return true
    return state.pagination.total > state.pos.length
  }
}

export const mutations: MutationTree<PosState> = {
  setPOS(state: PosState, payload: PosResponse): void {
    state.pos = payload.data
    state.pagination = payload.paging
  },
  addPos(state: PosState, payload: PosResponse): void {
    if (!state.pos) return
    state.pos = [...state.pos, ...payload.data]
    state.pagination = payload.paging
  },
  setLoading(state: PosState, payload: boolean): void {
    state.isLoading = payload
  }
}

export const actions: ActionTree<PosState, {}> = {
  async getPOS(
    { commit, state },
    {
      offset,
      limit,
      add
    }: { offset: number | null; limit: number | null; add: boolean }
  ): Promise<void> {
    const qOffset = offset || 0
    const qLimit = limit || state.defaultLimit
    await PosService.getPOS(qOffset, qLimit, (response: PosResponse) => {
      if (add) commit('addPos', response)
      else commit('setPOS', response)
    })
  }
}

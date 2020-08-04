import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { VideosService } from '~/api/services/videosService'
import { VideosResponse, VideosState } from '~/store/types/VideosTypes'

export const state = (): VideosState => ({
  videos: null,
  defaultLimit: 10,
  pagination: null,
  isLoading: false
})

export const getters: GetterTree<VideosState, {}> = {
  isScrollPagination: (state: VideosState): boolean => {
    if (!state.pagination) return true
    if (!state.videos) return true
    return state.pagination.total > state.videos.length
  }
}

export const mutations: MutationTree<VideosState> = {
  setVideos(state: VideosState, payload: VideosResponse): void {
    state.videos = payload.data
    state.pagination = payload.paging
  },
  addVideos(state: VideosState, payload: VideosResponse): void {
    if (!state.videos) return
    state.videos = [...state.videos, ...payload.data]
    state.pagination = payload.paging
  },
  setLoading(state: VideosState, payload: boolean): void {
    state.isLoading = payload
  }
}

export const actions: ActionTree<VideosState, {}> = {
  async getVideos(
    { commit, state },
    {
      offset,
      limit,
      add
    }: { offset: number | null; limit: number | null; add: boolean }
  ): Promise<void> {
    const qOffset = offset || 0
    const qLimit = limit || state.defaultLimit
    await VideosService.getVideos(
      qOffset,
      qLimit,
      (response: VideosResponse) => {
        if (add) commit('addVideos', response)
        else commit('setVideos', response)
      }
    )
  }
}

import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { NewsService } from '@/api/services/newsService'
import { MatchesMapper } from '@/helpers/matchesMapper'
import {
  CurrentNews,
  NewsBySlugResponse,
  NewsItem,
  NewsResponse,
  NewsState
} from './types/NewsTypes'

export const state = (): NewsState => ({
  items: null,
  searchedItems: [],
  currentNews: null,
  q: null,
  dateMeta: null,
  dateFrom: null,
  dateTo: null,
  defaultLimit: 10,
  defaultOffset: 0,
  slug: null,
  pagination: null,
  isLoading: false
})

export const getters: GetterTree<NewsState, {}> = {
  isScrollPagination: (state: NewsState): boolean => {
    if (!state.pagination) return true
    if (!state.items) return true
    return state.pagination.total > state.items.length
  },
  getMainPageNews: (state: NewsState): NewsItem[] | null => {
    if (!state.items) return null
    return state.items.slice(0, 10)
  }
}

export const mutations: MutationTree<NewsState> = {
  setNews(state: NewsState, payload: NewsResponse): void {
    state.items = payload.data
    state.dateMeta = payload.date_meta
    state.pagination = payload.paging
  },
  setSearchedNews(state: NewsState, payload: NewsResponse): void {
    state.searchedItems = payload.data
  },
  addNews(state: NewsState, payload: NewsResponse): void {
    if (!state.items) return
    state.items = [...state.items, ...payload.data]
    state.dateMeta = payload.date_meta
    state.pagination = payload.paging
  },
  setCurrentNews(state: NewsState, payload: CurrentNews | null): void {
    if (!payload) {
      state.currentNews = payload
    } else {
      const newNews = JSON.parse(JSON.stringify(payload))
      newNews.components = payload.components.map((component) => {
        if (component.type !== 'sku-table') return component
        if (!component.data.skus) return component
        component.data.skus = MatchesMapper(component.data.skus)
        return component
      })
      state.currentNews = newNews
    }
  },
  setSlug(state: NewsState, payload: string | null): void {
    state.slug = payload
  },
  setQuery(state: NewsState, payload: string | null): void {
    state.q = payload
  },
  setDateFrom(state: NewsState, payload: string | null): void {
    state.dateFrom = payload
  },
  setDateTo(state: NewsState, payload: string | null): void {
    state.dateTo = payload
  },
  setLoading(state: NewsState, payload: boolean): void {
    state.isLoading = payload
  }
}

export const actions: ActionTree<NewsState, {}> = {
  async getNews({ commit, state }, { offset, limit, add }): Promise<void> {
    await NewsService.getNews(
      null,
      state.dateFrom,
      state.dateTo,
      offset || state.defaultOffset,
      limit || state.defaultLimit,
      (response: NewsResponse) => {
        if (add) commit('addNews', response)
        else commit('setNews', response)
      }
    )
  },
  async searchNews({ commit, state }, { offset, limit }): Promise<void> {
    await NewsService.getNews(
      state.q,
      null,
      null,
      offset || state.defaultOffset,
      limit || state.defaultLimit,
      (response: NewsResponse) => {
        commit('setSearchedNews', response)
      }
    )
  },
  async getNewsBySlug({ commit, state }): Promise<void> {
    if (!state.slug) return
    await NewsService.getNewsBySlug(
      state.slug,
      (response: NewsBySlugResponse) => {
        commit('setCurrentNews', response.data)
      }
    )
  }
}

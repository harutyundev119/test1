import { ActionTree, GetterTree, MutationTree } from 'vuex'
import {
  EventBySlugResponse,
  EventItem,
  EventsResponse,
  EventsState
} from '~/store/types/EventsTypes'
import { EventsService } from '~/api/services/eventsService'

export const state = (): EventsState => ({
  events: null,
  dateMeta: null,
  currentEvent: null,
  q: null,
  dateFrom: null,
  dateTo: null,
  slug: null,
  offset: 0,
  defaultOffset: 0,
  defaultLimit: 10,
  isLoading: false
})

export const getters: GetterTree<EventsState, {}> = {
  isScrollPagination: (state: EventsState, getters): boolean => {
    if (!state.events) return true
    if (!state.offset) return true
    return state.offset < getters.filterByDateTo.length
  },
  getActiveEvents: (state: EventsState, getters): EventItem[] | null => {
    if (!getters.filterByDateTo) return null
    return getters.filterByDateTo.filter((event: EventItem) => {
      return new Date(event.date_to) >= new Date()
    })
  },
  getInactiveEvents: (state: EventsState, getters): EventItem[] | null => {
    if (!getters.filterByDateTo) return null
    return getters.filterByDateTo.filter((event: EventItem) => {
      return new Date(event.date_to) < new Date()
    })
  },
  // getScrolledElements: (state: EventsState): EventItem[] | null => {
  //   if (!state.events) return null
  //   const qOffset = state.offset ? state.offset : state.defaultOffset
  //   return state.events.slice(0, qOffset + state.defaultLimit)
  // },
  filterByQuery: (state: EventsState): EventItem[] | null => {
    if (!state.events) return null
    if (!state.q) return state.events
    return state.events.filter((event: EventItem) => {
      if (state.q === null) return true
      return event.title.includes(state.q)
    })
  },
  filterByDateFrom: (state: EventsState): EventItem[] | null => {
    if (!state.events) return null
    if (!state.dateFrom) return state.events
    return state.events.filter((event: EventItem) => {
      if (state.dateFrom === null) return true
      return new Date(event.date_from) >= new Date(state.dateFrom)
    })
  },
  filterByDateTo: (state: EventsState, getters): EventItem[] | null => {
    if (!getters.filterByDateFrom) return null
    if (!state.dateTo) return getters.filterByDateFrom
    return getters.filterByDateFrom.filter((event: EventItem) => {
      if (state.dateTo === null) return true
      return new Date(event.date_to) < new Date(state.dateTo)
    })
  }
}

export const mutations: MutationTree<EventsState> = {
  setEvents(state: EventsState, payload: EventsResponse): void {
    state.events = payload.data.sort((a, b) => {
      if (new Date(a.date_to) < new Date(b.date_to)) return 1
      if (new Date(a.date_to) > new Date(b.date_to)) return -1
      return 0
    })
    state.dateMeta = payload.date_meta
  },
  setCurrentEvent(state: EventsState, payload: EventItem | null): void {
    state.currentEvent = payload
  },
  setSlug(state: EventsState, payload: string | null): void {
    state.slug = payload
  },
  setQuery(state: EventsState, payload: string | null): void {
    state.q = payload
  },
  // setOffset(state: EventsState, payload: number | null): void {
  //   state.offset = payload
  // },
  setDateFrom(state: EventsState, payload: string | null): void {
    state.dateFrom = payload
  },
  setDateTo(state: EventsState, payload: string | null): void {
    state.dateTo = payload
  },
  setLoading(state: EventsState, payload: boolean): void {
    state.isLoading = payload
  }
}

export const actions: ActionTree<EventsState, {}> = {
  async getEvents({ commit }): Promise<void> {
    await EventsService.getEvents((response: EventsResponse) => {
      commit('setEvents', response)
    })
  },
  async getEventBySlug({ commit, state }): Promise<void> {
    if (!state.slug) return
    await EventsService.getEventBySlug(
      state.slug,
      (response: EventBySlugResponse) => {
        commit('setCurrentEvent', response.data)
      }
    )
  }
}

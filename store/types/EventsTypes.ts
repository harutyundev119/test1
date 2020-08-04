import { Component } from '~/store/types/SalesTypes'
import { DateMeta, Pagination } from '~/store/types/GlobalTypes'

export interface EventItem {
  id: number
  slug: string
  title: string
  image: string
  date_from: string
  date_to: string
  place: string
  participants_limit: string
  components: Component
}

export interface EventsState {
  events: EventItem[] | null
  dateMeta: DateMeta | null
  currentEvent: EventItem | null
  q: string | null
  dateFrom: string | null
  dateTo: string | null
  slug: string | null
  offset: number | null
  defaultOffset: number
  defaultLimit: number
  isLoading: boolean
}

export interface EventsResponse {
  data: EventItem[]
  date_meta: DateMeta
}

export interface EventBySlugResponse {
  data: EventItem
}

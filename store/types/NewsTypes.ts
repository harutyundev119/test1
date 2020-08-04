import { Component } from '~/store/types/SalesTypes'
import { DateMeta, Pagination } from '~/store/types/GlobalTypes'

export enum NewsComponentTypes {
  TEXT = 'CardNew',
  IMAGE = 'CardNewImage'
}

export interface NewsItem {
  id: number
  title: string
  date: string
  slug: string
  type: NewsComponentTypes
  img?: string
  entity: 'news'
}

export interface PreviewData {
  background_color: string
  font_color: string
}

export interface Preview {
  type: string
  data: PreviewData
}

export interface NewsImages {
  wide_image: string
  square_image: string
}

export interface CurrentNews {
  id: number
  slug: string
  preview: Preview
  date: string
  title: string
  description: string
  images: NewsImages
  components: Component[]
}

export interface NewsState {
  items: NewsItem[] | null
  searchedItems: NewsItem[] | null
  currentNews: CurrentNews | null
  dateMeta: DateMeta | null
  q: string | null
  dateFrom: string | null
  dateTo: string | null
  defaultLimit: number
  defaultOffset: number
  slug: string | null
  pagination: Pagination | null
  isLoading: boolean
}

export interface NewsResponse {
  data: NewsItem[]
  date_meta: DateMeta
  paging: Pagination
}

export interface NewsBySlugResponse {
  data: CurrentNews
}

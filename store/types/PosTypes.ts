import { Sale } from '~/store/types/SalesTypes'
import { Dealer } from '~/store/types/DelatersTypes'
import { Pagination } from '~/store/types/GlobalTypes'

export interface PosItem {
  id: number
  url: string
  title: string
  size: string
  mime: string
  custom_preview: string
}

export interface PosResponse {
  data: PosItem[]
  paging: Pagination
}

export interface PosState {
  pos: PosItem[]
  defaultLimit: number
  pagination: Pagination | null
  isLoading: boolean
}

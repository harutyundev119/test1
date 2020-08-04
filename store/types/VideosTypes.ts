import { Pagination } from '~/store/types/GlobalTypes'

export interface VideoItem {
  id: number
  youtube_id: string
  title: string
  description: string
}

export interface VideosResponse {
  data: VideoItem[]
  paging: Pagination
}

export interface VideosState {
  videos: VideoItem[] | null
  defaultLimit: number
  pagination: Pagination | null
  isLoading: boolean
}

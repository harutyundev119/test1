import { Group } from '~/store/types/Catalog/CatalogTypes'

export interface CatalogGroupState {
  group: Group | null
}

export interface GroupsResponse {
  data: [Group]
}

export interface GroupsParams {
  brand_id?: number | string
  model_id?: number | string
  light?: number
}

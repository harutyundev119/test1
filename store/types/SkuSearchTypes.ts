import { Sku } from '~/store/types/Catalog/CatalogTypes'

export interface SkuSearchResponse {
  data: Sku[]
}

export interface SkuSearchState {
  items: Sku[],
  code: string | null,
  query: string,
  isEmpty: boolean
}

import { Sku } from '~/store/types/Catalog/CatalogTypes'

export interface Description {
  description: string
  skus?: Sku[]
}

export interface Component {
  type: string
  data: Description
}

export interface Sale {
  id: number
  slug: string
  title: string
  sub_title: string
  description: string
  wide_image: string
  square_image: string
  date_from: string
  date_to: string
  components: Component[]
  parsedDate?: string | null
}

export interface SalesState {
  currentSale: Sale | null
  sales: Sale[] | null
  slug: string,
  offset: number | null
  defaultOffset: number
  defaultLimit: number
}

export interface SalesResponse {
  data: Sale[]
}

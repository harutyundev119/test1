export interface CatalogFilterState {
  brandCode: string | null
  brandID: number | null
  categoryID: string | null
  categorySlug: string | null
  modelID: number | null
  groupSlug: string | null
}

export interface SetRequest {
  brandCode: string
  modelID?: number | null
}

export interface FilterList {
  filters: [BrandFilter, ModelFilter] | [BrandFilter]
}

export interface BrandFilter {
  title: string
  id: number
  code: string
}

export interface ModelFilter {
  title: string
  id: number
}

export interface MappedData {
  title: string
  slug: string
}

export interface Category {
  title: string
  slug: string
  groups: MappedData[]
}

export interface Categories {
  [key: string]: Category[] | null
}

export interface BrandModels {
  id: number
  brand_id: number
  title: string
  brand_title: string
}

export interface Brand {
  id: number
  title: string
  code: string
  models: BrandModels[]
}

export interface CatalogBrandsState {
  brands: Brand[]
}

export interface BrandsResponse {
  data: Brand[]
}

import { CatalogBrandsState } from '~/store/types/Catalog/BrandsTypes'
import { CatalogFilterState } from '~/store/types/Catalog/FilterTypes'
import { CatalogGroupState } from '~/store/types/Catalog/GroupsTypes'

export interface Image {
  id: number
  group_id: number
  path: string
  alt: string
}

export interface SkuImage {
  sku_id: number
  path: string
  alt: string
}

export interface MatchingModel {
  id: number
  brand_id: number
  title: string
  brand: MatchingBrandDefault
}

export interface MatchingBrandDefault {
  id: number
  title: string
  code: string
}

export interface MatchingBrand {
  id: number
  title: string
  code: string
  models: MappedModel[]
}

export interface MappedModel {
  id: number
  title: string
}

export interface Matching {
  for_any_model: boolean
  models: MatchingModel[]
  brands?: MatchingBrand[]
}

export interface MappedMatching {
  for_any_model: boolean
  models: MatchingModel[]
  brands: MatchingBrand[]
}

export interface SkuCode {
  code_full: string
  code_mod: string
  code_number: string
  code_suff: string
}

export interface GroupMeta {
  min_price: number,
  amount: number
}

export interface Sku {
  id: number
  group_id: number
  code: SkuCode[]
  title: string
  price: number
  images: SkuImage[]
  matches: Matching
}

export interface Group {
  id: number
  vendor_id: string
  category_id: number
  slug: string
  category_slug: string
  title: string
  main_description: string
  meta: GroupMeta
  additional_description: string
  images: Image[]
  skus: Sku[]
  formattedMeta: string
  categoryTitle?: string
}

export interface CategoryInterface {
  id: number
  slug: string
  title: string
  groups: Group[]
}

export interface CategoryResponse {
  data: CategoryInterface[]
}

export interface CatalogState {
  categories: CategoryInterface[]
}

export interface MappedGroup {
  title: string
  slug: string,
  formattedMeta: string | null
}

export interface MappedCategory {
  title: string
  slug: string
  groups: MappedGroup[]
  groupsQuantity: number
}

export interface CatalogWGroups {
  brands: CatalogBrandsState,
  categories: CategoryInterface,
  filter: CatalogFilterState,
  groups: CatalogGroupState
}

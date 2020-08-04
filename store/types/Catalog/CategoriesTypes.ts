import { Category } from '~/store/types/Catalog/FilterTypes'

export interface CatalogCategoriesState {
  categories: Category[] | null
  unfilteredCategories: Category[] | null
}

export interface CategoriesResponse {
  data: Category[]
}

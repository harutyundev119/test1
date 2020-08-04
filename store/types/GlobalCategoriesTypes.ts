import { Category } from '~/store/types/Catalog/FilterTypes'

export interface GlobalCategoriesState {
  categories: Category[] | null
}

export interface CategoriesResponse {
  data: Category[]
}

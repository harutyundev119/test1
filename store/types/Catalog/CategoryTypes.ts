// import { Brand } from '~/store/types/Catalog/BrandsTypes'
import { CategoryInterface } from '~/store/types/Catalog/CatalogTypes'

export interface CatalogCategoryState {
  category: CategoryInterface | null
}

export interface CategoryResponse {
  data: CategoryInterface[]
}

import { ActionTree, MutationTree } from 'vuex'
import { CatalogService } from '~/api/services/catalogService'
import { RootState } from '~/store/types/RootState'
import {
  GlobalCategoriesState,
  CategoriesResponse
} from '~/store/types/GlobalCategoriesTypes'
import { Category } from '~/store/types/Catalog/FilterTypes'

export const state = (): GlobalCategoriesState => ({
  categories: []
})

export const mutations: MutationTree<GlobalCategoriesState> = {
  setCategories(state: GlobalCategoriesState, payload: Category[]) {
    state.categories = payload
  }
}

export const actions: ActionTree<GlobalCategoriesState, RootState> = {
  async getCategories({ commit }): Promise<void> {
    await CatalogService.getCategories(
      null,
      null,
      true,
      (response: CategoriesResponse) => {
        commit('setCategories', response.data)
      }
    )
  }
}

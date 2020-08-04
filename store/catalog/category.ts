import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { CatalogService } from '~/api/services/catalogService'
import { RootState } from '~/store/types/RootState'
import { CategoryInterface } from '~/store/types/Catalog/CatalogTypes'
import {
  CatalogCategoryState,
  CategoryResponse
} from '~/store/types/Catalog/CategoryTypes'

export const state = (): CatalogCategoryState => ({
  category: null
})

export const getters: GetterTree<CatalogCategoryState, RootState> = {
  getCategory(state: CatalogCategoryState): CategoryInterface | null {
    return state.category || null
  }
}

export const mutations: MutationTree<CatalogCategoryState> = {
  setCategory(state: CatalogCategoryState, response: CategoryInterface): void {
    state.category = response
  },
  clearCategory(state: CatalogCategoryState): void {
    state.category = null
  }
}

export const actions: ActionTree<CatalogCategoryState, RootState> = {
  async getCategory({ commit, rootState }): Promise<void> {
    if (!rootState.catalog.filter.categorySlug) return
    await CatalogService.getCategory(
      rootState.catalog.filter.categorySlug,
      rootState.catalog.filter.brandID,
      rootState.catalog.filter.modelID,
      (response: CategoryResponse) => {
        commit('setCategory', response.data)
      }
    )
  }
}

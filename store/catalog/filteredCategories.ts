import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { CatalogService } from '~/api/services/catalogService'
import { RootState } from '~/store/types/RootState'
import { Category } from '~/store/types/Catalog/FilterTypes'
import {
  CatalogCategoriesState,
  CategoriesResponse
} from '~/store/types/Catalog/CategoriesTypes'

export const state = (): CatalogCategoriesState => ({
  categories: null,
  unfilteredCategories: null
})

export const getters: GetterTree<CatalogCategoriesState, RootState> = {
  getGroups(
    state: CatalogCategoriesState,
    getters,
    rootState: RootState
  ): Category[] | null {
    if (!state.unfilteredCategories && !state.categories) return null
    if (!state.unfilteredCategories && state.categories) return state.categories
    if (state.unfilteredCategories && !state.categories)
      return state.unfilteredCategories
    // @ts-ignore
    if (state.categories.length === 0) return state.unfilteredCategories
    return state.categories
  }
}

export const mutations: MutationTree<CatalogCategoriesState> = {
  setFilteredCategories(
    state: CatalogCategoriesState,
    response: Category[]
  ): void {
    state.categories = response
  },
  setUnfilteredCategories(
    state: CatalogCategoriesState,
    response: Category[]
  ): void {
    state.unfilteredCategories = response
  },
  clearCategories(state: CatalogCategoriesState): void {
    state.categories = null
  }
}

export const actions: ActionTree<CatalogCategoriesState, RootState> = {
  async getCategories({ commit, rootState }): Promise<void> {
    await CatalogService.getCategories(
      rootState.catalog.filter.brandID,
      rootState.catalog.filter.modelID,
      true,
      (response: CategoriesResponse) => {
        if (
          !rootState.catalog.filter.brandID &&
          !rootState.catalog.filter.modelID
        )
          commit('setUnfilteredCategories', response.data)
        else commit('setFilteredCategories', response.data)
      }
    )
  }
}

import { ActionTree, GetterTree, MutationTree } from 'vuex'
import {
  CatalogState,
  Group,
  MappedGroup,
  CategoryInterface,
  MappedCategory,
  CategoryResponse
} from '@/store/types/Catalog/CatalogTypes'
import { CatalogService } from '~/api/services/catalogService'
import { CategoriesParse } from '~/helpers/groupsMapper'
import { RootState } from '~/store/types/RootState'

export const state = (): CatalogState => ({
  categories: []
})

export const mutations: MutationTree<CatalogState> = {
  setCategories(state: CatalogState, payload: CategoryInterface[]): void {
    state.categories = CategoriesParse(payload)
  }
}

export const getters: GetterTree<CatalogState, {}> = {
  AllCatalogs: (state: CatalogState): CategoryInterface[] | null => {
    if (state.categories.length === 0) return null
    const categories: CategoryInterface[] = []
    state.categories.forEach((elem) => {
      const category = JSON.parse(JSON.stringify(elem))
      category.groups = category.groups.slice(0, 7)
      categories.push(category)
    })
    return categories
  },
  CatalogBySlug: (state: CatalogState) => (
    slug: string
  ): CategoryInterface | null => {
    if (!slug) return null
    if (state.categories.length === 0) return null
    const result = state.categories.filter((category) => {
      return category.slug === slug
    })
    if (result.length === 0) return null
    return result[0]
  },
  GroupBySlugs: (state: CatalogState) => (
    categorySlug: string,
    groupSlug: string
  ): Group | null => {
    if (!categorySlug || !groupSlug) return null
    if (state.categories.length === 0) return null
    const categoryResult = state.categories.filter((category) => {
      return category.slug === categorySlug
    })
    if (categoryResult.length === 0) return null
    const groupResult = categoryResult[0].groups.filter((group) => {
      return group.slug === groupSlug
    })
    if (groupResult.length === 0) return null
    groupResult[0].categoryTitle = categoryResult[0].title
    return groupResult[0]
  },
  getCatalogsWithGroups: (state: CatalogState): MappedCategory[] | null => {
    if (state.categories.length === 0) return null
    const catalogs: MappedCategory[] = []
    state.categories.forEach((category) => {
      const groups: MappedGroup[] = []
      category.groups.forEach((group) => {
        groups.push({
          title: group.title,
          slug: group.slug,
          formattedMeta: group.formattedMeta || null
        })
      })
      catalogs.push({
        title: category.title,
        slug: category.slug,
        groups,
        groupsQuantity: category.groups.length
      })
    })
    return catalogs
  }
}

export const actions: ActionTree<CatalogState, RootState> = {
  async getCatalogs({ commit, state }): Promise<void> {
    if (state.categories.length > 0) return
    await CatalogService.getCategories(
      null,
      null,
      false,
      (response: CategoryResponse) => {
        commit('setCategories', response.data)
      }
    )
  }
}

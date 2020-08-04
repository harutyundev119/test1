import { GetterTree, MutationTree } from 'vuex'
import {
  BrandFilter,
  CatalogFilterState,
  ModelFilter
} from '@/store/types/Catalog/FilterTypes'
import { RootState } from '~/store/types/RootState'

export const state = (): CatalogFilterState => ({
  brandCode: null,
  brandID: null,
  categoryID: null,
  categorySlug: null,
  modelID: null,
  groupSlug: null
})

export const mutations: MutationTree<CatalogFilterState> = {
  setCategorySlug(state: CatalogFilterState, payload: string): void {
    state.categorySlug = payload
  },
  setGroupSlug(state: CatalogFilterState, payload: string): void {
    state.groupSlug = payload
  },
  setBrandCode(state: CatalogFilterState, payload: string): void {
    state.brandCode = payload
  },
  setBrandID(state: CatalogFilterState, payload: number): void {
    state.brandID = payload
  },
  setModelID(state: CatalogFilterState, payload: number): void {
    state.modelID = payload
  },
  removeModelID(state: CatalogFilterState): void {
    state.modelID = null
  },
  removeBrandCode(state: CatalogFilterState): void {
    state.brandCode = null
    state.brandID = null
    state.modelID = null
  },
  removeBrandID(state: CatalogFilterState): void {
    state.brandCode = null
    state.brandID = null
    state.modelID = null
  }
}

export const getters: GetterTree<CatalogFilterState, RootState> = {
  getFilterList(
    state: CatalogFilterState,
    getters,
    rootState
  ): [BrandFilter, ModelFilter] | [BrandFilter] | null {
    let brandFilter: BrandFilter = { title: '', id: 0, code: '' }
    let modelFilter: ModelFilter = { title: '', id: 0 }
    if (!state.brandID) return null
    rootState.catalog.brands.brands.forEach((brand) => {
      if (brandFilter.title) return null
      if (Number(brand.id) === Number(state.brandID)) {
        brandFilter = { title: brand.title, id: brand.id, code: brand.code }
        if (!state.modelID) return null
        brand.models.forEach((model) => {
          if (modelFilter.title) return null
          if (Number(model.id) === Number(state.modelID)) {
            modelFilter = { title: model.title, id: model.id }
          }
        })
      }
    })
    if (!brandFilter.title) return null
    if (!modelFilter.title) {
      return [brandFilter]
    } else return [brandFilter, modelFilter]
  }
}

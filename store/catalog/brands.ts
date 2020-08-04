import { ActionTree, GetterTree, MutationTree } from 'vuex'
import {
  CatalogBrandsState,
  Brand,
  BrandsResponse,
  BrandModels
} from '@/store/types/Catalog/BrandsTypes'
import { CatalogService } from '~/api/services/catalogService'
import { RootState } from '~/store/types/RootState'
import { MatchingBrand, Sku } from '~/store/types/Catalog/CatalogTypes'
import { AllBrands } from '~/helpers/matchesMapper'

export const state = (): CatalogBrandsState => ({
  brands: []
})

export const getters: GetterTree<CatalogBrandsState, RootState> = {
  getModels(
    state: CatalogBrandsState,
    getters,
    rootState
  ): BrandModels[] | null {
    if (!rootState.catalog.filter.brandID) return null
    if (!state.brands) return null
    if (state.brands.length === 0) return null
    const selectedBrand = state.brands.find(
      (brand) => brand.id === rootState.catalog.filter.brandID
    )
    if (!selectedBrand) return null
    return selectedBrand.models
  },
  getModelsByGroup(
    state: CatalogBrandsState,
    getters,
    rootState
  ): BrandModels[] | null {
    if (!rootState.catalog.filter.brandID) return null
    if (!getters.getFilteredBrands) return null
    if (getters.getFilteredBrands.length === 0) return null
    const selectedBrand = getters.getFilteredBrands.find(
      (brand: MatchingBrand) => brand.id === rootState.catalog.filter.brandID
    )
    if (!selectedBrand) return null
    return selectedBrand.models
  },
  getFilteredBrands(
    state: CatalogBrandsState,
    getters,
    rootState: RootState
  ): MatchingBrand[] {
    if (!rootState.catalog.groups.group) return state.brands
    let forAnyModel = false
    const brands: AllBrands = {}
    const modelIDs: number[] = []
    rootState.catalog.groups.group.skus.forEach((sku: Sku) => {
      if (forAnyModel) return
      if (sku.matches.for_any_model) {
        forAnyModel = true
        return
      }
      if (!sku.matches) return
      if (!sku.matches.brands) return
      if (sku.matches.brands.length === 0) return
      sku.matches.brands.forEach((brand: MatchingBrand) => {
        if (!brands.hasOwnProperty(brand.id)) {
          Object.defineProperty(brands, brand.id, {
            value: JSON.parse(JSON.stringify(brand)),
            enumerable: true,
            writable: true
          })
          modelIDs.push(...brand.models.map((model) => model.id))
        } else {
          brand.models.forEach((model) => {
            if (modelIDs.includes(model.id)) return
            brands[brand.id].models.push(model)
            modelIDs.push(model.id)
          })
        }
      })
    })
    if (forAnyModel) return state.brands
    return Object.values(brands)
  }
}

export const mutations: MutationTree<CatalogBrandsState> = {
  setBrands(state: CatalogBrandsState, response: Brand[]): void {
    state.brands = response
  }
}

export const actions: ActionTree<CatalogBrandsState, {}> = {
  async getBrands({ commit, state }): Promise<void> {
    if (state.brands.length > 0) return
    await CatalogService.getBrands((response: BrandsResponse) => {
      commit('setBrands', response.data)
    })
  }
}

import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { CatalogService } from '~/api/services/catalogService'
import {
  CatalogGroupState,
  GroupsResponse
} from '~/store/types/Catalog/GroupsTypes'
import { RootState } from '~/store/types/RootState'
import { Group } from '~/store/types/Catalog/CatalogTypes'
import { MatchesMapper } from '~/helpers/matchesMapper'

export const state = (): CatalogGroupState => ({
  group: null
})

export const getters: GetterTree<CatalogGroupState, RootState> = {
  getGroups(state: CatalogGroupState): Group | null {
    return state.group
  }
}

export const mutations: MutationTree<CatalogGroupState> = {
  setGroups(state: CatalogGroupState, response: Group): void {
    response.skus = MatchesMapper(response.skus)
    state.group = response
  },
  clearGroups(state: CatalogGroupState): void {
    state.group = null
  }
}

export const actions: ActionTree<CatalogGroupState, RootState> = {
  async getGroup({ commit, rootState }): Promise<void> {
    if (
      !rootState.catalog.filter.groupSlug ||
      !rootState.catalog.filter.categorySlug
    )
      return
    await CatalogService.getGroup(
      rootState.catalog.filter.categorySlug,
      rootState.catalog.filter.groupSlug,
      rootState.catalog.filter.brandID,
      rootState.catalog.filter.modelID,
      (response: GroupsResponse) => {
        commit('setGroups', response.data)
      }
    )
  }
}

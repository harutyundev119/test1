import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { ConfigService } from '~/api/services/configService'
import { Config, ConfigState } from '~/store/types/ConfigTypes'

export const state = (): ConfigState => ({
  config: null
})

export const getters: GetterTree<ConfigState, {}> = {}

export const mutations: MutationTree<ConfigState> = {
  setConfig(state: ConfigState, payload: Config): void {
    state.config = payload
  }
}

export const actions: ActionTree<ConfigState, {}> = {
  async getConfig({ commit }): Promise<void> {
    await ConfigService.getConfig((response: Config) => {
      commit('setConfig', response)
    })
  }
}

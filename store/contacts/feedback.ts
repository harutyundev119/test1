import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { RootState } from '~/store/types/RootState'
import {
  FeedbackState,
  TopicsResponse
} from '~/store/types/Contacts/FeedbackTypes'
import { ContactsService } from '~/api/services/contactsService'
import {
  ErrorResponse,
  SuccessResponse
} from '~/store/types/Contacts/ContactsTypes'

export const state = (): FeedbackState => ({
  topic: null,
  vehicle: null,
  vin: null,
  name: null,
  city: null,
  email: null,
  message: null,
  topics: null,
  requestStatus: null
})

export const mutations: MutationTree<FeedbackState> = {
  setFeedbackProp(
    state: FeedbackState,
    {
      prop,
      value
    }: {
      prop: 'topic' | 'vehicle' | 'vin' | 'name' | 'city' | 'email' | 'message'
      value: string | null
    }
  ): void {
    state[prop] = value || null
  },
  setTopics(state: FeedbackState, response: string[]): void {
    state.topics = response
  },
  setRequestStatus(state: FeedbackState, status: boolean): void {
    state.requestStatus = status
  },
  clearFeedbackForm(state: FeedbackState) {
    state.topic = null
    state.vehicle = null
    state.vin = null
    state.name = null
    state.city = null
    state.email = null
    state.message = null
    state.requestStatus = null
  }
}

export const actions: ActionTree<FeedbackState, RootState> = {
  async sendFeedback({ state, commit }): Promise<void> {
    const data = {
      topic: state.topic,
      vehicle: state.vehicle,
      vin: state.vin,
      name: state.name,
      city: state.city,
      email: state.email,
      message: state.message
    }
    await ContactsService.setFeedback(
      data,
      (response: SuccessResponse) => {
        commit('setRequestStatus', response.success)
        return response.success
      },
      (response: ErrorResponse) => {
        commit('setRequestStatus', false)
        return response
      }
    )
  },
  async getTopics({ commit }): Promise<void> {
    await ContactsService.getFeedbackTopics((response: TopicsResponse) => {
      commit('setTopics', response.data)
    })
  }
}

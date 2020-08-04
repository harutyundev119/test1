import { ActionTree, MutationTree } from 'vuex'
import { RootState } from '~/store/types/RootState'
import {
  Contact,
  ContactsResponse,
  ContactsState
} from '~/store/types/Contacts/ContactsTypes'
import { ContactsService } from '~/api/services/contactsService'

export const state = (): ContactsState => ({
  contacts: []
})

export const mutations: MutationTree<ContactsState> = {
  setContacts(state: ContactsState, response: Contact[]): void {
    state.contacts = response
  }
}

export const actions: ActionTree<ContactsState, RootState> = {
  async getContacts({ commit }): Promise<void> {
    await ContactsService.getContacts((response: ContactsResponse) => {
      commit('setContacts', response.data)
    })
  }
}

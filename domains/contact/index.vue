<template>
  <main class="contact">
    <div class="container">
      <div class="page-top">
        <div class="page-bread">
          <bread class="m-dark"></bread>
        </div>
        <div class="page-line">
          <div class="dealers__title page-h2 m-white">Контакты</div>
        </div>
      </div>
      <div class="contact__persons">
        <contact-persons></contact-persons>
      </div>
      <div class="contact__feedback">
        <transition name="fade">
          <contact-feedback v-if="requestStatus === null"></contact-feedback>
          <contact-success v-else></contact-success>
        </transition>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import Bread from '@/components/global/bread/Bread.vue'
import ContactFeedback from '@/components/global/contactFeedback/ContactFeedback.vue'
import ContactPersons from '@/domains/contact/components/ContactPersons.vue'
import ContactSuccess from './components/ContactSuccess.vue'
export default {
  name: 'Contact',
  components: {
    Bread,
    ContactSuccess,
    ContactFeedback,
    ContactPersons
  },
  computed: {
    ...mapState('contacts/feedback', ['requestStatus'])
  },
  async fetch({ store }) {
    await store.dispatch('catalog/brands/getBrands')
    await store.dispatch('contacts/getContacts')
    await store.dispatch('contacts/feedback/getTopics')
  }
}
</script>

<style lang="postcss">
.contact {
  &__persons {
    margin-bottom: 64px;
    @media (--m) {
      margin-bottom: 128px;
    }
  }
  &__feedback {
    max-width: 797px;
    margin: 0 auto;
  }
}
</style>

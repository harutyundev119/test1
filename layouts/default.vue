<template>
  <div :class="styles.page" class="page">
    <div
      :class="[{ 'm-noindex': isBurger }, styles.pageHeader]"
      class="page-header"
    >
      <header-site></header-site>
    </div>
    <div :class="styles.main" class="page-main">
      <nuxt />
    </div>
    <div class="page-footer">
      <footer-site></footer-site>
    </div>
    <div :style="style" class="page-conva">
      <client-only>
        <Ddd />
      </client-only>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import pages from '@/helpers/pages.js'

import HeaderSite from '@/components/global/header/HeaderSite.vue'
import FooterSite from '@/components/global/footer/FooterSite.vue'

export default {
  name: 'Layout',
  components: {
    HeaderSite,
    FooterSite
  },
  middleware: [
    'beforeRoute',
    'catalogQuery',
    'configOnRoute',
    'eventsQuery',
    'newsQuery',
    'salesQuery',
    'videosMaterialsQuery',
    'posMaterialsQuery'
  ],
  computed: {
    ...mapState('global', ['styles', 'isBurger']),
    ...mapState('global/categories', ['categories']),
    indexRoute() {
      return this.$route.name === 'index'
    },
    style() {
      return this.indexRoute ? { zIndex: 2 } : { zIndex: -1 }
    }
  },
  watch: {
    $route() {
      setTimeout(() => {
        this.setStyles()
      }, 1000)
    }
  },
  created() {
    this.setStyles()
  },
  async mounted() {
    if (this.categories.length === 0)
      await this.$store.dispatch('global/categories/getCategories')
  },
  methods: {
    setStyles() {
      if (pages[this.$route.name]) {
        this.$store.commit('global/setStyles', pages[this.$route.name])
      } else {
        this.$store.commit('global/setStyles', {})
      }
      if (this.$store.state.global.isBurger) {
        this.$store.commit('global/setBurger', false)
      }
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.styles.body
      }
    }
  }
}
</script>

<style lang="postcss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.page-conva {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  @media (--xsm) {
    z-index: 2;
  }
}
</style>

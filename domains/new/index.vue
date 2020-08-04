<template>
  <main class="new">
    <div class="container">
      <div class="new__back">
        <ui-back :to="{ name: 'news' }">новостей</ui-back>
      </div>
      <div class="new__item">
        <content-item :item="currentNews"></content-item>
      </div>
    </div>
    <content-sections :components="currentNews.components" is-white />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import ContentSections from '@/components/global/content/ContentSections.vue'
import ContentItem from '@/components/global/content/ContentItem.vue'

export default {
  transition: 'page-light',
  name: 'New',
  components: {
    ContentItem,
    ContentSections
  },
  props: {
    isDark: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState('news', ['currentNews'])
  }
}
</script>

<style lang="postcss">
.new {
  &__back {
    margin-bottom: 40px;
    @media (--l) {
      margin-bottom: 80px;
    }
  }
  &__item {
    margin-bottom: 64px;
    @media (--l) {
      margin-bottom: 140px;
    }
  }
  &__about {
    margin-bottom: 40px;
    @media (--l) {
      margin-bottom: 140px;
    }
  }
  &__quote {
    margin-bottom: 40px;
    @media (--l) {
      margin-bottom: 100px;
    }
  }
  &__description {
    margin-bottom: 40px;
    @media (--l) {
      margin-bottom: 100px;
    }
  }
}
</style>

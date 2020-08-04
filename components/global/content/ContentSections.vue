<template>
  <div class="contentSections">
    <div
      v-for="(component, $index) in components"
      :key="$index"
      :class="{ 'm-white': isWhite, 'm-dark': isDark }"
      class="contentSections__section"
    >
      <div
        :is="checkTypeComponent(component.type)"
        :content="component.data"
        :is-white="isWhite"
        :is-dark="isDark"
      >
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentTable from '@/components/global/content/ContentTable.vue'
import ContentDescription from '@/components/global/content/ContentDescription.vue'
import ContentAbout from '@/components/global/content/ContentAbout.vue'
import ContentQuote from '@/components/global/content/ContentQuote.vue'
import ContentProgram from '@/components/global/content/ContentProgram.vue'
import ContentSpecial from '@/components/global/content/ContentSpecial.vue'
import ContentSlider from '@/components/global/content/ContentSlider.vue'
export default {
  name: 'ContentSections',
  components: {
    /* eslint-disable vue/no-unused-components */
    ContentTable,
    ContentDescription,
    ContentAbout,
    ContentQuote,
    ContentProgram,
    ContentSpecial,
    ContentSlider
  },
  props: {
    components: {
      type: Array,
      required: true
    },
    isDark: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkTypeComponent(type) {
      switch (type) {
        case 'sku-table':
          return 'ContentTable'
        case 'paragraph':
          return 'ContentDescription'
        case 'image-plus-paragraph':
          return 'ContentAbout'
        case 'paragraph-with-images':
          return 'ContentProgram'
        case 'quote':
          return 'ContentQuote'
        case 'two-images':
          return 'ContentSpecial'
        case 'big-gallery':
          return 'ContentSlider'
      }
    }
  }
}
</script>

<style lang="postcss">
.contentSections {
  margin-bottom: 80px;
  @media (--s) {
    margin-bottom: 120px;
  }
  &__section {
    &:not(:last-child) {
      margin-bottom: 40px;
      @media (--l) {
        margin-bottom: 180px;
      }
    }
  }
}
</style>

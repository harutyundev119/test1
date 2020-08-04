<template>
  <div class="container">
    <div
      :class="{ 'm-white': isWhite, 'm-dark': isDark }"
      class="contentDescription"
    >
      <div class="contentDescription__title page-h4 m-medium">
        {{ content.title }}
      </div>
      <div
        v-html="content.paragraph"
        class="contentDescription__text page-text"
      >
        <div v-if="isSlider" class="contentDescription__slider">
          <content-slider></content-slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentSlider from '@/components/global/content/ContentSlider.vue'
export default {
  name: 'ContentDescription',
  components: {
    ContentSlider
  },
  props: {
    content: {
      type: Object,
      default: () => {}
    },
    isSlider: {
      type: Boolean,
      default: false
    },
    isDark: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss">
.contentDescription {
  max-width: 800px;
  margin: 0 auto;
  &__title {
    padding-bottom: 16px;
    @media (--s) {
      padding-bottom: 24px;
      font-size: 28px;
      line-height: 34px;
    }
  }
  &__text {
    line-height: 1.5;
    white-space: pre-wrap;
    p {
      margin-bottom: 16px;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }
  &__slider {
    margin-bottom: 40px;
    @media (--l) {
      margin-bottom: 48px;
    }
  }
  &.m-dark {
    ^&__title {
      color: #f4f6f7;
    }
    ^&__text.page-text {
      color: #ffffff;
    }
  }
}
</style>

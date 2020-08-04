<template>
  <div class="container">
    <div
      :class="{ 'm-white': isWhite, 'm-dark': isDark }"
      class="contentSpecial"
    >
      <div class="contentSpecial__top">
        <div class="contentSpecial__title page-h2">
          {{ content.title }}
        </div>
        <div
          v-html="content.paragraph"
          class="contentSpecial__text page-text m-lh"
        ></div>
      </div>
      <div class="contentSpecial__content">
        <div class="contentSpecial__item">
          <div
            :style="{ backgroundImage: `url(${content.images.first.path})` }"
            class="contentSpecial__image"
          ></div>
          <div class="contentSpecial__description">
            <div class="contentSpecial__name page-text">
              {{ content.images.first.title }}
            </div>
            <div class="contentSpecial__info page-text">
              {{ content.images.first.description }}
            </div>
          </div>
        </div>
        <div class="contentSpecial__item">
          <div
            :style="{ backgroundImage: `url(${content.images.second.path})` }"
            class="contentSpecial__image"
          ></div>
          <div class="contentSpecial__description">
            <div class="contentSpecial__name page-text ">
              {{ content.images.second.title }}
            </div>
            <div class="contentSpecial__info page-text">
              {{ content.images.second.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentSpecial',
  props: {
    content: {
      type: Object,
      default: () => {}
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
.contentSpecial {
  max-width: 864px;
  margin: 0 auto;
  &.m-dark {
    ^&__title {
      color: #f4f6f7;
    }
    ^&__text {
      color: #ffffff;
    }
    ^&__name.page-text {
      color: #ffffff;
    }
    ^&__info.page-text {
      color: #969fa3;
    }
  }
  &.m-white {
    ^&__title {
      color: #23262c;
    }
    ^&__text {
      color: #23262c;
    }
  }
  &__top {
    margin-bottom: 64px;
    @media (--s) {
      margin-bottom: 100px;
      padding: 0 32px;
    }
  }
  &__title {
    color: #f4f6f7;
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 24px;
    @media (--s) {
      font-size: 45px;
      margin-bottom: 40px;
    }
  }
  &__text {
    max-width: 600px;
    white-space: pre-wrap;
    color: #ffffff;
  }
  &__content {
    width: 100%;
    display: flex;
    @media (--xsm) {
      flex-direction: column;
    }
  }
  &__item {
    @media (--xsm) {
      &:not(:last-child) {
        margin-bottom: 64px;
      }
    }
    @media (--s) {
      flex: 0 0 50%;
      max-width: 300px;
      &:nth-child(2) {
        margin-left: auto;
        margin-top: 80px;
      }
    }
    @media (--m) {
      max-width: 384px;
      &:nth-child(2) {
        margin-top: 162px;
      }
    }
  }
  &__image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 24px;
    padding-bottom: 139.64%;
    @media (--s) {
      margin-bottom: 32px;
      padding-bottom: 125.78%;
    }
  }
  &__info {
    color: #969fa3;
  }
}
</style>

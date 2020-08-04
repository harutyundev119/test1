<template>
  <div class="container">
    <div :class="{ 'm-white': isWhite, 'm-dark': isDark }" class="contentAbout">
      <div class="contentAbout__block">
        <div
          :style="{ backgroundImage: `url(${content.image})` }"
          class="contentAbout__image"
        ></div>
        <div class="contentAbout__name page-text m-fs12">
          {{ content.image_description }}
        </div>
      </div>
      <div class="contentAbout__content">
        <div class="contentAbout__title page-h3 m-medium">
          {{ content.title }}
        </div>
        <div
          v-html="content.paragraph"
          class="contentAbout__text page-text"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentAbout',
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
.contentAbout {
  display: flex;
  @media (--sm) {
    flex-direction: column;
  }
  @media (--m) {
    justify-content: space-between;
  }
  &.m-dark {
    ^&__title {
      color: #f4f6f7;
    }
    ^&__text {
      color: #ffffff;
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
  &__content {
    @media (--sm) {
      order: -1;
      margin-bottom: 16px;
    }
    @media (--m) {
      flex: 0 0 512px;
    }
    @media (--l) {
      flex: 0 0 40%;
    }
  }
  &__title {
    margin-bottom: 16px;
    @media (--m) {
      font-size: 28px;
      line-height: 34px;
      margin-bottom: 24px;
    }
  }
  &__text {
    line-height: 1.5;
    white-space: pre-wrap;
  }
  &__block {
    @media (--m) {
      flex: 1 1 100%;
      margin-right: 40px;
    }
    @media (--l) {
      flex: 0 0 60%;
    }
  }
  &__image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 8px;
    @media (--sm) {
      padding-bottom: 56.43203883%;
      width: 100%;
      height: auto;
    }
    @media (--m) {
      margin-bottom: 24px;
    }
    /*@media (max-width: 599px) {*/
    /*padding-bottom: 100%;*/
    /*}*/
    @media (min-width: 600px) {
      height: 392px;
    }
    @media (--l) {
      padding-bottom: 56.32183908%;
    }
  }
  &__name {
    color: $grey;
  }
}
</style>

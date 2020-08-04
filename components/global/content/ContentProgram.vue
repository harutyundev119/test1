<template>
  <div class="container">
    <div
      :class="{ 'm-white': isWhite, 'm-dark': isDark }"
      class="contentProgram"
    >
      <div class="contentProgram__content">
        <div class="contentProgram__title">
          <div class="contentProgram__name page-h4">
            {{ content.title }}
          </div>
        </div>
        <div class="contentProgram__block">
          <div
            v-html="content.paragraph"
            class="contentProgram__text page-text"
          ></div>
          <div
            v-if="content.images.length === 1"
            :style="{ backgroundImage: `url(${content.images[0].path})` }"
            class="contentProgram__imageSingle"
          ></div>
          <div v-if="content.images.length > 1" class="contentProgram__images">
            <div
              v-for="(image, i) in content.images"
              :key="i"
              class="contentProgram__item"
            >
              <div
                :style="{ backgroundImage: `url(${image.path})` }"
                class="contentProgram__image"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from '@/assets/images/content/program.png'
import img1 from '@/assets/images/content/small1.png'
import img2 from '@/assets/images/content/small2.png'
import img3 from '@/assets/images/content/small3.png'
import img4 from '@/assets/images/content/small4.png'

export default {
  name: 'ContentProgram',
  props: {
    content: {
      type: Object,
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
  data: () => ({
    image: img,
    image1: img1,
    image2: img2,
    image3: img3,
    image4: img4
  })
}
</script>

<style lang="postcss">
.contentProgram {
  &.m-dark {
    ^&__name {
      color: #f4f6f7;
    }
    ^&__text {
      color: #ffffff;
    }
  }
  &.m-white {
    ^&__name {
      color: #23262c;
    }
    ^&__text {
      color: #23262c;
    }
  }
  &:not(:last-child) {
    margin-bottom: 64px;
    @media (--l) {
      margin-bottom: 128px;
    }
  }
  &__content {
    display: flex;
    @media (--xsm) {
      flex-direction: column;
    }
  }
  &__title {
    @media (--s) {
      flex: 0 0 300px;
      margin-right: 35px;
    }
    @media (--m) {
      flex: 0 0 389px;
    }
    @media (--xsm) {
      margin-bottom: 16px;
    }
  }
  &__name {
    font-family: $f-1;
    font-size: 32px;
    line-height: 1;
    text-transform: uppercase;
    max-width: 250px;
    @media (--s) {
      max-width: 264px;
      font-size: 45px;
    }
  }
  &__block {
    @media (--s) {
      flex: 1 1 100%;
    }
  }
  &__text {
    margin-bottom: 24px;
    white-space: pre-wrap;
    line-height: 1.5;
    @media (--s) {
      line-height: 1.5;
      margin-bottom: 48px;
    }
  }
  &__imageSingle {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 100%;
    @media (--sm) {
      padding-bottom: 56.43203883%;
      width: 100%;
      height: auto;
    }
    @media (--s) {
      padding-bottom: 56.18932%;
    }
  }
  &__images {
    display: flex;
    flex-wrap: wrap;
    margin: -7px;
    @media (--s) {
      margin: -20px;
    }
  }
  &__item {
    flex: 0 0 50%;
    padding: 7px;
    @media (--s) {
      padding: 20px;
    }
  }
  &__image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 100%;
    @media (--sm) {
      padding-bottom: 56.43203883%;
      width: 100%;
      height: auto;
    }
  }
}
</style>

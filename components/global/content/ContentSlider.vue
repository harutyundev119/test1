<template>
  <div
    :class="[{ 'm-dark': isDark }, { 'm-light': isWhite }]"
    class="contentSlider"
  >
    <div class="contentSlider__items">
      <client-only>
        <div v-swiper:mySwiper="options">
          <div class="swiper-wrapper">
            <div
              v-for="(item, i) in content.items"
              :key="i"
              class="swiper-slide"
            >
              <div
                :style="{ backgroundImage: `url(${item.url})` }"
                class="contentSlider__image"
              ></div>
            </div>
          </div>
        </div>
      </client-only>
    </div>
    <div class="contentSlider__nav">
      <div class="contentSlider__buttons">
        <div class="contentSlider__button m-prev">
          <ui-button-square class="m-w32" icon="arrow-left" />
        </div>
        <div class="contentSlider__button m-next">
          <ui-button-square class="m-w32" icon="arrow-right" />
        </div>
      </div>
      <div
        slot="pagination"
        class="contentSlider__number swiper-pagination"
      ></div>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import img1 from '@/assets/images/content/item.png'
import img2 from '@/assets/images/content/slider.png'
export default {
  name: 'ContentSlider',
  directives: {
    swiper: directive
  },
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
  },
  data: () => ({
    image1: img1,
    image2: img2,
    options: {
      navigation: {
        nextEl: '.contentSlider__button.m-next',
        prevEl: '.contentSlider__button.m-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      spaceBetween: 16,
      slidesPerView: 'auto',
      breakpoints: {
        768: {
          spaceBetween: 0,

          autoplay: {
            delay: 3000
          }
        }
      }
    }
  })
}
</script>

<style lang="postcss">
.contentSlider {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  &.m-light {
    .contentSlider__button .svg {
      fill: #555e65;
    }
    .contentSlider__number {
      color: #969fa3;
    }
    .swiper-pagination-current {
      color: $dark;
    }
  }
  &.m-dark {
    .contentSlider__button .svg {
      fill: #969fa3;
    }
    .contentSlider__number {
      color: #6f7b82;
    }
    .swiper-pagination-current {
      color: #ffffff;
    }
  }
  &__nav {
    max-width: 116px;
    height: 32px;
    position: relative;
    padding: 0 32px;
    display: flex;
    align-items: center;
    @media (--xsm) {
      display: none;
    }
  }

  &__image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /*@media (--s) {*/
    /*  !*margin-bottom: 24px;*!*/
    /*}*/
    @media (--xsm) {
      padding-bottom: 56.25%;
    }
    @media (--s) {
      padding-bottom: 56.25%;
      margin-bottom: 24px;
    }
  }
  &__buttons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    @media (--xsm) {
      display: none;
    }
  }
  &__number {
    z-index: 0;
    width: 100%;
    text-align: center;
    color: #969fa3;
    position: relative;
    top: 0;
    left: 0;
  }
  &__button {
    position: absolute;
    &.m-prev {
      left: 0;
      top: 0;
    }
    &.m-next {
      right: 0;
      top: 0;
    }
    .svg {
      fill: #969fa3;
    }
    .buttonSquare.m-w32 .svg {
      font-size: 10px;
    }
  }
  .swiper-pagination-current {
    color: $dark;
  }
  .swiper-slide {
    @media (--xsm) {
      width: 240px;
    }
  }
  .swiper-container {
    @media (--xsm) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>

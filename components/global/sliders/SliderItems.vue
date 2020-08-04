<template>
  <div v-if="items !== null" class="sliderItems">
    <div class="sliderItems__top">
      <div
        :class="{ 'm-white': color === 'white' }"
        class="sliderItems__title page-h2"
      >
        <slot name="left"> </slot>
      </div>
      <div
        :class="{ 'm-white': color === 'white' }"
        class="sliderItems__scrollbar"
      ></div>
      <div
        :class="{ 'm-white': color === 'white' }"
        class="sliderItems__buttons"
      >
        <div class="sliderItems__button m-left">
          <ui-button-square class="m-w24" icon="arrow-left" />
        </div>
        <div class="sliderItems__button m-right">
          <ui-button-square class="m-w24" icon="arrow-right" />
        </div>
      </div>
      <div class="sliderItems__more">
        <slot name="right"></slot>
      </div>
    </div>
    <client-only>
      <div v-swiper:mySwiper="options">
        <div class="swiper-wrapper">
          <div
            v-for="(item, i) in items"
            :key="i"
            :style="{ width: item.preview.width + 'px' }"
            class="swiper-slide"
          >
            <slot :item="item"> </slot>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'SliderItems',
  directives: {
    swiper: directive
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => ({
        scrollbar: {
          el: '.sliderItems__scrollbar'
        },
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
          nextEl: '.sliderItems__button.m-right',
          prevEl: '.sliderItems__button.m-left'
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 'auto',
            spaceBetween: 20
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 640px
          1100: {
            slidesPerView: 3,
            spaceBetween: 24
          }
        }
      })
    },
    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style lang="postcss">
.sliderItems {
  .swiper-container {
    overflow: inherit;
  }
  &__top {
    display: flex;
    align-items: center;
    margin-bottom: 35px;
    @media (--l) {
      margin-bottom: 38px;
    }
  }
  &__more {
    display: flex;
    align-items: center;
  }
  &__title {
    margin-right: auto;
  }
  &__item {
    padding: 10px;
  }
  &__buttons {
    display: flex;
    align-items: center;
    margin: 0 28px 0 0;
    @media (--xsm) {
      display: none;
    }
    &.m-white {
      ^^&__button {
        .svg {
          fill: #555e65;
        }
        &:hover {
          .svg {
            fill: $white;
          }
        }
      }
    }
  }
  &__button {
    padding: 0 12px;
    .svg {
      fill: #969fa3;
    }
    &:hover {
      .svg {
        fill: #23262c;
      }
    }
  }
  &__scrollbar {
    background-color: #c6cccf;
    margin-right: 40px;
    display: flex;
    align-items: center;
    width: 152px;
    @media (--xsm) {
      display: none;
    }
    .swiper-scrollbar-drag {
      background-color: #555e65;
      width: 40px;
      height: 1px;
      transition: 0.4s;
    }
    &.m-white {
      background-color: #555e65;
      .swiper-scrollbar-drag {
        background-color: #c6cccf;
      }
    }
  }
}
</style>

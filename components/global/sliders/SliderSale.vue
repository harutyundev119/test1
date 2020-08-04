<template>
  <div v-if="items !== null" class="sliderSale">
    <div v-if="isAll" class="sliderSale__items">
      <ui-link
        :to="{ name: 'sales' }"
        :icon="'arrow-xs-right'"
        class="sliderSale__more m-white"
        >Все акции</ui-link
      >
      <client-only>
        <div v-swiper:mySwiper="options">
          <div class="swiper-wrapper">
            <div
              v-for="(item, i) in items"
              :key="i"
              :style="{ width: item.preview.width + 'px' }"
              class="swiper-slide"
            >
              <div class="sliderSale__item">
                <div class="sliderSale__content">
                  <div class="sliderSale__title page-text m-fs12 m-medium">
                    {{ item.sub_title }}
                  </div>
                  <div class="sliderSale__text page-h3">
                    {{ item.title }}
                  </div>
                </div>
                <div class="sliderSale__image">
                  <div
                    :style="{
                      backgroundImage: `url(${item.images.wide_image})`
                    }"
                    v-tilt="{ speed: 1000, perspective: 1000, max: 5 }"
                    class="sliderSale__img"
                  >
                    <nuxt-link
                      :to="{
                        name: 'sales-slug',
                        params: { slug: item.slug }
                      }"
                      class="cardSale__link"
                    ></nuxt-link>
                    <div class="sliderSale__button">
                      <ui-button
                        v-tilt="{ speed: 1000, perspective: 1000, max: 10 }"
                        class="m-dark m-block m-movementInf"
                      >
                        <span class="movementInf">Узнать больше</span>
                      </ui-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </client-only>
    </div>
    <div class="sliderSale__dots"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'SliderSale',
  directives: {
    swiper: directive
  },
  props: {
    isAll: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    options: {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 3000
      },
      pagination: {
        el: '.sliderSale__dots',
        clickable: true,
        renderBullet(index, className) {
          return `<span class='${className}'></span>`
        }
      },
      autoHeight: true
    }
  }),
  computed: {
    ...mapGetters('sales', {
      items: 'getTopOfActiveSales'
    })
  }
}
</script>

<style lang="postcss">
.sliderSale {
  position: relative;
  &__items {
    margin: -20px;
  }
  &__item {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 20px;
    position: relative;
    @media (--xsm) {
    }
    @media (--s) {
      padding: 20px;
      flex-direction: row;
      align-items: center;
    }
  }

  &__content {
    width: 380px;
    margin-right: 0;
    margin-bottom: 24px;
    padding-bottom: 0;
    @media (--s) {
      flex: 0 0 380px;
      margin-right: 21px;
      margin-bottom: 0;
    }
    @media (--l) {
      flex: 0 0 400px;
      margin-right: 40px;
    }
    @media (min-width: 1800px) {
      flex: 0 0 460px;
      margin-right: 40px;
    }
  }
  &__all {
    margin-bottom: 16px;
    @media (--s) {
      margin-bottom: 64px;
    }
  }
  &__title {
    color: #969fa3;
    margin-bottom: 9px;
    @media (--s) {
      color: #555e65;
      margin-bottom: 16px;
      height: 14px;
      overflow: hidden;
    }
  }
  &__text {
    margin-bottom: 0;
    color: $white;
    font-family: 'HelveticaNeueLT CYR 65 Md';
    font-size: 32px;
    line-height: 136%;
    @media (--s) {
      font-family: $f-2;
      /*height: 156px;*/
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    @media (--m) {
      font-size: 36px;
      text-transform: uppercase;
    }
    @media (--l) {
      font-size: 45px;
    }
  }
  &__image {
    width: 100%;
    @media (--s) {
      width: auto;
      /*flex: 1 1 100%;*/
      align-self: center;
    }
    @media (--l) {
      flex: 0 0 auto;
      margin-left: auto;
      display: flex;
    }
  }
  &__img {
    background-color: color(#ffffff a(50%));
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /*width: 100%;*/
    position: relative;
    filter: grayscale(100%);
    transition: 0.4s;
    padding-bottom: 70%;
    width: 825px;
    height: 465px;
    &:hover {
      filter: grayscale(0%);
    }
    @media (min-width: 560px) {
      padding-bottom: 50%;
    }
    @media (--xsm) {
      margin-bottom: 30px;
    }
    @media (--sm) {
      margin-bottom: 24px;
      padding-bottom: 56.43203883%;
      width: 100%;
      height: auto;
    }
    @media (--s) {
      height: 352px;
      width: 625px;
      padding-bottom: 0px;
    }
    @media (--m) {
      /*position: absolute;*/
      /*top: 0;*/
      /*right: 0;*/
      /*bottom: 0;*/
      width: 758px;
      height: 427px;
    }
    @media (--l) {
      width: 825px;
      height: 465px;
      padding-bottom: 44.06604747%;
    }
    &:hover {
      ^^&__button {
        opacity: 1;
      }
    }
  }
  &__button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 180px;
    opacity: 0;
    transition: 0.4s;
  }
  &__dots {
    display: flex;
    align-items: center;
    position: absolute;
    flex: 1;
    bottom: 70px;
    left: 0;
    width: 160px;
    z-index: 2;
    .swiper-pagination-bullet {
      background-color: color($white a(0.3));
      height: 2px;
      transition: 0.4s;
      margin: 0 4px;
      width: 100%;
      max-width: 34px;
      cursor: pointer;
      position: relative;
      border-radius: 0px;
      &:after {
        position: absolute;
        top: -8px;
        bottom: -8px;
        left: 0;
        right: 0;
        content: '';
        width: 100%;
        z-index: 2;
      }
      &.swiper-pagination-bullet-active {
        background-color: color($white a(1));
      }
    }
    @media (--xsm) {
      left: 50%;
      bottom: 0px;
      transform: translateX(-50%);
    }
  }
  &__more {
    @media (--xsm) {
      padding-left: 20px;
      margin-bottom: 16px;
    }
    @media (--s) {
      position: absolute;
      top: 40px;
      left: 0;
      z-index: 2;
    }
  }
}
</style>

<template>
  <ui-depth :depth="6">
    <div class="cardNewImage">
      <div
        :style="{ backgroundImage: `url(${item.images.square_image})` }"
        class="cardNewImage__image"
      >
        <nuxt-link
          :to="{ name: 'news-slug', params: { slug: item.slug } }"
          class="cardNewImage__link"
        ></nuxt-link>
        <div class="cardNewImage__button">
          <kinesis-element :strength="20" type="depth">
            <ui-button class="m-white m-block m-movementInf"
              ><!--<span class="movementInfText">Узнать больше</span>-->
              <span class="movementInf">Узнать больше</span></ui-button
            >
          </kinesis-element>
        </div>
      </div>
      <div class="cardNewImage__content">
        <div class="cardNewImage__text page-text">
          {{ item.title }}
        </div>
        <div class="cardNewImage__date page-text m-ws-none">
          {{ dateParse }}
        </div>
      </div>
    </div>
  </ui-depth>
</template>

<script>
import { DateParse } from '@/helpers/dateParser'
export default {
  name: 'CardNewImage',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateParse() {
      return DateParse({ from: this.item.date, to: this.item.date, type: true })
    }
  }
}
</script>

<style lang="postcss">
.cardNewImage {
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
    ^&__button {
      opacity: 1;
    }
    .movementInf {
      opacity: 1;
      animation: animMarqueeInf 2.5s linear infinite;
    }
    .movementInfText {
      opacity: 0;
    }
  }
  &__image {
    position: relative;
    margin-bottom: 15px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (--xsm) {
      height: 380px;
    }
    @media (--s) {
      margin-bottom: 24px;
      padding-bottom: 88.22463768%;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    @media (--s) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  &__text {
    color: $dark;
    @media (--xsm) {
      margin-bottom: 16px;
      font-weight: 500;
    }
    @media (--s) {
      padding-right: 56px;
    }
  }
  &__date {
    color: $grey;
    @media (--xsm) {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
    }
  }
  &__link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
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
}
</style>

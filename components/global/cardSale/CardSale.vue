<template>
  <div
    v-tilt="{ speed: 1000, perspective: 1000, max: 6 }"
    :style="itemStyle"
    :class="type"
    class="cardSale"
  >
    <nuxt-link
      :to="{ name: 'sales-slug', params: { slug: item.slug } }"
      class="cardSale__link"
    ></nuxt-link>
    <div class="cardSale__button">
      <ui-button class="m-dark m-block m-movementInf"
        ><!--<span class="movementInfText">Узнать больше</span>-->
        <span class="movementInf">Узнать больше</span>
      </ui-button>
    </div>
    <div class="cardSale__block">
      <div class="cardSale__tag">{{ item.sub_title }}</div>
      <div class="cardSale__title page-h4 m-upp m-medium">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSale',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    isSpecial() {
      return this.item.preview.type === 'special'
    },
    type() {
      if (this.isSpecial) {
        if (this.item.preview.data.font_color === 'light') {
          return 'm-light'
        } else {
          return 'm-dark'
        }
      } else {
        return 'm-bg'
      }
    },
    itemStyle() {
      if (this.isSpecial) {
        return { backgroundColor: this.item.preview.data.background_color }
      } else {
        return { backgroundImage: `url(${this.item.images.square_image})` }
      }
    }
  }
}
</script>

<style lang="postcss">
.cardSale {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 100%;
  transition: 0.4s;
  overflow: hidden;
  &.m-bg {
    filter: grayscale(100%);
    &:hover {
      filter: grayscale(0%);
    }
  }
  &:hover {
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
  @media (--xsm) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
  @media (--s) {
    &:hover &__icon {
      opacity: 1;
    }
  }
  &__block {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 24px;

    @media (--xsm) {
      padding: 16px;
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

  &__link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  &__tag {
    color: $white;
    font-size: 12px;
    @media (--s) {
      font-size: 16px;
    }
  }
  &__title {
    color: $white;
    width: 248px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    height: 72px;
    @media (--s) {
      -webkit-line-clamp: 4;
      height: 98px;
    }
    @media (--l) {
      width: 355px;
    }
  }
  &__image {
    width: 100%;
    max-width: 220px;
    @media (--s) and (--mm) {
      max-width: 170px;
    }

    img {
      display: block;
      width: 100%;
    }
  }
  &__imageBg {
    position: relative;
  }
  &__icon {
    opacity: 0;
    position: absolute;
    top: 24px;
    right: 24px;
    transition: 0.4s;
    .svg {
      fill: $white;
    }
  }

  &.m-dark {
    ^&__tag {
      color: color(#23262c a(56%));
    }
    ^&__title {
      color: $dark;
    }
    ^&__icon {
      .svg {
        fill: $dark;
      }
    }
    ^&__icon {
      .svg {
        fill: $dark;
      }
    }
    ^&__icon {
      .svg {
        fill: $dark;
      }
    }
  }
  &.m-light {
    ^&__tag {
      color: $white;
    }
    ^&__title {
      color: $white;
    }
    ^&__icon {
      .svg {
        fill: $white;
      }
    }
    ^&__icon {
      .svg {
        fill: $white;
      }
    }
    ^&__icon {
      .svg {
        fill: $white;
      }
    }
  }
}
</style>

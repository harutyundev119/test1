<template>
  <div class="saleTop">
    <div class="saleTop__data">{{ item.sub_title }}</div>
    <div class="saleTop__title">
      {{ item.title }}
    </div>
    <div
      :style="{ backgroundImage: `url(${item.images.wide_image})` }"
      class="saleTop__image"
    ></div>
    <div class="saleTop__button">
      <ui-button
        v-scroll-to="'#dealersSection'"
        class="m-white m-border"
        icon="mappoint"
        >Выбрать магазин</ui-button
      >
    </div>
    <div class="saleTop__info page-text m-grey">
      {{ item.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaleTop',
  props: {
    item: {
      type: [Object, null],
      required: true
    }
  }
}
</script>

<style lang="postcss">
.saleTop {
  padding-top: 16px;
  position: relative;
  @media (--s) {
    padding-top: 0px;
  }

  @media (--m) {
    padding-right: 665px;
    position: relative;
    min-height: 465px;
  }
  @media (--l) {
    padding-right: 865px;
  }

  &__data {
    font-family: $f-2;
    font-size: 12px;
    line-height: 14px;
    color: #6f7b82;
    margin-bottom: 16px;
    @media (--m) {
      margin-bottom: 24px;
    }
  }
  &__title {
    font-family: $f-2;
    font-size: 32px;
    line-height: 112%;
    color: $white;
    margin-bottom: 24px;
    @media (--m) {
      font-size: 36px;

      color: #f4f6f7;
      margin-bottom: 93px;
      text-transform: uppercase;
    }
    @media (--l) {
      font-size: 45px;
    }
  }
  &__button {
    margin-bottom: 24px;
  }
  &__image {
    background-color: $grey;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (--sm) {
      margin-bottom: 24px;
      padding-bottom: 56.43203883%;
      width: 100%;
      height: auto;
    }
    @media (--m) {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 625px;
      height: 352px;
    }
    @media (--l) {
      width: 825px;
      height: 465px;
    }
  }
}
</style>

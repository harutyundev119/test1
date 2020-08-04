<template>
  <u-animate-container class="dealerBlock">
    <slot></slot>
    <u-animate
      :offset="0"
      :begin="false"
      delay="0s"
      name="fade"
      duration="1s"
      animate-class="animated slideInDownXs"
      class="dealerBlock__title page-h2 m-white"
      >Дилерская сеть</u-animate
    >
    <u-animate
      :offset="0"
      :begin="false"
      delay="0s"
      name="fade"
      duration="1.5s"
      animate-class="animated slideInDownXs"
      class="dealerBlock__body"
    >
      <div v-click-outside="handleClickOutside" class="dealerBlock__list">
        <dealer-list
          ref="dealerList"
          @open-balloon="$emit('open-balloon', $event)"
          @update-map="$emit('update-map')"
        ></dealer-list>
      </div>
    </u-animate>
  </u-animate-container>
</template>

<script>
import { UAnimateContainer, UAnimate } from 'vue-wow'

import ClickOutside from 'vue-click-outside'
import DealerList from '@/components/global/dealerList/DealerList.vue'
export default {
  name: 'DealerBlock',
  directives: {
    ClickOutside
  },
  components: {
    DealerList,
    UAnimateContainer,
    UAnimate
  },
  methods: {
    handleClickOutside() {
      if (innerWidth < 768) this.$refs.dealerList.handleEsqInput()
    }
  }
}
</script>

<style lang="postcss">
.dealerBlock {
  z-index: 1;
  @media (--xsm) {
    background-color: $dark;
  }
  @media (--s) {
    position: absolute;
    min-height: 200px;
    right: auto;
    top: 90px;
    left: 20px;
    right: 20px;
    max-width: 400px;
    width: 100%;
  }
  @media (--m) {
    left: 48px;
  }
  @media (--l) {
    left: 96px;
  }

  &.m-full {
    @media (--xsm) {
      padding-top: 32px;
    }
  }
  &__title {
    margin-bottom: 24px;
    position: relative;
    z-index: 1;
    @media (--xsm) {
      padding: 0 20px;
    }
  }
  &__list {
    z-index: 2;
    position: relative;
  }
  &__card {
    position: absolute;
    z-index: 1;
    width: 100%;
    max-width: 400px;
  }
  &__map {
    position: relative;
    z-index: 0;
    margin-left: -20px;
    margin-right: -20px;
    @media (--sm) {
      margin-top: 40px;
      height: 516px;
    }
    @media (--s) {
      margin-left: -32px;
      margin-right: -32px;
    }
    @media (--m) {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin-left: -48px;
      margin-right: -48px;
    }
    @media (--l) {
      margin-left: -96px;
      margin-right: -96px;
    }
  }
  .bread {
    position: relative;
    z-index: 1;
    margin-bottom: 8px;
    @media (--xsm) {
      padding: 0 20px;
    }
  }
}
</style>

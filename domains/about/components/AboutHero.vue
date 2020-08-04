<template>
  <div class="aboutHero">
    <u-animate-container class="container">
      <u-animate
        :offset="0"
        :begin="false"
        delay="0s"
        name="fade"
        duration="0.5s"
        animate-class="animated slideInDownXs"
        class="aboutHero__logo"
      >
        <span class="aboutHero__logo-text">СИСТЕМЫ В НОРМЕ</span>
        <img src="@/assets/images/svg/logo-white.svg" alt="" />
      </u-animate>
      <u-animate
        :offset="0"
        :begin="false"
        delay="0s"
        name="fade"
        duration="1.5s"
        animate-class="animated slideInDownXs"
        class="aboutHero__title"
      >
        Бренд LECAR — это&nbsp;личный врач-инженер вашего автомобиля
      </u-animate>
    </u-animate-container>
  </div>
</template>

<script>
import { UAnimateContainer, UAnimate } from 'vue-wow'

export default {
  name: 'AboutHero',
  components: {
    UAnimateContainer,
    UAnimate
  }
}
</script>

<style lang="postcss">
.aboutHero {
  padding: 74px 0 24px;
  background-image: url('~assets/images/about/about-bg-xs.png');
  background-position: center bottom;
  background-size: 320px;
  background-repeat: no-repeat;

  @media (--m) {
    padding: 296px 0 160px;
    margin-bottom: 0px;
    background-image: url('~assets/images/about/about-bg.jpg'),
      linear-gradient(180deg, rgba(35, 38, 44, 0) 31.99%, #23262c 100%);
    background-position: center top;
    background-size: cover;
  }
  &__logo {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
    margin-bottom: 176px;
    text-align: right;
    img {
      width: 100%;
      display: block;
    }
    @media (--m) {
      max-width: 670px;
      margin-bottom: 223px;
    }
    &-text {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #00bed6;
      text-transform: uppercase;
      margin-bottom: 14px;
      @media (--s) {
        margin-bottom: 17px;
      }
    }
  }
  &__title {
    font-size: 32px;
    line-height: 1;
    color: #f4f6f7;
    text-transform: uppercase;
    max-width: 280px;
    width: 100%;
    @media (--m) {
      font-size: 64px;
      max-width: 520px;
    }
  }
}
</style>

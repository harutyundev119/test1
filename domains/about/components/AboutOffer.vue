<template>
  <div class="aboutOffer">
    <div class="aboutOffer__text page-text m-white m-lh">
      <p>
        Бренд LECAR — это личный врач-инженер вашего автомобиля. Если автомобиль
        дает сбой, на приборной панели сразу загорается соответствующий
        индикатор, сообщая о неполадке. Однако, далеко не у всех элементов
        автомобиля есть свои индикаторы, а значит, определить проблему
        автовладельцу сложно. Для этого есть LECAR.
      </p>
      <p>
        Новая линейка автокомпонентов относится к сегменту эконом-класса, это
        практичное и оптимальное по стоимости решение в вопросе обслуживания
        автомобиля.
      </p>
    </div>
    <div class="aboutOffer__image"></div>
    <div class="aboutOffer__categories">
      <categories is-block />
    </div>
  </div>
</template>

<script>
import Categories from '@/components/global/categories/Categories.vue'
export default {
  name: 'AboutOffer',
  components: {
    Categories
  }
}
</script>

<style lang="postcss">
.aboutOffer {
  &__text {
    margin-bottom: 24px;
    @media (--m) {
      margin-bottom: 48px;
      max-width: 536px;
      width: 100%;
    }
  }
  &__image {
    padding-bottom: 34.28571429%;
    background-image: url('~assets/images/about/about-offer.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 40px;
    @media (--m) {
      padding-bottom: 34.46601942%;
      margin-bottom: 64px;
    }
  }
  &__categories {
  }
}
</style>

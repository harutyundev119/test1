<template>
  <div class="aboutNews">
    <div class="container">
      <div class="aboutNews__card">
        <div
          :style="{ backgroundImage: `url(${image01})` }"
          class="aboutNews__top"
        ></div>
        <div class="aboutNews__text page-text m-white m-lh">
          <p>
            LECAR - это собственная марка запасных частей розничной сети «LADA
            Dеталь», которая выступает гарантом качества, надежности и
            безопасности каждой детали.
          </p>
          <p>
            Сеть магазинов «LADA Dеталь» представила новую линейку запчастей,
            аксессуаров и автохимии LECAR. Презентация нового бренда состоялась
            на выставке MIMS Automechanika Moscow 2017.
          </p>
        </div>
      </div>
      <div
        :style="{ backgroundImage: `url(${image02})` }"
        class="aboutNews__image"
      ></div>
    </div>
  </div>
</template>

<script>
import img01 from '@/assets/images/about/about-news-1.jpg'
import img02 from '@/assets/images/about/about-news-2.jpg'
export default {
  name: 'AboutNews',
  data: () => ({
    image01: img01,
    image02: img02
  })
}
</script>

<style lang="postcss">
.aboutNews {
  &__card {
    width: 100%;
    margin-bottom: 64px;
    @media (--s) {
      margin-bottom: 124px;
      margin-left: auto;
      max-width: 424px;
    }
  }
  &__top {
    margin-bottom: 24px;
    padding-bottom: 51.78571429%;
    background-image: url('~assets/images/about/about-news-1.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media (--s) {
      margin-bottom: 48px;
      padding-bottom: 51.6509434%;
    }
  }
  &__image {
    background-image: url('~assets/images/about/about-news-2.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 60%;
    margin-left: -20px;
    margin-right: -20px;
    @media (--s) {
      padding-bottom: 36%;
      margin-left: -32px;
      margin-right: -32px;
    }

    @media (--m) {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
}
</style>

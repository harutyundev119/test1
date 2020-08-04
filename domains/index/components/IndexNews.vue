<template>
  <div v-if="getMainPageNews !== null" class="indexNews">
    <div class="container">
      <slider-items :items="getMainPageNews" :options="options" color="">
        <template #left>
          Новости
        </template>
        <template #right>
          <ui-link
            :to="{ name: 'news' }"
            :icon="'arrow-xs-right'"
            class="m-dark"
            >Все новости</ui-link
          >
        </template>
        <template slot-scope="scope">
          <index-new :news="scope.item"></index-new>
        </template>
      </slider-items>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SliderItems from '@/components/global/sliders/SliderItems.vue'
import IndexNew from './IndexNew.vue'
export default {
  name: 'IndexNews',
  components: {
    SliderItems,
    IndexNew
  },
  data: () => ({
    options: {
      scrollbar: {
        el: '.sliderItems__scrollbar'
      },
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.sliderItems__button.m-right',
        prevEl: '.sliderItems__button.m-left'
      }
    }
  }),
  computed: {
    ...mapGetters('news', ['getMainPageNews'])
  }
}
</script>

<style lang="postcss">
.indexNews {
  background-color: #fff;
  padding: 87px 0 96px;
  border-bottom: 1px solid #c6cccf;
  overflow: hidden;
}
</style>

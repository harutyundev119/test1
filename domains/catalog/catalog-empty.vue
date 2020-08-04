<template>
  <main class="catalog">
    <div class="container">
      <div class="page-top">
        <div class="page-bread">
          <bread></bread>
        </div>
        <div class="page-line">
          <div class="dealers__title page-h2 m-white">
            Механические запчасти
          </div>
          <div class="page-actions"></div>
        </div>
      </div>
    </div>
    <div class="catalog__empty">
      <empty>Товаров <span>по данному запросу</span> нет</empty>
      <empty mod="m-dark"
        >Товаров <span class="m-grey">по данному запросу</span> нет</empty
      >
    </div>
  </main>
</template>

<script>
import Bread from '@/components/global/bread/Bread.vue'
import Empty from '@/components/global/empty/Empty.vue'
export default {
  name: 'Catalog',
  components: {
    Bread,
    Empty
  }
}
</script>

<style lang="postcss">
.catalog {
}
</style>

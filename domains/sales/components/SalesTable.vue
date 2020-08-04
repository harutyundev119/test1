<template>
  <div v-if="items !== null" class="salesTable">
    <div class="salesTable__subtitle page-h5 m-white">Прошедшие акции</div>
    <div
      v-infinite-scroll="infiniteHandler"
      :infinite-scroll-throttle-delay="1000"
      class="table"
    >
      <div class="table__row">
        <div class="table__col m-caption">Название</div>
        <div class="table__col m-caption m-time">Время проведения</div>
      </div>
      <nuxt-link
        v-for="item in items"
        :key="item.id"
        :to="{ name: 'sales-slug', params: { slug: item.slug } }"
        class="table__row m-arrow"
      >
        <div class="table__col">
          <div class="table__item">
            <div
              v-if="item.images"
              :style="{ backgroundImage: `url(${item.images.square_image})` }"
              class="table__image m-hidden-xs"
            ></div>
            <span>{{ item.title }}</span>
          </div>
        </div>
        <div class="table__col m-time">
          <span>{{ item.parsedDate }}</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SalesTable',
  computed: {
    ...mapGetters('sales', {
      items: 'getPassiveSales'
    })
  },
  methods: {
    infiniteHandler() {
      if (!this.IsScrollPagination) return null
      if (this.IsLoading) return null
      this.setLoading(true)
      const currentOffset = Number(this.$route.query.offset) || 0
      this.$router.push({
        name: 'sales',
        query: {
          offset: currentOffset + this.DefaultLimit
        }
      })
    }
  }
}
</script>

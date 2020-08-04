<template>
  <div class="eventsTable">
    <div class="eventsTable__title page-h5 m-white">
      Прошедшие мероприятия
    </div>
    <div
      v-infinite-scroll="infiniteHandler"
      :infinite-scroll-throttle-delay="1000"
      class="table"
    >
      <div class="table__row">
        <div class="table__col m-caption m-time">Дата</div>
        <div class="table__col m-caption">Название</div>
      </div>
      <nuxt-link
        v-for="event in getInactiveEvents"
        :key="event.id"
        :to="{ name: 'events-slug', params: { slug: event.slug } }"
        class="table__row m-arrow"
      >
        <div class="table__col m-time">
          <span>{{ dateParse(event) }}</span>
        </div>
        <div class="table__col">
          <span>
            {{ event.title }}
          </span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import { DateParse } from '@/helpers/dateParser'

export default {
  name: 'EventsTable',
  computed: {
    ...mapState('events', ['defaultLimit', 'isLoading', 'dateFrom', 'dateTo']),
    ...mapGetters('events', ['getInactiveEvents', 'isScrollPagination'])
  },
  methods: {
    ...mapMutations('events', ['setLoading']),
    dateParse(event) {
      return DateParse({ from: event.date_from, to: event.date_to })
    },
    infiniteHandler() {
      if (!this.isScrollPagination) return null
      if (this.isLoading) return null
      this.setLoading(true)
      const currentOffset = Number(this.$route.query.offset) || 0
      const query = {
        offset: currentOffset + this.defaultLimit
      }
      if (this.dateFrom) query.date_from = this.dateFrom
      if (this.dateTo) query.date_to = this.dateTo
      this.$router.push({
        name: 'events',
        query
      })
    }
  }
}
</script>

<style lang="postcss">
.eventsTable {
  &__title {
    margin-bottom: 24px;
    @media (--s) {
      margin-bottom: 40px;
    }
  }
}
</style>

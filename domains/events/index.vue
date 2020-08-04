<template>
  <main class="events">
    <div class="container">
      <events-top></events-top>
      <div class="events__items">
        <div
          v-for="event in getActiveEvents"
          :key="event.id"
          class="events__item"
        >
          <card-event :event="event"></card-event>
        </div>
      </div>
      <div v-if="getInactiveEvents.length !== 0" class="events__bottom">
        <events-table></events-table>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import CardEvent from '@/components/global/cardEvent/CardEvent.vue'

import EventsTable from './components/EventsTable.vue'
import EventsTop from './components/EventsTop.vue'
export default {
  name: 'Events',
  components: {
    CardEvent,
    EventsTable,
    EventsTop
  },
  computed: {
    ...mapState('events', ['dateMeta']),
    ...mapGetters('events', ['getActiveEvents', 'getInactiveEvents'])
  }
}
</script>

<style lang="postcss">
.events {
  &__items {
    margin-bottom: 64px;
    @media (--m) {
      margin-bottom: 100px;
    }
  }
  &__item {
    @media (--m) {
      margin-right: -20px;
      margin-left: -20px;
    }
  }
}
</style>

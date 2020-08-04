<template>
  <div class="event">
    <div class="event__hero">
      <content-hero :item="currentEvent"></content-hero>
    </div>
    <content-sections :components="currentEvent.components" is-white />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ContentHero from '@/components/global/content/ContentHero.vue'
import ContentSections from '@/components/global/content/ContentSections.vue'

export default {
  name: 'Event',
  components: {
    ContentHero,
    ContentSections
  },
  computed: {
    ...mapState('events', ['currentEvent'])
  },
  methods: {}
}
</script>

<style lang="postcss">
.event {
  padding-bottom: 64px;
  @media (--l) {
    padding-bottom: 128px;
  }
  &__hero {
    margin-bottom: 64px;
    @media (--s) {
      margin-bottom: 128px;
    }
  }
}
</style>

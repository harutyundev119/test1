<template>
  <main class="videos">
    <div class="container">
      <div class="page-top">
        <div class="page-bread">
          <bread class="m-dark"></bread>
        </div>
        <div class="page-line">
          <div class="dealers__title page-h2 m-white">Видео</div>
        </div>
      </div>
      <div
        v-infinite-scroll="infiniteHandler"
        :infinite-scroll-throttle-delay="1000"
        class="videos__items"
      >
        <div v-for="video in Videos" :key="video.id" class="videos__item">
          <card-video :video="video"></card-video>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import Bread from '@/components/global/bread/Bread.vue'
import CardVideo from '@/components/global/cardVideo/CardVideo.vue'
export default {
  name: 'Videos',
  components: {
    Bread,
    CardVideo
  },
  computed: {
    ...mapState({
      Videos: (state) => state.videos.videos,
      DefaultLimit: (state) => state.videos.defaultLimit,
      IsLoading: (state) => state.videos.isLoading
    }),
    ...mapGetters({
      IsScrollPagination: 'videos/isScrollPagination'
    }),
    lastIndex() {
      if (!this.Videos) return null
      return this.Videos.length
    }
  },
  methods: {
    ...mapMutations({
      setLoading: 'videos/setLoading'
    }),
    infiniteHandler() {
      if (!this.IsScrollPagination) return null
      if (this.IsLoading) return null
      this.setLoading(true)
      const currentOffset = Number(this.$route.query.offset) || 0
      this.$router.push({
        name: 'videos',
        query: {
          offset: currentOffset + this.DefaultLimit
        }
      })
    }
  }
}
</script>

<style lang="postcss">
.videos {
  &__items {
  }
  &__item {
    @media (--m) {
      margin-right: -20px;
      margin-left: -20px;
    }
  }
}
</style>

<template>
  <!--  <div v-scroll="handleScroll" v-show="indexRoute" class="Ddd">-->
  <!--    <div ref="conva" class="Ddd__conva"></div>-->
  <!--  </div>-->
  <div
    v-scroll="handleScroll"
    v-show="indexRoute"
    :style="`height: ${correctHeight}px`"
    class="Ddd"
  >
    <div id="ddd-conva" ref="conva" class="Ddd__conva"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import DDD from '@kodix/lecar-ddd'
import stickybits from 'stickybits'

export default {
  name: 'Ddd',
  props: {
    item: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      ddd: null,
      timer: null
    }
  },
  computed: {
    ...mapState('global', [
      'isPreloader',
      'isLoadDDD',
      'heroHeight',
      'categoryID'
    ]),
    indexRoute() {
      return this.$route.name === 'index'
    },
    currentRoute() {
      return this.$route.name
    },
    correctHeight() {
      if (!this.heroHeight) return 2000
      return this.heroHeight
    }
  },
  watch: {
    currentRoute() {
      if (this.indexRoute && !this.isLoadDDD) {
        this.ddd.loadPromise().then((e) => {
          this.setLoadDDD(true)
          this.ddd.initAll()
        })
      } else if (!this.indexRoute && this.isLoadDDD) {
        this.ddd.start()
        this.ddd.stop()
      } else if (this.indexRoute && this.isLoadDDD) {
        this.ddd.play()
        this.ddd.render()
      }
    },
    isPreloader(val) {
      if (val) return
      if (this.indexRoute) this.start()
    },
    categoryID() {
      if (this.categoryID === 0) {
        this.ddd.start()
      } else {
        this.ddd.showBySuperCorrectIdFromHTML(this.categoryID)
      }
    }
  },
  mounted() {
    this.createDdd()
    stickybits('#ddd-conva')
  },
  methods: {
    ...mapMutations('global', ['setLoadDDD']),
    createDdd() {
      this.ddd = new DDD({
        container: this.$refs.conva,
        eventContainer: this.$refs.conva,
        onload: () => {},
        debug: false,
        mobile: this.$mq === 's'
      })
      if (this.indexRoute) {
        this.ddd.loadPromise().then((e) => {
          this.setLoadDDD(true)
          this.ddd.initAll()
        })
      }
    },
    start() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.ddd.resize()
        this.ddd.start()
      }, 1000)
    },
    goTo(id) {
      this.timer = setTimeout(() => {
        this.ddd.showBySuperCorrectIdFromHTML(id)
      }, 10)
    },
    handleScroll(evt, el) {
      if (this.$mq === 's') this.scrollPage(0, 200)
      else this.scrollPage(300, 200)
    },
    scrollPage(top, size) {
      if (window.scrollY >= top) {
        const co = (window.scrollY - top) / size
        if (co <= 1) {
          this.ddd.settings.hideGradient = co
        } else if (co >= 1) {
          this.ddd.settings.hideGradient = 1
        }
      }
    }
  }
}
</script>

<style lang="postcss">
.Ddd {
  height: 2000px;
  &__conva {
    overflow: hidden;
    top: 0;
    height: 100vh;
  }
}
</style>

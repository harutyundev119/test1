<template>
  <div class="preloader">
    <div class="preloader__block">
      <div class="preloader__left">
        <div class="preloader__text">Загрузка<br />систем</div>
      </div>
      <div class="preloader__load">
        <div class="preloader__num">
          {{ loaded }}
        </div>
        <div class="preloader__percent">%</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Preloader',
  data: () => ({
    loaded: 0,
    loading: null
  }),
  computed: {
    ...mapState('global', ['isPreloader', 'isLoadDDD'])
  },
  created() {
    this.loading = setInterval(this.load, 50)
  },
  methods: {
    load() {
      if (this.loaded < 99) this.loaded += 1
      else if (this.isLoadDDD) {
        if (this.loaded === 99) this.loaded += 1
        else this.doneLoading()
      }
    },
    doneLoading() {
      clearInterval(this.loading)
      this.removePreloader()
    },
    removePreloader() {
      this.$store.commit('global/setPreloader', false)
    }
  }
}
</script>

<style lang="postcss">
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 999;
  background-color: #18191b;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  &__block {
    padding: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    @media (--xsm) {
      flex-direction: column;
    }
    @media (--s) {
      padding: 98px 96px;
      align-items: center;
    }
  }
  &__left {
    margin-right: 55px;
    @media (--xsm) {
      margin-bottom: 20px;
    }
  }

  &__text {
    font-size: 64px;
    line-height: 1;
    text-transform: uppercase;
    color: $white;
    @media (--xsm) {
      font-size: 34px;
    }
  }
  &__load {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &__num {
    font-weight: 500;
    font-size: 154px;
    line-height: 1;
    text-transform: uppercase;
    color: $white;
    @media (--xsm) {
      font-size: 100px;
    }
  }
  &__percent {
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    text-transform: uppercase;
    color: #555e65;
    align-self: flex-start;
    margin-left: 8px;
  }
}
</style>

<template>
  <div class="burger">
    <div class="scrollContainer">
      <div class="container">
        <div class="burger__top">
          <burger-top></burger-top>
        </div>
        <div class="burger__middle">
          <div class="burger__block">
            <div class="burger__pages">
              <burger-pages
                :is-hover="isHover"
                @is-hover="onHover"
              ></burger-pages>
            </div>
            <div class="burger__categories">
              <burger-categories
                :is-hover="isHover"
                @is-hover="onHover"
              ></burger-categories>
            </div>
          </div>
        </div>
        <div class="burger__bottom">
          <burger-bottom></burger-bottom>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BurgerTop from './components/BurgerTop.vue'
import BurgerBottom from './components/BurgerBottom.vue'
import BurgerPages from './components/BurgerPages.vue'
import BurgerCategories from './components/BurgerCategories.vue'

export default {
  name: 'Burger',
  components: {
    BurgerTop,
    BurgerBottom,
    BurgerPages,
    BurgerCategories
  },
  data: () => ({
    isHover: false
  }),
  methods: {
    onHover(bool) {
      this.isHover = bool
    }
  }
}
</script>

<style lang="postcss">
.burger {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #18191b;
  z-index: 3000;
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .scrollContainer {
    height: 100%;
    min-height: 100vh;
  }
  &__top {
    position: sticky;
    top: 0;
    background-color: #18191b;
  }
  &__middle {
    padding: 40px 0;
    flex: 1 1 100%;
    @media (--s) {
      align-items: center;
      display: flex;
    }
  }
  &__block {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__pages {
    @media (--m) {
      max-width: 755px;
      width: 100%;
    }
  }
  &__categories {
    padding-left: 15px;
    @media (--xsm) {
      display: none;
    }
  }
  &__bottom {
    margin-top: auto;
  }
}
</style>

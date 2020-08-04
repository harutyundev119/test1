<template>
  <u-animate-container id="indexHero" ref="indexHero" class="indexHero">
    <div class="indexHero__top">
      <u-animate
        :offset="0"
        :begin="false"
        delay="0.4s"
        name="fade"
        duration="1s"
        animate-class="animated slideInDownXs"
      >
        <div class="indexHero__title">
          <img src="@/assets/images/index/hero-text.svg" alt="" />
        </div>
      </u-animate>
      <u-animate
        :offset="0"
        :begin="false"
        delay="0.7s"
        name="fade"
        duration="1s"
        animate-class="animated slideInDownXs"
      >
        <div class="indexHero__subtitle">
          Эксклюзивная марка<br />фирменной сети LADA
        </div>
      </u-animate>
    </div>
    <div class="indexHero__catalog">
      <ui-link :to="{ name: 'catalog' }" :icon="'arrow-xs-right'"
        >Каталог</ui-link
      >
    </div>
    <div :class="{ 'm-hover': isHover }" class="indexHero__items">
      <u-animate
        v-for="(category, i) in unfilteredCategories"
        :key="i"
        :offset="0"
        :begin="false"
        :delay="0.8 + 0.02 * i + 's'"
        class="indexHero__item"
        name="fade"
        duration="1s"
        animate-class="animated slideInDownXs"
      >
        <nuxt-link
          :to="{ name: 'categories', params: { slug: category.slug } }"
          :class="{ 'm-active': indexCategory === i }"
          @mouseover.native="startHover(i, category.id)"
          @mouseleave.native="endHover(i)"
          class="indexHero__link"
        >
          {{ category.title }}
        </nuxt-link>
      </u-animate>
      <u-animate
        :offset="0"
        :begin="false"
        delay="1s"
        name="fade"
        duration="1s"
        animate-class="animated slideInDownXs"
      >
        <div class="indexHero__item">
          <nuxt-link
            @mouseover.native="startHoverAll"
            :to="{ name: 'catalog' }"
            class="indexHero__link m-all"
          >
            Все категории
          </nuxt-link>
        </div>
      </u-animate>
    </div>
  </u-animate-container>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { UAnimateContainer, UAnimate } from 'vue-wow'

export default {
  name: 'IndexHero',
  components: {
    UAnimateContainer,
    UAnimate
  },
  data: () => ({
    isHover: false,
    indexCategory: null,
    categoryID: null,
    loaded: false
  }),
  computed: {
    ...mapState('catalog/filteredCategories', ['unfilteredCategories']),
    getImage() {
      return require(`@/assets/images/3d/cat_${this.categoryID}.png`)
    },
    IndexHeroHeight() {
      if (!this.loaded) return null
      return document.getElementById('indexHero').offsetHeight
    }
  },
  watch: {
    IndexHeroHeight() {
      this.SetHeroHeight(this.IndexHeroHeight)
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true
    }, 1000)
  },
  beforeDestroy() {
    this.SetHeroHeight(null)
  },
  methods: {
    ...mapMutations({
      SetHeroHeight: 'global/setHeroHeight',
      setCategoryID: 'global/setCategoryID'
    }),
    startHover(i, id) {
      this.isHover = true
      this.indexCategory = i
      this.categoryID = id
      this.setCategoryID(id)
    },
    startHoverAll() {
      this.categoryID = null
      this.setCategoryID(0)
    },
    endHover(i) {
      this.isHover = false
      this.indexCategory = null
    }
  }
}
</script>

<style lang="postcss">
.indexHero {
  padding: 100px 20px 80px;
  min-width: 320px;
  position: relative;
  @media (--s) {
    min-height: 570px;
    padding: 100px 32px 150px;
  }
  @media (--m) {
    padding: 200px 48px 250px;
  }
  @media (--l) {
    min-height: 770px;
    padding: 153px 96px 250px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    position: relative;
    pointer-events: none;
    @media (--xsm) {
      flex-direction: column;
      min-height: 348px;
      margin-bottom: 53px;
    }
    @media (--s) {
      margin-bottom: 160px;
      z-index: 3;
    }
  }
  &__title {
    max-width: 280px;
    width: 100%;
    @media (--m) {
      max-width: 483px;
    }
    @media (--l) {
      max-width: 683px;
    }
    img {
      width: 100%;
      display: block;
    }
  }
  &__subtitle {
    font-family: $f-2;
    font-size: 12px;
    line-height: 14px;
    color: color(#c6cccf a(0.5));
    @media (--s) {
      font-size: 18px;
      line-height: 1;
      margin-top: 24px;
    }
  }
  &__catalog {
    position: relative;
    z-index: 3;
    @media (--s) {
      display: none;
    }
  }
  &__items {
    position: relative;
    z-index: 3;
    display: inline-block;
    @media (--xsm) {
      display: none;
    }
    &.m-hover {
      ^^&__link {
        color: #555e65;
      }
      ^^&__link.m-active {
        color: #ffffff;
      }
    }
  }
  &__item {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  &__link {
    font-family: $f-2;
    font-size: 18px;
    line-height: 1;
    color: $white;
    transition: 0.4s;
    &.m-all {
      color: #555e65;
      &:hover {
        color: $white;
      }
    }
  }
  &__image {
    max-width: 380px;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    img {
      display: block;
      max-width: 100%;
    }
    @media (--s) {
      left: 30%;
      top: 90px;
      max-width: 500px;
      transform: none;
    }
    @media (--m) {
      left: 40%;
      top: 160px;
      max-width: 700px;
    }
  }
}
</style>

<template>
  <div :class="{ 'm-hover': isHover }" class="burgerPages">
    <nuxt-link
      v-for="(page, i) in pages"
      :key="i"
      :to="page.to"
      :class="[page.mod, { 'm-active': indexPage === i }]"
      @mouseover.native="startHover(i)"
      @mouseleave.native="endHover(i)"
      class="burgerPages__item"
    >
      {{ page.title }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  name: 'BurgerPages',
  props: {
    isHover: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    indexPage: null,
    pages: [
      {
        title: 'Новости',
        mod: 'm-s',
        to: { name: 'news' }
      },
      {
        title: 'Видео',
        mod: 'm-s',
        to: { name: 'videos' }
      },
      {
        title: 'Каталог',
        to: { name: 'catalog' }
      },
      {
        title: 'Акции',
        mod: 'm-first',
        to: { name: 'sales' }
      },
      {
        title: 'О бренде',
        mod: 'm-xs',
        to: { name: 'about' }
      },
      {
        title: 'дилерская сеть',
        to: { name: 'dealers' }
      },
      /* {
        title: 'Мероприятия',
        mod: 'm-s',
        to: { name: 'events' }
      }, */
      {
        title: 'POS материалы',
        mod: 'm-s',
        to: { name: 'materials' }
      },
      {
        title: 'контакты',
        mod: 'm-s',
        to: { name: 'contact' }
      }
    ]
  }),
  methods: {
    startHover(i) {
      this.$emit('is-hover', true)
      this.indexPage = i
    },
    endHover(i) {
      this.$emit('is-hover', false)
      this.indexPage = null
    }
  }
}
</script>

<style lang="postcss">
.burgerPages {
  display: flex;
  flex-wrap: wrap;
  @media (--sm) {
    flex-direction: column;
  }
  @media (--m) {
    margin: -15px;
  }
  &.m-hover {
    ^&__item {
      color: #2c2f36;
    }
    ^&__item.m-active {
      color: #ffffff;
    }
  }
  &__item {
    font-family: $f-2;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    color: $white;
    transition: 0.8s;
    @media (--sm) {
      display: block;
    }
    @media (--m) {
      font-size: 38px;
      line-height: 1;
      margin: 15px;
    }
    &:not(:last-child) {
      @media (--sm) {
        margin-bottom: 10px;
      }
    }
    &.m-first {
      @media (--m) {
        order: -1;
      }
    }
    &.m-s {
      @media (--xsm) {
        font-size: 12px;
        line-height: 14px;
      }
      @media (--sm) {
        order: 1;
      }
    }
    &.m-xs {
      @media (--m) {
        display: none;
      }
    }
  }
}
</style>

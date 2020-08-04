<template>
  <ul class="bread">
    <template v-if="links === null">
      <li class="bread__item">
        <nuxt-link :to="{ name: 'index' }" class="bread__link"
          >Главная</nuxt-link
        >
      </li>
    </template>
    <template v-else>
      <li v-for="(link, i) in links" :key="i" class="bread__item">
        <nuxt-link :to="link.to" class="bread__link">{{
          link.title
        }}</nuxt-link>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'Bread',
  props: {
    links: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="postcss">
.bread {
  display: flex;
  font-size: 12px;
  line-height: 1.2;
  color: $grey;
  &__item {
    padding-right: 12px;
    position: relative;
    &:after {
      position: absolute;
      content: '/';
      top: 50%;
      right: 3px;
      transform: translateY(-50%);
    }
  }
  &__link {
    color: inherit;
  }
  &.m-dark {
  }
}
</style>

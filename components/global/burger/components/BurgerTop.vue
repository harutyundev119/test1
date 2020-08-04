<template>
  <div class="burgerTop">
    <nuxt-link to="/" class="burgerTop__logo">
      <img src="@/assets/images/svg/logo-white.svg" alt="" />
    </nuxt-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'BurgerTop',
  methods: {
    ...mapMutations('global', ['setBurger'])
  }
}
</script>

<style lang="postcss">
.burgerTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  @media (--s) {
    paddinng: 24px 0;
  }
  &__logo {
    flex: 0 0 104px;
    img {
      width: 100%;
      display: block;
    }
  }
}
</style>

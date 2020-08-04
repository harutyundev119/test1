<template>
  <div class="burgerBottom">
    <div class="burgerBottom__about">
      <nuxt-link :to="{ name: 'about' }" class="burgerBottom__brand"
        >О бренде</nuxt-link
      >
    </div>
    <div class="burgerBottom__socials">
      <a
        v-if="config.VK_LINK !== null"
        :href="config.VK_LINK"
        class="burgerBottom__social"
      >
        <ui-icon icon="vk-xs" class="m-w32"></ui-icon>
      </a>
      <a
        v-if="config.OK_LINK !== null"
        :href="config.OK_LINK"
        class="burgerBottom__social"
      >
        <ui-icon icon="ok" class="m-w32"></ui-icon>
      </a>
      <a
        v-if="config.FB_LINK !== null"
        :href="config.FB_LINK"
        class="burgerBottom__social"
      >
        <ui-icon icon="fb-xs" class="m-w32"></ui-icon>
      </a>
      <a
        v-if="config.INSTAGRAM_LINK !== null"
        :href="config.INSTAGRAM_LINK"
        class="burgerBottom__social"
      >
        <ui-icon icon="inst" class="m-w32"></ui-icon>
      </a>
      <a
        v-if="config.YOUTUBE_LINK !== null"
        :href="config.YOUTUBE_LINK"
        class="burgerBottom__social"
      >
        <ui-icon icon="yt-xs" class="m-w32"></ui-icon>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BurgerBottom',
  computed: {
    ...mapState('config', ['config'])
  }
}
</script>

<style lang="postcss">
.burgerBottom {
  padding: 24px 0;
  @media (--s) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (--m) {
    padding: 96px 0;
  }
  &__about {
    font-family: $f-2;
    font-size: 12px;
    line-height: 14px;
    color: #555e65;
    max-width: 180px;
    @media (--xsm) {
      margin-bottom: 24px;
    }
    @media (--s) {
      font-size: 16px;
      line-height: 19px;
      max-width: 235px;
    }
  }
  &__brand {
    text-decoration: underline;
    color: $white;
    @media (--sm) {
      display: none;
    }
  }
  &__socials {
  }
  &__social {
    display: inline-block;
    border: 1px solid #2a2e31;
    margin: 0 6px;
    .svg {
      fill: $white;
      font-size: 12px;
    }
    .svg-vk-xs {
      font-size: 8px;
    }
    .svg-tw-xs {
      font-size: 12px;
    }
    .svg-fb-xs {
      font-size: 12px;
    }
    .svg-yt-xs {
      font-size: 11px;
    }
  }
}
</style>

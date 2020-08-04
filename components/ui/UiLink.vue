<template>
  <div class="uiLink">
    <span v-if="newTab && href" @click="openNewTab" class="uiLink__text">
      <slot></slot>
      <ui-icon :icon="icon" class="uiLink__arrow m-w16"></ui-icon>
    </span>
    <a v-if="!newTab && href" :href="href" class="uiLink__text">
      <slot></slot>
      <ui-icon :icon="icon" class="uiLink__arrow m-w16"></ui-icon>
    </a>
    <nuxt-link v-if="!href && !newTab" :to="to" class="uiLink__text">
      <slot></slot>
      <ui-icon :icon="icon" class="uiLink__arrow m-w16"></ui-icon>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'UiLink',
  props: {
    to: {
      type: Object,
      default: () => {}
    },
    icon: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: null
    },
    newTab: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openNewTab() {
      window.open(this.href)
    }
  }
}
</script>

<style lang="postcss">
.uiLink {
  display: inline-flex;
  align-items: center;
  &__text {
    font-size: 14px;
    line-height: 17px;
    color: $white;
    cursor: pointer;
    @media (--s) {
      font-size: 16px;
      line-height: 19px;
    }
  }
  &__arrow {
    margin-left: 8px;
    .svg {
      fill: $white;
    }
  }
  &.m-dark {
    ^&__text {
      color: $dark;
    }
    ^&__arrow {
      .svg {
        fill: $dark;
      }
    }
  }
}
</style>

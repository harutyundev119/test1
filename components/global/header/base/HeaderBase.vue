<template>
  <header :class="styles.header" class="header">
    <div class="container">
      <slot></slot>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HeaderBase',
  computed: {
    ...mapState('global', ['styles'])
  }
}
</script>

<style lang="postcss">
.header {
  &.m-border {
    border-bottom: 1px solid #e3e6e8;
  }
  &.m-light {
    background-color: #f4f4f4;
  }
  &.m-white {
    background-color: #ffffff;
  }
  &.m-dark {
    background-color: $dark;
    .headerSite {
      &__menu {
        .svg-menu {
          fill: $white;
        }
        &:hover {
          .svg-menu {
            fill: #969fa3;
          }
        }
      }
      &__link {
        color: $white;
        &:hover {
          color: #969fa3;
        }
      }
      &__logo {
        svg {
          path.m-color {
            fill: $white;
          }
        }
      }
    }
    &.m-border {
      border-bottom: 1px solid #555e65;
    }
  }
  &.m-color-1C2128 {
    background-color: #1c2128;
    .headerSite {
      &__menu {
        .svg-menu {
          fill: $white;
        }
        &:hover {
          .svg-menu {
            fill: #969fa3;
          }
        }
      }
      &__link {
        color: $white;
        &:hover {
          color: #969fa3;
        }
      }
      &__logo {
        svg {
          path.m-color {
            fill: $white;
          }
        }
      }
    }
    &.m-border {
      border-bottom: 1px solid #555e65;
    }
  }
  &.m-color-18191B {
    background-color: #18191b;
    .headerSite {
      &__menu {
        .svg-menu {
          fill: $white;
        }
        &:hover {
          .svg-menu {
            fill: #969fa3;
          }
        }
      }
      &__link {
        color: $white;
        &:hover {
          color: #969fa3;
        }
      }
      &__logo {
        svg {
          path.m-color {
            fill: $white;
          }
        }
      }
    }
    &.m-border {
      border-bottom: 1px solid #555e65;
    }
  }
  &.m-transparent {
    background-color: transparent;
  }
}
</style>

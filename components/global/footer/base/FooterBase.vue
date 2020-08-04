<template>
  <footer :class="styles.footer" class="footer">
    <div class="container">
      <slot></slot>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'FooterBase',
  computed: {
    ...mapState('global', ['styles'])
  }
}
</script>

<style lang="postcss">
.footer {
  &.m-border {
    .footerSite {
      border-top: 1px solid #969fa3;
    }
  }
  &.m-light {
    background-color: #f4f4f4;
  }
  &.m-white {
    background-color: #ffffff;
  }
  &.m-dark {
    background-color: $dark;
    .footerSite {
      &__logo {
        svg {
          path.m-color {
            fill: $white;
          }
        }
      }

      &__link a {
        color: $white;
      }
      &__bottom .page-text.m-grey {
        color: #969fa3;
      }
      &__social {
        .svg {
          fill: $white;
        }
      }
    }
    &.m-border {
      .footerSite {
        border-top: 1px solid #ffffff;
      }
    }
  }
}
</style>

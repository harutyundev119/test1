<template>
  <div class="catalogTags">
    <div class="catalogTags__item">
      <div class="catalogTags__mark">
        <base-icon name="mark-1" />
      </div>
      <div class="catalogTags__name">Kia</div>
      <ui-button-square class="m-w16 catalogTags__remove" icon="close" />
    </div>
    <div class="catalogTags__item">
      <div class="catalogTags__name">Carstar</div>
      <ui-button-square class="m-w16 catalogTags__remove" icon="close" />
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/base/BaseIcon.vue'
export default {
  name: 'CatalogTags',
  components: {
    BaseIcon
  }
}
</script>

<style lang="postcss">
.catalogTags {
  display: flex;
  flex-wrap: wrap;
  margin: -4px;
  &__item {
    border: 1px solid #555e65;
    padding: 14px 14px 10px 14px;
    margin: 4px;
    display: flex;
    align-items: center;
  }
  &__mark {
    margin-right: 8px;
    .svg {
      fill: #969fa3;
    }
  }
  &__name {
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }
  &__remove {
    margin-left: 8px;
    .svg {
      fill: #555e65;
      transition: 0.4s;
    }
    &:hover {
      .svg {
        fill: $white;
      }
    }
  }
}
</style>

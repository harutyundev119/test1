<template>
  <div class="catalogMarks">
    <div v-for="(item, index) in icons" :key="index" class="catalogMarks__item">
      <base-icon :name="item.name" />
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/base/BaseIcon.vue'
export default {
  name: 'CatalogMarks',
  components: {
    BaseIcon
  },
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  data: () => ({
    icons: [
      { name: 'mark-1' },
      { name: 'mark-2' },
      { name: 'mark-3' },
      { name: 'mark-4' },
      { name: 'mark-5' },
      { name: 'mark-6' },
      { name: 'mark-7' },
      { name: 'mark-8' },
      { name: 'mark-9' },
      { name: 'mark-10' },
      { name: 'mark-11' }
    ]
  })
}
</script>

<style lang="postcss">
.catalogMarks {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (--xsm) {
    width: 100%;
  }
  &__item {
    padding: 8px;
    @media (--s) {
      padding: 13px;
    }
    .svg {
      fill: #555e65;
      transition: 0.4s;
      cursor: pointer;
      &:hover {
        fill: $white;
      }
    }
    .svg-mark-1 {
      font-size: 16px;
    }
    .svg-mark-2 {
      font-size: 16px;
    }
    .svg-mark-3 {
      font-size: 10px;
    }
    .svg-mark-4 {
      font-size: 10px;
    }
    .svg-mark-5 {
      font-size: 18px;
    }
    .svg-mark-6 {
      font-size: 18px;
    }
    .svg-mark-7 {
      font-size: 20px;
    }
    .svg-mark-8 {
      font-size: 10px;
    }
    .svg-mark-9 {
      font-size: 10px;
    }
    .svg-mark-10 {
      font-size: 12px;
    }
    .svg-mark-11 {
      font-size: 16px;
    }
  }
}
</style>

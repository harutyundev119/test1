<template>
  <div class="indexBrands">
    <div
      v-for="brand in brands"
      :key="brand.id"
      @click="goTo(brand.id)"
      class="indexBrands__item"
    >
      <base-icon :name="`brand-${brand.code}`" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import BaseIcon from '@/components/base/BaseIcon.vue'
export default {
  name: 'IndexBrands',
  components: {
    BaseIcon
  },
  computed: {
    ...mapState('catalog/brands', ['brands'])
  },
  methods: {
    goTo(id) {
      this.$router.push({ name: 'catalog', query: { brand_id: id } })
    }
  }
}
</script>

<style lang="postcss">
.indexBrands {
  margin: -14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  @media (--s) {
    margin-bottom: 150px;
  }
  @media (--m) {
    margin-bottom: 237px;
  }
  &__item {
    padding: 14px;
    cursor: pointer;
    &:hover {
      .svg {
        fill: $white;
      }
    }
    .svg {
      transition: 0.4s;
      fill: #555e65;
    }
  }
}
</style>

<template>
  <div v-if="items !== null" class="tags">
    <div v-for="(item, i) in items" :key="i" class="tags__item">
      <ui-tag
        v-if="i === 0"
        :class="mod"
        @click.native="removeBrand"
        :icon="'brand-' + item.code"
        >{{ item.title }}</ui-tag
      >
      <ui-tag v-else :class="mod" @click.native="removeModel">{{
        item.title
      }}</ui-tag>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UiTags',
  props: {
    mod: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters('catalog/filter', {
      items: 'getFilterList'
    })
  },
  methods: {
    removeModel() {
      const query = Object.assign({}, this.$route.query)
      delete query.model_id
      this.$router.replace({ query })
    },
    removeBrand() {
      const name = this.$route.params.pathName
      this.$router.push({ name, query: {} })
    }
  }
}
</script>

<style lang="postcss">
.tags {
  display: flex;
  flex-wrap: wrap;
  margin: -4px;
  &__item {
    margin: 4px;
    display: flex;
    align-items: center;
  }
}
</style>

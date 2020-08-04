<template>
  <div class="searchText">
    <search-base>
      <search-form>
        <search-text-form></search-text-form>
      </search-form>
      <search-action>
        <search-text-action></search-text-action>
      </search-action>
    </search-base>
    <search-drop></search-drop>
  </div>
</template>

<script>
import SearchBase from './base/SearchBase.vue'
import SearchForm from './base/SearchForm.vue'
import SearchAction from './base/SearchAction.vue'
import SearchDrop from './base/SearchDrop.vue'

import SearchTextForm from './sub/SearchTextForm.vue'
export default {
  name: 'SearchGlobal',
  components: {
    SearchBase,
    SearchForm,
    SearchAction,
    SearchDrop,
    SearchTextForm
  }
}
</script>

<style lang="postcss"></style>

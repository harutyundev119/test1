<template>
  <div class="tabbleFlex">
    <div class="tableFlex__top">
      <slot name="header"></slot>
    </div>
    <div class="tabbleFlex__body">
      <div v-for="(item, i) in items" :key="i" class="tabbleFlex__row">
        <slot v-bind="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableFlex',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>

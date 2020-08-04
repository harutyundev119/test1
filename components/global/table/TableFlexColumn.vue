<template>
  <div class="tableFlexColumn">
    {{ item }}
  </div>
</template>

<script>
export default {
  name: 'TableFlexColumn',
  props: {
    item: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>

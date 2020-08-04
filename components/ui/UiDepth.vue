<template>
  <client-only>
    <kinesis-container>
      <kinesis-element :strength="depth" type="depth">
        <slot></slot>
      </kinesis-element>
    </kinesis-container>
  </client-only>
</template>

<script>
export default {
  name: 'UiDepth',
  props: {
    depth: {
      type: Number,
      default: 10
    }
  }
}
</script>

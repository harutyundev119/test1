<template lang="html">
  <svg :class="fullName" class="svg">
    <use :xlink:href="iconLink"></use>
  </svg>
</template>

<script>
import Sprite from '@/assets/images/svg.svg'
export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconLink() {
      return `${Sprite}#svg-${this.name}`
    },
    fullName() {
      return `svg-${this.name}`
    }
  }
}
</script>

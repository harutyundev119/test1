<template>
  <div class="uiCursor">
    <div
      ref="customCursorCircle"
      :style="circleStyle"
      class="uiCursor__circle"
    ></div>
    <div ref="customCursorDot" :style="dotStyle" class="uiCursor__dot"></div>
  </div>
</template>

<script>
export default {
  name: 'CustomCursor',
  props: {
    targets: {
      type: Array,
      default: () => []
    },
    circleColor: {
      type: String,
      default: ''
    },
    circleColorHover: {
      type: String,
      default: ''
    },
    dotColor: {
      type: String,
      default: ''
    },
    dotColorHover: {
      type: String,
      default: ''
    },
    hoverSize: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      scale: 1,
      x: null,
      y: null,
      circlePosX: null,
      circlePosY: null,
      dotPosX: null,
      dotPosY: null,
      circleStyle: null,
      dotStyle: null
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.customCursor)
  },
  methods: {
    customCursor(e) {
      this.x = e.clientX
      this.y = e.clientY

      const circle = this.$refs.customCursorCircle
      this.circlePosX = this.x - circle.clientWidth / 2
      this.circlePosY = this.y - circle.clientWidth / 2

      const dot = this.$refs.customCursorDot
      this.dotPosX = this.x - dot.clientWidth / 2
      this.dotPosY = this.y - dot.clientHeight / 2

      if (
        (this.targets.length > 0 &&
          this.targets.includes(e.target.tagName.toLowerCase())) ||
        this.targets.includes(e.target.className.toLowerCase())
      ) {
        this.scale = this.hoverSize
        this.circleStyle = { borderColor: this.circleColorHover }
        this.dotStyle = { backgroundColor: this.dotColorHover }
      } else {
        this.scale = 1
        this.circleStyle = { borderColor: this.circleColor }
        this.dotStyle = { backgroundColor: this.dotColor }
      }

      circle.style.transform = `translate(${this.circlePosX}px,${this.circlePosY}px) scale(${this.scale})`
      dot.style.transform = `translate(${this.dotPosX}px,${this.dotPosY}px)`
    }
  }
}
</script>

<style lang="postcss" scoped>
$ease: cubic-bezier(0.23, 1, 0.32, 1);
.uiCursor {
  cursor: none;
  pointer-events: none;
  z-index: 99999999;
  position: relative;
  &__circle {
    position: fixed;
    cursor: none;
    top: 0;
    left: 0;
    width: 34px;
    height: 34px;
    border: 1px solid #2f2f2f;
    border-radius: 50%;
    transform: translate(-100%, -100%);
    transition: transform 0.4s $ease;
  }
  &__dot {
    position: fixed;
    cursor: none;
    top: 1px;
    left: 1px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #2f2f2f;
    transform: translate(-100%, -100%);
    transition: transform 0.2s $ease;
  }
}
</style>

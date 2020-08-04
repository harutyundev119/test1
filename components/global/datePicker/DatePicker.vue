<template>
  <div v-click-outside="handleClickOutsideCalendar" class="datePicker">
    <ui-labeldrop
      :is-active="showCalendar"
      @click.native="toggle"
      :is-white="isWhite"
      :is-dark="isDark"
      :line-text="dateFilterText"
      >{{ dateFilterText }}</ui-labeldrop
    >
    <transition name="fade">
      <ui-calendar
        v-show="showCalendar"
        @input="handleInput"
        @clear="handleClear"
        :first-date="firstDate"
        :last-date="lastDate"
        :start-date="startDate"
        :end-date="endDate"
        @close="toggle"
        :is-open="showCalendar"
        class="m-news m-light"
      ></ui-calendar>
    </transition>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  name: 'DatePicker',
  directives: {
    ClickOutside
  },
  props: {
    startDate: {
      type: String,
      required: true,
      default: ''
    },
    endDate: {
      type: String,
      required: true,
      default: ''
    },
    // Верхнее ограничение календая
    firstDate: {
      type: String,
      required: true,
      default: ''
    },
    // Нижнее ограничение календая
    lastDate: {
      type: String,
      required: true,
      default: ''
    },
    isWhite: {
      type: Boolean,
      default: false
    },
    isDark: {
      type: Boolean,
      default: false
    },
    dateFilterText: {
      type: String,
      default: 'За все время',
      required: true
    }
  },
  data: () => ({
    showCalendar: false
  }),
  methods: {
    handleClickOutsideCalendar(event) {
      // if (event.toElement.attributes['data-trigger-target'])
      if (
        event.toElement.attributes.getNamedItem('data-trigger-target') &&
        event.toElement.attributes.getNamedItem('data-trigger-target').value ===
          'uiCalendar'
      )
        return null
      this.showCalendar = false
    },
    handleInput(value) {
      this.$emit('input', value)
      this.showCalendar = false
    },
    handleClear() {
      this.dateFilterText = 'За все время'
      this.$emit('clear')
    },
    handleClick() {
      this.showCalendar = true
    },
    toggle() {
      this.showCalendar = !this.showCalendar
    }
  }
}
</script>

<style lang="postcss">
.datePicker {
  display: inline-block;
  position: relative;
  &__drop {
    @media (--xsm) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 101;
    }
  }
}
</style>

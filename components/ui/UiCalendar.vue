<template>
  <div class="uiCalendar">
    <div class="uiCalendar__top">
      <span class="uiCalendar__title">Выберите время</span>
      <ui-button-square
        @click.native="$emit('close', true)"
        class="m-w32 m-dark"
        icon="delete"
      />
    </div>
    <div class="uiCalendar__tail" />
    <mq-layout
      v-scroll-lock="isOpen"
      mq="s"
      class="uiCalendar__items scrollContainer"
    >
      <div
        v-for="(year, yearIndex) in config.years"
        :key="year.name"
        @mouseleave="hoveredWeight = -1"
        class="uiCalendar__item"
      >
        <div class="uiCalendar__year">{{ year.name }}</div>
        <div class="uiCalendar__months">
          <div
            v-for="(month, monthIndex) in year.months"
            :key="monthIndex"
            :class="[
              month.disabled && 'm-disabled',
              month.selected && 'm-selected',
              month.between && 'm-between',
              config.startDate &&
                month.weight > config.startDate.weight &&
                month.weight < hoveredWeight &&
                (!config.endDate || month.weight < config.endDate.weight) &&
                'm-between'
            ]"
            @click="handleDateClick(yearIndex, monthIndex)"
            @mouseover="handleMouseOver(month)"
            class="uiCalendar__month"
          >
            {{ month.name }}
          </div>
        </div>
      </div>
    </mq-layout>
    <mq-layout mq="m+" class="uiCalendar__items scrollContainer">
      <div
        v-for="(year, yearIndex) in config.years"
        :key="year.name"
        @mouseleave="hoveredWeight = -1"
        class="uiCalendar__item"
      >
        <div class="uiCalendar__year">{{ year.name }}</div>
        <div class="uiCalendar__months">
          <div
            v-for="(month, monthIndex) in year.months"
            :key="monthIndex"
            :class="[
              month.disabled && 'm-disabled',
              month.selected && 'm-selected',
              month.between && 'm-between',
              config.startDate &&
                month.weight > config.startDate.weight &&
                month.weight < hoveredWeight &&
                (!config.endDate || month.weight < config.endDate.weight) &&
                'm-between'
            ]"
            @click="handleDateClick(yearIndex, monthIndex)"
            @mouseover="handleMouseOver(month)"
            class="uiCalendar__month"
          >
            {{ month.name }}
          </div>
        </div>
      </div>
    </mq-layout>
    <button @click="handleClear" type="button" class="uiCalendar__reset">
      Сбросить
    </button>
  </div>
</template>

<script>
import { CalendarConfigConstructor } from '../../helpers/calendarConfigConstructor'

export default {
  name: 'UiCalendar',
  props: {
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
    // Выбранная начальная дата
    startDate: {
      type: String,
      required: false,
      default: ''
    },
    // Выбранная конечная дата
    endDate: {
      type: String,
      required: false,
      default: ''
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      config: CalendarConfigConstructor({
        firstDate: this.firstDate,
        lastDate: this.lastDate,
        startDate: this.startDate,
        endDate: this.endDate
      }),
      hoveredWeight: -1
    }
  },
  mounted() {
    if (this.startDate && this.endDate) {
      const result = this.config.getValue()
      if (!result) return null
      else this.$emit('input', result)
    }
  },
  methods: {
    handleMouseOver(month) {
      if (!this.config.startDate) this.hoveredWeight = -1
      if (!this.config.endDate) this.hoveredWeight = month.weight + 1
    },
    handleDateClick(yearIndex, monthIndex) {
      this.config.selectDate(yearIndex, monthIndex)
      const result = this.config.getValue()
      if (!result) return null
      else this.$emit('input', result)
    },
    handleClear() {
      this.config.setToDefault()
      this.$emit('clear')
    }
  }
}
</script>

<style lang="postcss">
.uiCalendar {
  width: 100%;
  z-index: 4;
  background-color: $white;
  @media (--xsm) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (--s) {
    max-width: 288px;
  }
  &.m-news {
    min-width: 288px;
    position: absolute;
    top: 46px;
    right: 0;
    @media (--xsm) {
      position: fixed;
      top: 0;
    }
  }
  &.m-light {
    border: 1px solid $dark;
    background-color: $grey-bg;
    ^&__tail {
      border: 1px solid $dark;
      border-width: 1px 1px 0 0;
      background-color: $grey-bg;
    }
  }
  &__top {
    background-color: $dark;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    @media (--s) {
      display: none;
    }
  }
  &__title {
    font-size: 16px;
    line-height: 19px;
    color: $white;
  }
  &__tail {
    width: 9px;
    height: 9px;
    transform: rotate(-45deg);
    position: absolute;
    right: 12px;
    top: -5px;
    @media (--xsm) {
      display: none;
    }
  }
  &__items {
    overflow-y: auto;
    max-height: 365px;
    border-bottom: 1px solid #e3e6e8;
    @media (--xsm) {
      max-height: none;
    }
  }
  &__item {
    display: flex;
    align-items: flex-start;
  }
  &__year {
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: $dark;
    flex: 0 0 71px;
    justify-content: center;
    padding-top: 28px;
  }
  &__months {
    flex: 1 1 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    position: relative;
    padding-top: 10px;
    padding-bottom: 13px;
    &:after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      bottom: 0;
      width: 1px;
      background-color: #e3e6e8;
      z-index: 0;
    }
  }
  &__month {
    font-family: $f-2;
    font-size: 12px;
    line-height: 14px;
    color: $dark;
    height: 56px;
    flex: 0 0 33.33333%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.4s;
    z-index: 1;
    cursor: pointer;
    &:hover {
      border-color: #c6cccf;
    }
    &.m-disabled,
    &:disabled {
      color: #c6cccf;
      cursor: default;
      cursor: not-allowed;
      &:hover {
        border-color: transparent;
      }
    }
    &.m-selected {
      background-color: $dark;
      color: $white;
      &:hover {
        border-color: $dark;
      }
    }
    &.m-between {
      background-color: #e3e6e8;
    }
  }
  &__reset {
    font-size: 16px;
    line-height: 64px;
    height: 64px;
    width: 100%;
    color: $dark;
    text-align: center;
    &:disabled {
      color: #c6cccf;
      cursor: default;
      cursor: not-allowed;
    }
    @media (--xsm) {
      margin-top: auto;
    }
  }
  &__container {
    position: relative;
  }
}
</style>

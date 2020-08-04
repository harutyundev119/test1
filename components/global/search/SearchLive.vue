<template>
  <div v-click-outside="handleEsc" class="searchLive">
    <ui-button
      @click="isActive = !isActive"
      :class="[
        { 'm-white m-grey ': isDark },
        { 'm-dark': isWhite },
        { 'm-light': isLight }
      ]"
      icon="search"
      class="searchLive__button"
    >
      Найти
    </ui-button>
    <transition
      @after-enter="handleSearchEnter"
      @after-leave="handleSearchLeave"
      name="main-search"
    >
      <div
        v-if="isActive"
        :class="[
          { 'm-white': isWhite },
          { 'm-dark': isDark },
          { 'm-light': isLight }
        ]"
        class="searchLive__line"
      >
        <search-main
          ref="searchMain"
          :value="value"
          @input="(val) => $emit('input', val)"
          @clear="$emit('clear')"
          @update-search="$emit('update-search')"
          @keydown.esc.prevent="handleEsc"
          @keydown.enter.prevent="$emit('keydown', $event)"
          :route-name="routeName"
          :placeholder="placeholder"
          :show-results="showResults"
          :result-list="resultList"
          :class="{ 'm-dark': isWhite, 'm-light': isLight }"
        ></search-main>
      </div>
    </transition>
  </div>
</template>

<script>
import SearchMain from '@/components/global/search/SearchMain.vue'
import ClickOutside from 'vue-click-outside'

export default {
  name: 'SearchLive',
  directives: {
    ClickOutside
  },
  components: {
    SearchMain
  },
  props: {
    isWhite: {
      type: Boolean,
      default: false
    },
    isLight: {
      type: Boolean,
      default: false
    },
    isDark: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    resultList: {
      type: Array,
      default: () => [],
      required: true
    },
    value: {
      type: String,
      default: '',
      required: true
    },
    showResults: {
      type: Boolean,
      default: false,
      required: true
    },
    routeName: {
      type: String,
      default: 'news-slug',
      required: true
    }
  },
  data: () => ({
    isActive: false
  }),
  methods: {
    handleEsc(event) {
      this.$emit('keydown', event)
      this.isActive = false
    },
    handleSearchEnter() {
      if (this.$refs.searchMain) this.$refs.searchMain.focus()
    },
    handleSearchLeave() {
      this.$emit('after-close')
    }
  }
}
</script>

<style lang="postcss">
.searchLive {
  &__line {
    position: absolute;
    right: 0;
    left: 0%;
    top: 0;
    opacity: 1;
    max-width: 100%;
    &.m-white {
      background-color: #23262c;
      .searchMainDrop__empty {
        color: $white;
      }
    }

    &.m-dark {
      background-color: #ffffff;
    }
    &.m-light {
      background-color: #f4f4f4;
    }
    &.main-search-enter-active,
    &.main-search-leave-active {
      transition: all 0.5s;
    }
    &.main-search-enter,
    &.main-search-leave-to {
      opacity: 0;
      max-width: 30%;
      left: 70%;
    }
  }
  &__button {
    @media (--xsm) {
      font-size: 14px;
      height: 25px;
    }
    &.m-light {
      color: #23262c;
    }
  }
}
</style>

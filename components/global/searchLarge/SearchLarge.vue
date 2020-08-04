<template>
  <div class="searchLarge">
    <div
      :class="{ 'm-visible': showRunningText && !searchQuery }"
      class="searchLarge__text"
    >
      <div class="searchLarge__placeholder">
        Поиск по наименованию или номеру детали
      </div>
    </div>
    <div class="container">
      <div class="searchLarge__body">
        <input
          ref="searchLargeInput"
          v-model="searchQuery"
          v-debounce:600ms="handleSearch"
          @focus="showRunningText = false"
          @blur="showRunningText = true"
          type="text"
          class="searchLarge__input"
        />
        <div class="searchLarge__button">
          <ui-button-square
            v-if="(showRunningText && !searchQuery) || !searchQuery"
            @click="handleSearchIconClick"
            class="m-w38 m-black m-circle"
            icon="search"
          />
          <ui-button-square
            v-else
            @click="handleClearClick"
            class="m-w38 m-black m-circle"
            icon="delete"
          />
        </div>
      </div>
    </div>
    <search-large-drop
      :items="items"
      :is-empty="isEmpty"
      @select="handleResultClick"
      track="title"
    ></search-large-drop>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

import SearchLargeDrop from './SearchLargeDrop.vue'
export default {
  name: 'SearchLarge',
  components: { SearchLargeDrop },
  data: () => ({
    showRunningText: true
  }),
  computed: {
    searchQuery: {
      get() {
        return this.$store.state.global.skuSearch.query
      },
      set(value) {
        this.$store.commit('global/skuSearch/setQuery', value)
      }
    },
    ...mapState('global/skuSearch', ['items', 'isEmpty']),
    ...mapState('catalog/filter', ['brandID'])
  },
  watch: {
    brandID() {
      if (this.brandID !== null) {
        this.setSearchButton(true)
      }
    }
  },
  methods: {
    ...mapActions({ handleSearch: 'global/skuSearch/getSku' }),
    ...mapMutations({
      clearSkuItems: 'global/skuSearch/clearSkuItems'
    }),
    ...mapMutations('global', ['setSearchButton']),
    handleClearClick() {
      this.searchQuery = ''
      this.clearSkuItems()
    },
    handleResultClick(sku) {
      this.$router.push({
        name: 'group',
        params: {
          cat_slug: sku.category_slug,
          slug: sku.group_slug
        },
        query: {
          id: sku.id
        }
      })
    },
    handleSearchIconClick() {
      this.$refs.searchLargeInput.focus()
    }
  }
}
</script>

<style lang="postcss">
.searchLarge {
  position: relative;
  overflow: hidden;
  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 20px;
    right: 20px;
    height: 1px;
    background-color: #555e65;
    @media (--s) {
      left: 48px;
      right: 48px;
    }
    @media (--l) {
      left: 96px;
      right: 96px;
    }
  }
  &:before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 20px;
    right: 20px;
    height: 1px;
    background-color: #555e65;
    @media (--s) {
      left: 48px;
      right: 48px;
    }
    @media (--l) {
      left: 96px;
      right: 96px;
    }
  }
  &__body {
    height: 70px;
    position: relative;
    overflow: hidden;
    @media (--s) {
      height: 194px;
    }
  }

  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    width: 100%;
    opacity: 0;
    &.m-visible {
      opacity: 1;
    }
  }
  &__placeholder {
    font-size: 22px;
    line-height: 26px;
    color: $white;
    white-space: nowrap;
    transition: 0.4s;
    pointer-events: none;
    animation: animMarqueeInf 10s linear infinite;
    display: inline;
    transition: 0s;
    padding: 0;
    position: absolute;
    right: -100%;
    top: 50%;
    transform: translate(0, -50%);
    line-height: 1;
    pointer-events: none;

    @media (--s) {
      font-size: 86px;
      line-height: 1;
    }
  }
  &__input {
    background: transparent;
    border: none;
    border-radius: 0px;
    height: 100%;
    font-size: 22px;
    line-height: 26px;
    color: $white;
    padding: 0px 20px;
    width: 100%;
    transition: 0.4s;
    position: relative;
    z-index: 1;
    @media (--s) {
      font-size: 86px;
      line-height: 1;
      text-align: center;
    }
    &::-webkit-input-placeholder {
      color: transparent;
    }
    &::-moz-placeholder {
      color: transparent;
    }
    &:-moz-placeholder {
      color: transparent;
    }
    &:-ms-input-placeholder {
      color: transparent;
    }
  }
  &__button {
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    z-index: 1;
    @media (--m) {
      right: 290px;
    }
  }
  .buttonSquare.m-w38 {
    @media (--m) {
      width: 80px;
      height: 80px;
      .svg {
        font-size: 21px;
      }
      .svg-search {
        font-size: 18px;
      }
    }
  }
  &__drop {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
  }
  &:hover {
    ^&__placeholder {
      color: #555e65;
    }
  }
  &.m-dark {
    ^&__input,
    ^&__placeholder {
      color: $dark;
    }
  }
  &.m-catalog {
    &:after,
    &:before {
      display: none;
    }
    ^&__placeholder {
      color: #2c2f36;
    }
    &:hover {
      ^^&__placeholder {
        color: #6f7b82;
      }
    }
  }
}
</style>

<template>
  <div class="dealerList">
    <div class="dealerList__top">
      <span
        v-for="(type, index) in types"
        :key="type.value"
        :class="['dealerList__tab', index === searchType && 'm-active']"
        @click="handleChangeSearchType(index)"
      >
        {{ type.title }}
      </span>
    </div>
    <div class="dealerList__middle">
      <input
        ref="searchInput"
        v-model="searchQuery"
        v-debounce:600ms="handleSearch"
        @focus="handleInputFocus"
        @keydown.up.prevent="prevSelected"
        @keydown.down.prevent="nextSelected"
        @keydown.enter.prevent="handleEnterInput"
        @keydown.esc="handleEsqInput"
        type="text"
        class="dealerList__input"
        placeholder="Введите адрес для поиска"
      />
      <ui-icon icon="search" class="dealerList__search m-w24" />
    </div>
    <div
      ref="scrollContainer"
      :class="[
        'dealerList__bottom scrollContainer',
        (!showResults || searchQuery === '') && 'm-hidden'
      ]"
    >
      <div ref="dealersList" class="dealerList__items">
        <div
          v-for="(dealer, index) in dealers"
          :key="dealer.id"
          :class="['dealerList__item', selected === index && 'm-selected']"
          @click="handleItemClick(index)"
        >
          <span class="page-text m-medium m-white">
            {{ dealer.name }}
          </span>
          <div class="dealerList__address page-text m-fs12">
            {{ dealer.address }}
          </div>
          <ui-icon icon="arrow" class="dealerList__icon m-w16" />
        </div>
        <div
          v-if="dealers.length < 1 && searchQuery !== ''"
          class="dealerList__item m-empty"
        >
          <span class="page-text m-medium m-white">
            Поиск не дал результатов
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'DealerList',
  data: () => ({
    showResults: false,
    constSearchQuery: '',
    selected: -1
  }),
  computed: {
    ...mapState({
      types: (state) => state.dealers.types,
      dealers: (state) => state.dealers.dealers
    }),
    resultItemsHeights() {
      return this.dealers.map((a, index) => {
        return this.$refs.dealersList.children.item(index).clientHeight
      })
    },
    searchType: {
      get() {
        return this.$store.state.dealers.type
      },
      set(value) {
        this.$store.commit('dealers/setType', value)
      }
    },
    searchQuery: {
      get() {
        return this.$store.state.dealers.query
      },
      set(value) {
        this.$store.commit('dealers/setQuery', value)
      }
    }
  },
  methods: {
    ...mapActions({ getDealers: 'dealers/getDealers' }),
    async handleSearch() {
      if (this.constSearchQuery === this.searchQuery) return null
      this.constSearchQuery = this.searchQuery
      this.showResults = false
      await this.getDealers()
      this.selected = -1
      this.showResults = true
      this.$emit('update-map')
    },
    handleChangeSearchType(index) {
      this.searchType = index
      this.constSearchQuery = `${Math.random()}`
      this.handleSearch()
    },
    handleItemClick(index) {
      this.$refs.searchInput.focus()
      this.selected = index
      if (innerWidth < 768) {
        this.$refs.searchInput.blur()
        this.showResults = false
      }
      this.$emit('open-balloon', this.dealers[index].id)
    },
    scrollItemsView() {
      const scrollTo = this.resultItemsHeights
        .slice(0, this.selected)
        .reduce((accum, el) => (accum += el), 0)
      this.$refs.scrollContainer.scroll({
        top: scrollTo,
        left: 0,
        behavior: 'smooth'
      })
    },
    handleInputFocus() {
      if (innerWidth < 768) this.showResults = true
    },
    nextSelected() {
      if (!this.showResults && this.dealers.length > 0) {
        this.showResults = true
        if (this.selected === -1) this.selected = 0
        return null
      }
      if (this.selected === this.dealers.length - 1) this.selected = -1
      else this.selected++
      this.scrollItemsView()
    },
    prevSelected() {
      if (this.selected === -1) this.selected = this.dealers.length - 1
      else this.selected--
      this.scrollItemsView()
    },
    handleEnterInput() {
      if (!this.showResults) {
        this.nextSelected()
        return null
      }
      if (this.selected === -1) return null
      else this.$emit('open-balloon', this.dealers[this.selected].id)
    },
    handleEsqInput() {
      this.showResults = false
    }
  }
}
</script>

<style lang="postcss">
.dealerList {
  background-color: $dark;

  position: relative;
  @media (--s) {
    border: 1px solid #555e65;
    border-bottom: none;
    max-width: 408px;
  }
  &__top {
    padding: 18px 8px;

    @media (--s) {
      padding: 18px 24px 14px;
      margin: 0 -12px 0px -12px;
    }
    @media (--l) {
      padding: 16px 24px 12px;
    }
  }
  &__tab {
    font-size: 12px;
    line-height: 14px;
    color: #555e65;
    margin: 0 12px 13px 12px;
    position: relative;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      color: $white;
    }
    &:after {
      position: absolute;
      content: '';
      bottom: -21px;
      left: 0;
      right: 0;
      background-color: transparent;
      height: 1px;
      pointer-events: none;
      @media (--s) {
        bottom: -18px;
        z-index: 1;
      }
      @media (--l) {
        bottom: -16px;
      }
    }
    &.m-active {
      color: $white;
      &:after {
        background-color: $white;
      }
    }
    @media (--l) {
      line-height: 1;
    }
  }
  &__address {
    color: #6f7b82;
    @media (--s) {
      color: #969fa3;
    }
  }
  &__middle {
    position: relative;
    height: 64px;
    border: 1px solid #555e65;
    border-left: none;
    border-right: none;
    @media (--s) {
      height: 58px;
    }
  }
  &__input {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 0;
    background: none;
    width: 100%;
    padding: 24px 50px 21px 20px;
    font-size: 16px;
    line-height: 19px;
    color: $white;
    @media (--s) {
      padding: 0 50px 0 24px;
    }
    &::-webkit-input-placeholder {
      color: #555e65;
    }
    &::-moz-placeholder {
      color: #555e65;
    }
    &:-moz-placeholder {
      color: #555e65;
    }
    &:-ms-input-placeholder {
      color: #555e65;
    }
  }
  &__search {
    position: absolute !important;
    right: 23px;
    top: 50%;
    transform: translateY(-50%);
    .svg {
      font-size: 15px;
      fill: #555e65;
    }
  }
  &__bottom {
    position: absolute;
    top: 100%;
    left: -1px;
    right: -1px;
    background-color: $dark;
    max-height: 296px;
    transition: max-height 0.4s;
    &.m-hidden {
      transition: max-height 0.4s;
      max-height: 0;
    }
    @media (--s) {
      border: 1px solid #555e65;
      border-top: none;
    }
  }
  &__items {
    padding: 20px 0;
  }
  &__item {
    padding: 12px 40px 12px 24px;
    position: relative;
    cursor: pointer;
    &.m-empty {
      cursor: default;
    }
    &.m-selected {
      background-color: $dark-hover;
    }
    &:hover {
      .svg {
        fill: $white;
      }
    }
  }
  &__icon {
    position: absolute !important;
    top: 12px;
    right: 24px;
    .svg {
      font-size: 12px;
      fill: #969fa3;
      transition: 0.4s;
    }
  }
}
</style>

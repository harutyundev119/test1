<template>
  <div class="page-top">
    <div class="page-bread">
      <bread></bread>
    </div>
    <div :class="['page-line', justifyRight && 'm-right']">
      <transition @after-leave="handleTitleLeave" name="fade">
        <div v-show="showTitle" class="news__title page-h2 m-desktop">
          Новости
        </div>
      </transition>
      <div class="news__title m-mobile page-h2">
        Новости
      </div>
      <transition @before-leave="showTitle = false" name="fade">
        <div v-show="showActions" class="page-actions news__actions">
          <ui-button
            @click.native.self="showCalendar = !showCalendar"
            data-trigger-target="uiCalendar"
            class="m-white m-line m-relative uiCalendar__container"
          >
            {{ dateFilterText }}
            <ui-icon
              @click.native="showCalendar = !showCalendar"
              :icon="showCalendar ? 'arrow-empty-up' : 'arrow-empty-down'"
              class="m-w16 ui-icons-svg-xs"
            />
            <keep-alive>
              <ui-calendar
                v-click-outside="handleClickOutsideCalendar"
                v-if="showCalendar"
                @input="handleCalendarInput"
                @clear="handleCalendarClear"
                :first-date="dateStart"
                :last-date="dateEnd"
                start-date=""
                end-date=""
                class="m-news m-light"
              ></ui-calendar>
            </keep-alive>
          </ui-button>

          <ui-button
            @click="showActions = false"
            :class="['m-white m-grey news__search-button']"
          >
            Найти
            <ui-icon icon="search" class="m-w24 ui-icons-svg" />
          </ui-button>
        </div>
      </transition>
      <transition
        @after-leave="handleSearchLeave"
        @after-enter="handleSearchEnter"
        name="main-search"
      >
        <search-main
          ref="searchMain"
          v-show="showSearch"
          v-model="searchQuery"
          v-click-outside="handleEsc"
          :result-list="newsList"
          :show-results="showResults"
          @keydown.esc="handleEsc"
          @keydown.enter="updateSearch"
          @update-search="updateSearch"
          placeholder="Введите название новости"
          class="news__search-line"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import Bread from '@/components/global/bread/Bread.vue'
import SearchMain from '@/components/global/search/SearchMain.vue'
import UiCalendar from '@/components/ui/UiCalendar'
export default {
  name: 'SearchTop',
  directives: {
    ClickOutside
  },
  component: {
    Bread,
    SearchMain,
    UiCalendar
  },
  props: {
    searchQuery: {
      type: String,
      default: ''
    },
    dateEnd: {
      type: String,
      required: true
    },
    dateStart: {
      type: String,
      required: true
    }
  },
  data: () => ({
    showSearch: false,
    showTitle: true,
    showActions: true,
    showResults: false,
    showCalendar: false,
    constSearchQuery: '',
    justifyRight: false,
    dateFilterText: 'За все время'
  }),
  methods: {
    handleSearchLeave() {
      this.justifyRight = false
      this.showTitle = true
      this.showActions = true
    },
    handleTitleLeave() {
      this.showSearch = true
      this.justifyRight = true
    },
    handleSearchEnter() {
      if (this.$refs.searchMain) this.$refs.searchMain.focus()
    },
    updateSearch() {
      if (this.constSearchQuery === this.searchQuery) return null
      this.constSearchQuery = this.searchQuery
      this.showResults = false
    },
    handleEsc() {
      this.showResults = false
      this.showSearch = false
    },
    /*
     * @returns {object} value
     * @returns {string} value.text текстовое значение для ui
     * @returns {string} value.start начальная дата (YYYY-MM-DD)
     * @returns {string} value.end конечная дата дата (YYYY-MM-DD)
     */
    handleCalendarInput(value) {
      this.dateFilterText = value.text
      this.showCalendar = false
      this.$router.push({
        name: this.$route.name,
        query: { date_from: value.start, data_to: value.end }
      })
    },
    handleCalendarClear() {
      this.dateFilterText = 'За все время'
      // сетим стору по дефолту
    },
    handleClickOutsideCalendar(event) {
      // if (event.toElement.attributes['data-trigger-target'])
      if (
        event.toElement.attributes.getNamedItem('data-trigger-target') &&
        event.toElement.attributes.getNamedItem('data-trigger-target').value ===
          'uiCalendar'
      )
        return null
      this.showCalendar = false
    }
  }
}
</script>

<style></style>

.<template>
  <div class="page-top">
    <div class="page-bread">
      <bread></bread>
    </div>
    <div class="page-line">
      <div class="page-h2">Новости</div>
      <div class="page-search-live">
        <date-picker
          :first-date="dateMeta.earliest"
          :last-date="dateMeta.latest"
          :start-date="dateFrom ? dateFrom : ''"
          :end-date="dateTo ? dateTo : ''"
          :date-filter-text="dateFilterText"
          @input="handleCalendarInput"
          @clear="handleCalendarClear"
          is-dark
        ></date-picker>
        <search-live
          v-model="searchQuery"
          :result-list="searchedItems"
          :show-results="showSearchResults"
          v-debounce:600ms="updateSearch"
          @clear="searchQuery = ''"
          @update-search="updateSearch"
          @keydown.enter.prevent="updateSearch"
          @keydown.esc.prevent="showSearchResults = false"
          @after-close="handleSearchClose"
          route-name="news-slug"
          is-light
          placeholder="Введите название новости"
        ></search-live>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

import Bread from '@/components/global/bread/Bread.vue'
import DatePicker from '@/components/global/datePicker/DatePicker.vue'
import SearchLive from '@/components/global/search/SearchLive.vue'
export default {
  name: 'NewsTop',
  components: {
    DatePicker,
    SearchLive,
    Bread
  },
  data: () => ({
    showSearchResults: false,
    constSearchQuery: '',
    dateFilterText: 'За все время'
  }),
  computed: {
    searchQuery: {
      get() {
        return this.$store.state.news.q || ''
      },
      set(value) {
        this.$store.commit('news/setQuery', value)
      }
    },
    ...mapState('news', ['dateMeta']),
    ...mapState('news', ['searchedItems']),
    ...mapState('news', { dateFrom: 'dateFrom' }),
    ...mapState('news', { dateTo: 'dateTo' })
  },
  methods: {
    ...mapActions('news', ['getNews', 'searchNews']),
    ...mapMutations('news', ['setDateFrom', 'setDateTo']),
    async updateSearch() {
      if (this.constSearchQuery === this.searchQuery) return null
      this.constSearchQuery = this.searchQuery
      this.showSearchResults = false
      await this.searchNews({ offset: null, limit: null })
      this.showSearchResults = true
    },
    handleSearchClose() {
      this.constSearchQuery = ''
      this.searchQuery = ''
      this.showSearchResults = false
    },
    async handleCalendarClear() {
      this.dateFilterText = 'За все время'
      this.setDateFrom(null)
      this.setDateTo(null)
      await this.getNews({ offset: null, limit: null })
      // сетим стору по дефолту
    },
    async handleCalendarInput(value) {
      this.dateFilterText = value.text
      this.setDateFrom(value.start)
      this.setDateTo(value.end)
      await this.getNews({ offset: null, limit: null })
    }
  }
}
</script>

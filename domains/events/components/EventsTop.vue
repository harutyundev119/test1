.<template>
  <div class="page-top">
    <div class="page-bread">
      <bread></bread>
    </div>
    <div class="page-line">
      <div class="page-h2 m-white">Мероприятия</div>
      <div class="page-search-live">
        <keep-alive>
          <date-picker
            :first-date="dateMeta.earliest"
            :last-date="dateMeta.latest"
            :start-date="dateFrom ? dateFrom : ''"
            :end-date="dateTo ? dateTo : ''"
            :date-filter-text="dateFilterText"
            @input="handleCalendarInput"
            @clear="handleCalendarClear"
            is-white
          ></date-picker>
        </keep-alive>
        <search-live
          v-model="innerSearchQuery"
          v-debounce:400ms="updateSearch"
          :result-list="filterByQuery"
          :show-results="showResults"
          @clear="clearSearch"
          @update-search="updateSearch"
          @keydown.enter.prevent="updateSearch"
          @keydown.esc.prevent="showResults = false"
          @after-close="handleSearchClose"
          route-name="events-slug"
          is-white
          placeholder="Введите название новости"
        ></search-live>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import Bread from '@/components/global/bread/Bread.vue'
import DatePicker from '@/components/global/datePicker/DatePicker.vue'
import SearchLive from '@/components/global/search/SearchLive.vue'
export default {
  name: 'EventsTop',
  components: {
    DatePicker,
    SearchLive,
    Bread
  },
  data: () => ({
    showResults: false,
    innerSearchQuery: '',
    dateFilterText: 'За все время'
  }),
  computed: {
    searchQuery: {
      get() {
        return this.$store.state.events.q || ''
      },
      set(value) {
        this.$store.commit('events/setQuery', value)
      }
    },
    ...mapState('events', ['dateMeta']),
    ...mapGetters('events', ['filterByQuery']),
    ...mapState('events', { dateFrom: 'dateFrom' }),
    ...mapState('events', { dateTo: 'dateTo' })
  },
  methods: {
    clearSearch() {
      this.innerSearchQuery = ''
      this.updateSearch()
    },
    async updateSearch() {
      if (this.innerSearchQuery === this.searchQuery) return null
      this.showResults = false
      await setTimeout(() => {
        this.searchQuery = this.innerSearchQuery
        setTimeout(() => {
          this.showResults = true
        }, 400)
      }, 400)
    },
    handleSearchClose() {
      this.innerSearchQuery = ''
      this.searchQuery = ''
      this.showResults = false
    },
    /*
     * @returns {object} value
     * @returns {string} value.text текстовое значение для ui
     * @returns {string} value.start начальная дата (YYYY-MM-DD)
     * @returns {string} value.end конечная дата дата (YYYY-MM-DD)
     */
    handleCalendarInput(value) {
      this.dateFilterText = value.text
      // this.dateFrom = value.start
      // this.dateTo = value.end
      this.$router.push({
        name: this.$route.name,
        query: { date_from: value.start, date_to: value.end }
      })
    },
    handleCalendarClear() {
      this.dateFilterText = 'За все время'
      this.$router.push({
        name: this.$route.name
      })
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

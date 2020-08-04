export default async function({ store, route }) {
  if (route.name === 'events') {
    if (!store.state.events.events) await store.dispatch('events/getEvents')
    const q = route.query.q ? route.query.q : null
    // const qOffset = route.query.offset ? route.query.offset : null
    const qDateFrom = route.query.date_from ? route.query.date_from : null
    const qDateTo = route.query.date_to ? route.query.date_to : null
    if (q !== store.state.events.q) {
      store.commit(`events/setQuery`, q)
    }
    // if (qOffset !== store.state.events.offset) {
    //   store.commit(`events/setOffset`, Number(qOffset))
    // }
    if (qDateFrom !== store.state.events.dateFrom) {
      store.commit(`events/setDateFrom`, qDateFrom)
    }
    if (qDateTo !== store.state.events.dateTo) {
      store.commit(`events/setDateTo`, qDateTo)
    }
    store.commit('events/setLoading', false)
  }
  if (route.name === 'events-slug') {
    if (route.params.slug && route.params.slug !== store.state.events.slug) {
      store.commit(`events/setSlug`, route.params.slug)
      await store.dispatch('events/getEventBySlug')
    }
  }
}

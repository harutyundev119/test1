export default async function({ store, route }) {
  if (route.name === 'news') {
    let paramsChanged = false
    const q = route.query.q ? route.query.q : null
    const qDateFrom = route.query.date_from ? route.query.date_from : null
    const qDateTo = route.query.date_to ? route.query.date_to : null
    if (q !== store.state.news.q) {
      store.commit(`news/setQuery`, q)
      await store.dispatch('news/searchNews')
    }
    if (qDateFrom !== store.state.news.dateFrom) {
      paramsChanged = true
      store.commit(`news/setDateFrom`, qDateFrom)
    }
    if (qDateTo !== store.state.news.dateTo) {
      paramsChanged = true
      store.commit(`news/setDateTo`, qDateTo)
    }
    if (paramsChanged) {
      await store.dispatch('news/getNews', {
        offset: null,
        limit: null,
        add: false
      })
    } else {
      const qOffset = route.query.offset ? Number(route.query.offset) : null
      if (!store.state.news.news)
        await store.dispatch('news/getNews', {
          offset: 0,
          limit: qOffset + store.state.news.defaultLimit,
          add: false
        })
      else {
        const startOffset =
          store.state.news.news.length - store.state.news.defaultLimit
        if (qOffset > startOffset) {
          const quantity = qOffset - startOffset
          await store.dispatch('news/getNews', {
            offset: qOffset,
            limit: quantity,
            add: true
          })
        } else if (qOffset < startOffset) {
          const news = store.state.news.news.slice(0, qOffset)
          store.commit(`news/getNews`, news)
        }
      }
      store.commit('news/setLoading', false)
    }
  }
  if (route.name === 'news-slug') {
    if (route.params.slug && route.params.slug !== store.state.news.slug) {
      store.commit(`news/setSlug`, route.params.slug)
      await store.dispatch('news/getNewsBySlug')
    }
  }
}

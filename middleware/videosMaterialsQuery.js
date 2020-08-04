export default async function({ store, route }) {
  if (route.name === 'videos') {
    const qOffset = route.query.offset ? Number(route.query.offset) : null
    if (!store.state.videos.videos)
      await store.dispatch('videos/getVideos', {
        offset: 0,
        limit: qOffset,
        add: false
      })
    else {
      const startOffset =
        store.state.videos.videos.length - store.state.videos.defaultLimit
      if (qOffset > startOffset) {
        const quantity = qOffset - startOffset
        await store.dispatch('videos/getVideos', {
          offset: qOffset,
          limit: quantity,
          add: true
        })
      } else if (qOffset < startOffset) {
        const videos = store.state.videos.videos.slice(0, qOffset)
        store.commit(`videos/addVideos`, videos)
      }
    }
    store.commit('videos/setLoading', false)
  }
  // if (route.name === 'video-slug') {
  //   if (route.params.slug && route.params.slug !== store.state.news.slug) {
  //     store.commit(`news/setSlug`, route.params.slug)
  //     await store.dispatch('news/getNewsBySlug')
  //   }
  // }
}

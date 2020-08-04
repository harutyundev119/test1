export default async function({ store, route }) {
  if (route.name === 'materials') {
    const qOffset = route.query.offset ? Number(route.query.offset) : null
    if (store.state.pos.pos.length === 0)
      await store.dispatch('pos/getPOS', {
        offset: 0,
        limit: qOffset,
        add: false
      })
    else {
      const startOffset =
        store.state.pos.pos.length - store.state.pos.defaultLimit
      if (qOffset > startOffset) {
        const quantity = qOffset - startOffset
        await store.dispatch('pos/getPOS', {
          offset: qOffset,
          limit: quantity,
          add: true
        })
      } else if (qOffset < startOffset) {
        const pos = store.state.pos.pos.slice(0, qOffset)
        store.commit(`pos/addPos`, pos)
      }
    }
    store.commit('pos/setLoading', false)
  }
}

export default async function({ store, route }) {
  if (route.name === 'sales') {
    if (!store.state.sales.sales) await store.dispatch('sales/getSales')
    const qOffset = route.query.offset ? route.query.offset : null
    if (qOffset !== store.state.sales.offset) {
      store.commit(`sales/setOffset`, Number(qOffset))
    }
  }
  if (route.name === 'sales-slug') {
    if (route.params.slug && route.params.slug !== store.state.sales.slug) {
      store.commit(`sales/setSlug`, route.params.slug)
      await store.dispatch('sales/getCurrentSale')
    }
  }
}

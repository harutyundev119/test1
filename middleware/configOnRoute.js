export default async function({ store, route }) {
  if (store.state.config.config) return
  await store.dispatch('config/getConfig')
}

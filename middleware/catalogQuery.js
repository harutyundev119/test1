const inferredPages = ['catalog', 'categories', 'group']

export default async function({ store, route }) {
  if (inferredPages.includes(route.name)) {
    const isBrandChanged =
      Number(route.query.brand_id) !==
      Number(store.state.catalog.filter.brandID)
    const isModelChanged =
      Number(route.query.model_id) !==
      Number(store.state.catalog.filter.modelID)
    const isSlugChanged =
      route.params.cat_slug !== store.state.catalog.filter.categorySlug ||
      route.params.slug !== store.state.catalog.filter.groupSlug
    if (route.name === 'catalog' && !isBrandChanged && !isModelChanged) return
    else if (!isBrandChanged && !isModelChanged && !isSlugChanged) return
    if (!route.query.brand_id) {
      store.commit(`catalog/filter/removeBrandID`)
      store.commit(`catalog/filteredCategories/clearCategories`)
    } else {
      store.commit(`catalog/filter/setBrandID`, Number(route.query.brand_id))
      const modelID = Number(route.query.model_id) || null
      store.commit(`catalog/filter/setModelID`, modelID)
      if (isModelChanged && route.name !== 'catalog')
        await store.dispatch('catalog/filteredCategories/getCategories')
    }
    if (isBrandChanged || isModelChanged || isSlugChanged) {
      switch (route.name) {
        case 'catalog':
          await store.dispatch('catalog/filteredCategories/getCategories')
          break
        case 'categories':
          store.commit(`catalog/filter/setCategorySlug`, route.params.slug)
          await store.dispatch('catalog/category/getCategory')
          break
        case 'group':
          store.commit(`catalog/filter/setCategorySlug`, route.params.cat_slug)
          store.commit(`catalog/filter/setGroupSlug`, route.params.slug)
          await store.dispatch('catalog/groups/getGroup')
          break
      }
    }
  }
  // } else {
  //   store.commit(`catalog/filter/removeBrandID`)
  //   store.commit(`catalog/category/clearCategory`)
  //   store.commit(`catalog/filter/setCategorySlug`, null)
  //   store.commit(`catalog/filter/setGroupSlug`, null)
  // }
}

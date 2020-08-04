export default {
  setStyles(
    state,
    {
      body = null,
      page = null,
      pageHeader = null,
      main = null,
      header = null,
      footer = null
    }
  ) {
    state.styles = {
      body,
      page,
      pageHeader,
      main,
      header,
      footer
    }
  },
  setBurger(state, payload) {
    state.isBurger = payload
  },
  setPreloader(state, payload) {
    state.isPreloader = payload
  },
  setHeroHeight(state, payload) {
    state.heroHeight = payload
  },
  setLoadDDD(state, payload) {
    state.isLoadDDD = payload
  },
  setSearchButton(state, payload) {
    state.isSearchButton = payload
  },
  setCategoryID(state, payload) {
    state.categoryID = payload
  },
  setSkuImages(state, { images = [], i = null }) {
    state.skuIndex = i

    if (images.length === 0) {
      state.skuImage = images
    } else {
      const data = []
      images.forEach((item) => {
        data.push(item.path)
      })
      state.skuImages = data
    }
  }
}

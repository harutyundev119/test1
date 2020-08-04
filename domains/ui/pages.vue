<template>
  <div>
    <div class="ui-title">
      Pages
    </div>
    <div class="ui-items">
      <div v-for="(item, index) in links" :key="index" class="ui-item">
        <nuxt-link :to="item.link" :class="item.class" class="ui-page">
          {{ item.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiPages',
  data: () => ({
    links: [
      { name: 'Index', link: '/', class: '' },
      { name: 'Dealers', link: '/dealers', class: '' },
      { name: 'Contact', link: '/contact', class: '' },
      { name: 'About', link: '/about', class: '' },
      { name: 'Catalog', link: '/catalog', class: '' },
      { name: 'Catalog-empty', link: '/catalog-empty', class: '' },
      { name: 'Events', link: '/events', class: '' },
      { name: 'Event', link: '/event', class: '' },
      { name: 'News', link: '/news', class: '' },
      { name: 'New', link: '/new', class: '' },
      { name: 'Sales', link: '/sales', class: '' },
      { name: 'sales-slug', link: '/sale', class: '' },
      { name: 'Materials', link: '/materials', class: '' },
      { name: 'Product', link: '/product', class: '' },
      { name: 'Videos', link: '/videos', class: '' }
    ]
  })
}
</script>

<style lang="postcss" scoped>
.ui-title {
  font-size: 16px;
  line-height: 45px;
  color: $purple;
  margin-bottom: 15px;
}
.ui-items {
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
}
.ui-item {
  display: flex;
  align-items: center;
  padding: 10px;
}
.ui-page {
  background-color: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0);
  font-size: 16px;
  color: $dark;
  transition: 0.4s;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  &.m-red {
    background-color: #ffd4d4;
  }
  &. {
    background-color: #fff7b7;
  }
  &.m-green {
    background-color: #d3ffd9;
  }
}
</style>

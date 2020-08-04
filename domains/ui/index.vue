<template>
  <div class="ui">
    <div class="ui-aside">
      <div class="ui-links">
        <nuxt-link
          :to="item.to"
          v-for="(item, index) in links"
          :key="index"
          class="ui-page"
        >
          {{ item.name }}
        </nuxt-link>
      </div>
    </div>
    <div class="ui-content">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ui',
  layout: 'ui',
  data: () => ({
    links: [
      { name: 'UI typography', to: { name: 'ui-typography' } },
      { name: 'UI colors', to: { name: 'ui-colors' } },
      { name: 'UI icons', to: { name: 'ui-icons' } },
      { name: 'UI buttons', to: { name: 'ui-buttons' } },
      { name: 'UI forms', to: { name: 'ui-forms' } },
      { name: 'Components', to: { name: 'ui-components' } },
      { name: 'Pages', to: { name: 'ui-pages' } }
    ]
  })
}
</script>

<style lang="postcss" scoped>
.ui {
  box-sizing: border-box;
  padding: 20px;
  position: relative;

  @media (--s) {
    display: flex;
    padding: 50px 50px 20px 180px;
  }
}
.ui-aside {
  margin: -5px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: $white;
  z-index: 2;
  padding: 20px 0;
  @media (--s) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: auto;
    overflow-y: auto;
    padding: 0;
  }
}
.ui-links {
  @media (--s) {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
.ui-page {
  background-color: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0);
  font-size: 12px;
  color: $dark;
  transition: 0.4s;
  white-space: nowrap;
  display: inline-block;
  @media (--s) {
    font-size: 14px;
  }
  &:not(:last-child) {
    margin: 5px;
    @media (--s) {
      margin: 0;
      margin-bottom: 15px;
    }
  }
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
}
.ui-content {
  flex: 1 1 100%;
}
.ui-title {
  font-size: 16px;
  line-height: 45px;
  color: $purple;
  margin-bottom: 15px;
}
.ui-text {
  font-size: 14px;
  color: $dark;
  margin-left: 10px;
}
.ui-items {
  display: flex;
  flex-wrap: wrap;
  margin: -10px -10px 30px;
}
.ui-item {
  display: flex;
  align-items: center;
  padding: 10px;
  &.m-1-1 {
    flex: 0 0 100%;
  }
  &.m-1-2 {
    flex: 0 0 50%;
  }
  &.m-1-3 {
    flex: 0 0 33.3333333333%;
  }
  &.m-1-4 {
    flex: 0 0 25%;
  }
  &.m-1-5 {
    flex: 0 0 20%;
  }
  &.m-1-6 {
    flex: 0 0 16.6666666667%;
  }
  &.m-1-7 {
    flex: 0 0 14.2857142857%;
  }
}
</style>

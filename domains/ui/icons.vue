<template>
  <div>
    <div class="ui-title">
      Ui Icons
    </div>
    <div class="ui-items">
      <div v-for="(item, index) in icons" :key="index" class="ui-item">
        <ui-icon :icon="item.name" class="m-w24 ui-icons-svg" />
        <div class="ui-text">{{ item.name }}</div>
      </div>
    </div>
    <div class="ui-items">
      <div v-for="(item, index) in socials" :key="index" class="ui-item m-1-8">
        <ui-icon :icon="item.name" class="m-w24 ui-icons-svg" />
        <div class="ui-text">{{ item.name }}</div>
      </div>
    </div>
    <div class="ui-items">
      <div v-for="(item, index) in marks" :key="index" class="ui-item m-1-4">
        <ui-icon :icon="item.name" class="m-w48 ui-icons-svg-xs" />
        <div class="ui-text">{{ item.name }}</div>
      </div>
    </div>
    <div class="ui-items">
      <div v-for="(item, index) in marks2" :key="index" class="ui-item m-1-4">
        <ui-icon :icon="item.name" class="m-w48 ui-icons-svg-xs" />
        <div class="ui-text">{{ item.name }}</div>
      </div>
    </div>
    <div class="ui-items">
      <div v-for="(item, index) in categorys" :key="index" class="ui-item">
        <ui-icon :icon="item.name" class="m-w24 ui-icons-svg" />
        <div class="ui-text">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiIcons',
  data: () => ({
    icons: [
      { name: 'arrow-empty-down' },
      { name: 'arrow-empty-right' },
      { name: 'arrow-empty-up' },
      { name: 'arrow-left' },
      { name: 'arrow-right' },
      { name: 'arrow-xs-left' },
      { name: 'arrow-xs-right' },
      { name: 'arrow' },
      { name: 'calendar' },
      { name: 'close' },
      { name: 'copy' },
      { name: 'download' },
      { name: 'delete' },
      { name: 'eye' },
      { name: 'mail' },
      { name: 'mappoint' },
      { name: 'menu' },
      { name: 'minus' },
      { name: 'phone' },
      { name: 'play' },
      { name: 'plus' },
      { name: 'remove' },
      { name: 'search' },
      { name: 'warning' }
    ],
    socials: [
      { name: 'fb' },
      { name: 'inst' },
      { name: 'ok' },
      { name: 'vk' },
      { name: 'yt' },
      { name: 'fb-xs' },
      { name: 'tw-xs' },
      { name: 'vk-xs' },
      { name: 'yt-xs' }
    ],
    marks: [
      { name: 'mark-1' },
      { name: 'mark-2' },
      { name: 'mark-3' },
      { name: 'mark-4' },
      { name: 'mark-5' },
      { name: 'mark-6' },
      { name: 'mark-7' },
      { name: 'mark-8' },
      { name: 'mark-9' },
      { name: 'mark-10' },
      { name: 'mark-11' }
    ],
    marks2: [
      { name: 'brand-belaz' },
      { name: 'brand-chevrolet' },
      { name: 'brand-daewoo' },
      { name: 'brand-datsun' },
      { name: 'brand-gaz' },
      { name: 'brand-hyundai' },
      { name: 'brand-kia' },
      { name: 'brand-kraz' },
      { name: 'brand-lada' },
      { name: 'brand-maz' },
      { name: 'brand-moaz' },
      { name: 'brand-opel' },
      { name: 'brand-paz' },
      { name: 'brand-renault' },
      { name: 'brand-uaz' },
      { name: 'brand-ural' }
    ],
    categorys: [
      { name: 'category-1' },
      { name: 'category-2' },
      { name: 'category-3' },
      { name: 'category-4' },
      { name: 'category-5' },
      { name: 'category-6' },
      { name: 'category-7' },
      { name: 'category-8' },
      { name: 'category-9' },
      { name: 'category-10' },
      { name: 'category-11' },
      { name: 'category-12' },
      { name: 'category-13' },
      { name: 'category-14' }
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
  margin: -10px -10px 30px;
}
.ui-item {
  display: flex;
  align-items: center;
  padding: 10px;
  flex: 0 0 100%;
  @media (--s) {
    flex: 0 0 50%;
  }
  @media (--m) {
    flex: 0 0 33.33333%;
  }
  @media (--l) {
    flex: 0 0 20%;
  }
  &.m-1-3 {
    @media (--l) {
      flex: 0 0 33.33333%;
    }
  }
  &.m-1-4 {
    @media (--l) {
      flex: 0 0 25%;
    }
  }
  &.m-1-6 {
    @media (--l) {
      flex: 0 0 16.66666%;
    }
  }
  &.m-1-8 {
    @media (--l) {
      flex: 0 0 12.5%;
    }
  }
}
.ui-icons-svg {
  margin-right: 15px;
}
.ui-icons-svg-xs {
  font-size: 5px;
  margin-right: 20px;
}
</style>

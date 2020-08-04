<template>
  <div>
    <div class="ui-title">
      Ui Colors
    </div>
    <div class="ui-items">
      <div v-for="(item, index) in colors" :key="index" class="ui-item m-1-6">
        <div :style="{ backgroundColor: item.name }" class="ui-color-bg"></div>
        <div class="ui-text">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiColors',
  data: () => ({
    colors: [
      { name: '#000000' },
      { name: '#ffffff' },
      { name: '#23262C' },
      { name: '#6F7B82' },
      { name: '#FFD13B' },
      { name: '#857FBC' },
      { name: '#E4002C' },
      { name: '#029640' }
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
  flex: 0 0 16.6666666667%;
}
.ui-color-bg {
  width: 30px;
  height: 30px;
  display: block;
  flex: none;
  margin-right: 15px;
}
</style>

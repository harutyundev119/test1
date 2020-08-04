<template>
  <div>
    <div class="ui-title">
      Ui Buttons
    </div>
    <div class="ui-button-group m-light">
      <div class="ui-items">
        <div class="ui-item">
          <ui-button class="m-white m-border">white border</ui-button>
        </div>
        <div class="ui-item">
          <ui-button class="m-whitewhite m-border" disabled
            >white border disabled</ui-button
          >
        </div>
      </div>
      <div class="ui-items">
        <div class="ui-item">
          <ui-button class="m-dark">dark</ui-button>
        </div>
        <div class="ui-item">
          <ui-button class="m-dark" disabled>dark disabled</ui-button>
        </div>
      </div>
    </div>
    <div class="ui-button-group m-dark">
      <div class="ui-items">
        <div class="ui-item">
          <ui-button class="m-white">white</ui-button>
        </div>
        <div class="ui-item">
          <ui-button class="m-white" disabled>white disabled</ui-button>
        </div>
      </div>
      <div class="ui-items">
        <div class="ui-item">
          <ui-button class="m-dark m-border">dark border</ui-button>
        </div>
        <div class="ui-item">
          <ui-button class="m-dark m-border" disabled
            >dark border disabled</ui-button
          >
        </div>
      </div>
    </div>
    <div class="ui-button-group">
      <div class="ui-items">
        <div class="ui-item">
          <ui-button-square class="m-w48 m-white" icon="close" />
        </div>
        <div class="ui-item">
          <ui-button-square class="m-w48 m-white" icon="search" />
        </div>
      </div>
      <div class="ui-items">
        <div class="ui-item">
          <ui-button-square class="m-w48 m-dark" icon="close" />
        </div>
        <div class="ui-item">
          <ui-button-square class="m-w48 m-dark" icon="search" />
        </div>
      </div>
      <div class="ui-items">
        <div class="ui-item">
          <ui-button-square class="m-w32 m-grey" icon="play" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiButtons'
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
.ui-button-group {
  padding: 15px;
  &.m-light {
    background-color: $white;
  }
  &.m-dark {
    background-color: $dark;
  }
}
</style>

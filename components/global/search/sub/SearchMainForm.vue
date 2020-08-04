<template>
  <div class="searchMainForm">
    <ui-icon icon="search" class="searchMainForm__icon m-w16" />
    <input
      type="text"
      class="searchMainForm__value"
      placeholder="Введите название новости"
    />
    <div class="searchMainForm__reset">
      <ui-button-square class="m-full" icon="close" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchMainForm'
}
</script>

<style lang="postcss">
.searchMainForm {
  flex: 1 1 100%;
  padding: 0 48px 0 40px;
  position: relative;
  overflow: hidden;
  &__value {
    background: transparent;
    border: 1px solid transparent;
    border-radius: 0px;
    height: 46px;
    font-size: 16px;
    line-height: 44px;
    color: $dark;
    padding: 0px;
    transition: 0.4s;
    width: 100%;
    padding-top: 5px;
    &::-webkit-input-placeholder {
      color: #969fa3;
    }
    &::-moz-placeholder {
      color: #969fa3;
    }
    &:-moz-placeholder {
      color: #969fa3;
    }
    &:-ms-input-placeholder {
      color: #969fa3;
    }
  }
  &__reset {
    width: 48px;
    height: 48px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    .svg {
      fill: $dark;
    }
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    .svg {
      fill: #969fa3;
    }
  }
}
</style>

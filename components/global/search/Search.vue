<template>
  <div class="search">
    <div class="search__line">
      <div class="search__input">
        <ui-icon icon="search" class="search__icon m-w16" />
        <input
          type="text"
          class="search__value"
          placeholder="Введите название новости"
        />
        <div class="search__reset">
          <ui-button-square class="m-full" icon="close" />
        </div>
      </div>
      <div class="search__seek">
        <button type="button" class="search__button m-m">Искать</button>
        <ui-button-square class="search__button m-xs m-full" icon="search" />
      </div>
    </div>
    <div class="search__dropdown m-hidden">
      <div class="search__items">
        <a href="#" class="search__item">
          <div class="page-text">
            LADA и Яндекс займутся интеграцией интернет-сервисов в автомобили
          </div>
          <div class="page-text m-grey m-fs12">21 Января 2020</div>
        </a>
        <a href="#" class="search__item">
          <div class="page-text">
            LADA и Яндекс займутся интеграцией интернет-сервисов в автомобили
          </div>
          <div class="page-text m-grey m-fs12">21 Января 2020</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="postcss">
.search {
  position: relative;
  &__line {
    background-color: transparent;
    border: 1px solid $dark;
    height: 48px;
    display: flex;
    width: 100%;
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
  &__input {
    flex: 1 1 100%;
    padding: 0 48px 0 40px;
    position: relative;
    overflow: hidden;
  }
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
  &__seek {
    flex: 0 0 48px;
    height: 100%;
    border-left: 1px solid $dark;
    @media (--m) {
      flex: 0 0 216px;
    }
  }
  &__button {
    color: $dark;
    font-size: 16px;
    .svg {
      fill: $dark;
    }
    &:hover {
      background-color: $dark;
      color: $white;
      .svg {
        fill: $white;
      }
    }
    &.m-xs {
      @media (--m) {
        display: none;
      }
    }
    &.m-m {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (--sm) {
        display: none;
      }
    }
  }
  &__dropdown {
    border: 1px solid $dark;
    border-top: none;
    position: absolute;
    background-color: $white;
    top: 100%;
    left: 0;
    right: 0;
    &.m-hidden {
      display: none;
    }
  }
  &__items {
    padding: 32px 24px;
  }
  &__item {
    display: block;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    .page-text:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  &.m-dark {
    ^&__line {
      border-color: #ffffff;
    }
    ^&__value {
      color: $white;
      &::-webkit-input-placeholder {
        color: #555e65;
      }
      &::-moz-placeholder {
        color: #555e65;
      }
      &:-moz-placeholder {
        color: #555e65;
      }
      &:-ms-input-placeholder {
        color: #555e65;
      }
    }
    ^&__icon {
      .svg {
        fill: #555e65;
      }
    }
    ^&__reset {
      .svg {
        fill: $white;
      }
    }
    ^&__seek {
      border-left: 1px solid $white;
    }
    ^&__button {
      color: $white;
      .svg {
        fill: $white;
      }

      &:hover {
        background-color: $white;
        color: $dark;
        .svg {
          fill: $dark;
        }
      }
    }
    ^&__dropdown {
      border-color: $white;
    }
    ^&__item .page-text:not(.m-grey) {
      color: $white;
    }
  }
}
</style>

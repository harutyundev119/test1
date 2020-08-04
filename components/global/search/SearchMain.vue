<template>
  <div class="searchMain">
    <search-base>
      <search-form>
        <div class="searchMainForm">
          <ui-icon icon="search" class="searchMainForm__icon m-w16" />
          <input
            ref="searchInput"
            :value="value"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
            @keydown.esc.prevent="$emit('keydown', $event)"
            @keydown.enter.prevent="$emit('keydown', $event)"
            type="text"
            class="searchMainForm__value"
          />
          <div class="searchMainForm__reset">
            <ui-button-square
              @click="handleClear"
              class="m-full"
              icon="close"
            />
          </div>
        </div>
      </search-form>
      <search-action>
        <search-main-action
          @update-search="$emit('update-search')"
        ></search-main-action>
      </search-action>
    </search-base>
    <search-drop :class="[!showResults && 'm-hidden']">
      <search-main-drop
        :items="resultList"
        :route-name="routeName"
        :class="[!showResults && 'm-hidden']"
      ></search-main-drop>
    </search-drop>
  </div>
</template>

<script>
import SearchBase from './base/SearchBase.vue'
import SearchForm from './base/SearchForm.vue'
import SearchAction from './base/SearchAction.vue'
import SearchDrop from './base/SearchDrop.vue'
import SearchMainAction from './sub/SearchMainAction.vue'
import SearchMainDrop from './sub/SearchMainDrop.vue'

export default {
  name: 'SearchMain',
  components: {
    SearchBase,
    SearchForm,
    SearchAction,
    SearchDrop,
    SearchMainAction,
    SearchMainDrop
  },
  props: {
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    resultList: {
      type: Array,
      default: () => [],
      required: true
    },
    value: {
      type: String,
      default: '',
      required: true
    },
    showResults: {
      type: Boolean,
      default: false,
      required: true
    },
    routeName: {
      type: String,
      default: 'news-slug',
      required: true
    }
  },
  methods: {
    focus() {
      this.$refs.searchInput.focus()
    },
    handleClear() {
      this.$emit('clear')
      this.focus()
    }
  }
}
</script>

<style lang="postcss">
.searchMain {
  background-color: transparent;
  border: 1px solid $dark;
  height: 48px;
  position: relative;
  width: 100%;
  &.m-dark {
    border-color: #ffffff;
    .searchMainForm {
      &__value {
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
      &__icon {
        .svg {
          fill: #555e65;
        }
      }
      &__reset {
        .svg {
          fill: $white;
        }
      }
    }
    .searchMainAction {
      border-left: 1px solid $white;
      &__button {
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
    }
    .searchMainDrop {
      border-color: $white;
      background-color: $dark;
      transition: max-height 0.6s;
      &__item .page-text:not(.m-grey) {
        color: $white;
      }
    }
  }
  &Form {
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
}
</style>

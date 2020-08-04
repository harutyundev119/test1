<template>
  <div :class="{ 'm-error': errors.length !== 0 }" class="formInput">
    <input
      :placeholder="placeholder"
      v-model="currentValue"
      type="text"
      class="formInput__value"
    />
  </div>
</template>

<script>
export default {
  name: 'UiInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    errors: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="postcss">
.formInput {
  &.m-error {
    ^&__value {
      color: #e4002c;
      &::-webkit-input-placeholder {
        color: #e4002c;
      }
      &::-moz-placeholder {
        color: #e4002c;
      }
      &:-moz-placeholder {
        color: #e4002c;
      }
      &:-ms-input-placeholder {
        color: #e4002c;
      }
    }
  }
  &__value {
    background: transparent;
    border: none;
    border-bottom: 1px solid #555e65;
    border-radius: 0px;
    height: 37px;
    font-size: 16px;
    line-height: 35px;
    color: $white;
    padding: 8px 0px;
    width: 100%;
    transition: 0.4s;
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
    &:disabled {
    }
    &:hover {
    }
  }
}
</style>

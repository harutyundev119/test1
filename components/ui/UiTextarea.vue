<template>
  <div class="formTextarea">
    <textarea
      :placeholder="placeholder"
      v-model="currentValue"
      :rows="rows"
      name="text"
      class="formTextarea__value"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'UiTextarea',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    rows: {
      type: String,
      default: ''
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
.formTextarea {
  &__value {
    background: transparent;
    border: none;
    border-bottom: 1px solid #555e65;
    border-radius: 0px;
    font-size: 16px;
    line-height: 16px;
    color: $white;
    padding: 8px 0px;
    width: 100%;
    transition: 0.4s;
    resize: vertical;
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

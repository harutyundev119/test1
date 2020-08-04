<template>
  <div class="uiDropDown">
    <ui-labeldrop
      :is-active="isActive"
      :is-white="isWhite"
      :is-dark="isDark"
      :is-black="isBlack"
      @click.native="isActive = !isActive"
      :line-text="title"
      >{{ title }}</ui-labeldrop
    >
    <mq-layout v-scroll-lock="isActive" mq="s" class="">
      <transition name="fade">
        <div v-if="isActive && items.length !== 0" class="uiDropDown__drop">
          <ui-drop-filter
            v-if="isFilter"
            :links="items"
            :track="track"
            @select="select"
            @close="isActive = !isActive"
            :placeholder="placeholder"
            is-white
          ></ui-drop-filter>
          <ui-drop
            v-else
            :links="items"
            :track="track"
            @select="select"
          ></ui-drop>
        </div>
      </transition>
    </mq-layout>
    <mq-layout mq="m+" class="">
      <transition name="fade">
        <div v-if="isActive && items.length !== 0" class="uiDropDown__drop">
          <ui-drop-filter
            v-if="isFilter"
            :links="items"
            :track="track"
            @select="select"
            @close="isActive = !isActive"
            is-black
          ></ui-drop-filter>
          <ui-drop
            v-else
            :links="items"
            :track="track"
            @select="select"
          ></ui-drop>
        </div>
      </transition>
    </mq-layout>
  </div>
</template>

<script>
export default {
  name: 'UiDropdown',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    isDark: {
      type: Boolean,
      default: false
    },
    isBlack: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    },
    track: {
      type: String,
      default: null
    },
    isFilter: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isActive: false
  }),
  methods: {
    select(item) {
      this.$emit('select', item)
      this.isActive = false
    }
  }
}
</script>

<style lang="postcss">
.uiDropDown {
  position: relative;
  &__drop {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 280px;
    z-index: 100;
    background-color: $white;
    .uiDrop {
      position: relative;
      top: auto;
      left: auto;
    }
  }
}
</style>

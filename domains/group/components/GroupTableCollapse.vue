<template>
  <div class="groupTableCollapse">
    <div class="container">
      <div class="groupTableCollapse__items">
        <mq-layout mq="l+" class="groupTableCollapse__item m-image">
          <div class="groupTableCollapse__images">
            <div
              v-for="(image, i) in item.images"
              :key="i"
              class="groupTableCollapse__image-item"
            >
              <div class="groupTableCollapse__image">
                <img :src="image.path" :alt="image.alt" />
              </div>
            </div>
          </div>
        </mq-layout>
        <div class="groupTableCollapse__item">
          <group-table-description :item="item"></group-table-description>
        </div>
        <mq-layout mq="m+" class="groupTableCollapse__item m-button">
          <ui-button
            v-scroll-to="'#dealersSection'"
            class="m-dark"
            icon="mappoint"
            >Выбрать магазин</ui-button
          >
        </mq-layout>
        <mq-layout mq="s" class="groupTableCollapse__item">
          <ui-button
            v-scroll-to="'#dealersSection'"
            class="m-white m-block"
            icon="mappoint"
            >Выбрать магазин</ui-button
          >
        </mq-layout>
      </div>
    </div>
  </div>
</template>

<script>
import GroupTableDescription from './GroupTableDescription.vue'
export default {
  name: 'GroupTableCollapse',
  components: {
    GroupTableDescription
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss">
.groupTableCollapse {
  &__items {
    min-height: 240px;
    @media (--s) {
      display: flex;
    }
  }
  &__item {
    @media (--s) {
      flex: none;
      width: 33.333333333333%;
    }
    &.m-image {
      position: relative;
    }
    &:not(.m-image) {
      padding: 8px 0 60px;
    }
    &.m-button {
      display: flex;
      align-items: flex-end;
    }
  }
  &__images {
    overflow-x: auto;
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar {
      height: 3px;
      width: 3px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $dark;
    }
    @media (--s) {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 265px;
    }
  }

  &__image-item {
    flex: none;
    height: 230px;
    position: relative;
  }
  &__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 226px;
    height: 226px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>

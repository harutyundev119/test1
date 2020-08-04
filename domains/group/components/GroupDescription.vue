<template>
  <div class="groupDescription">
    <div class="groupDescription__top">
      <div class="groupDescription__block">
        <div class="groupDescription__subtitle">{{ group.category.title }}</div>
        <mq-layout class="groupDescription__title page-h1" mq="m+">
          {{ group.title }}
        </mq-layout>
        <ui-button
          v-scroll-to="'#dealersSection'"
          class="groupDescription__button m-dark"
          icon="mappoint"
          >Выбрать магазин</ui-button
        >
      </div>
    </div>
    <div
      v-if="group.main_description !== null"
      class="groupDescription__bottom"
    >
      <div v-if="isMore" class="groupDescription__description scrollContainer">
        <div class="groupDescription__main">{{ group.main_description }}</div>
        <div class="groupDescription__additional">
          {{ group.additional_description }}
        </div>
      </div>
      <div @click="onMore" class="groupDescription__more">
        <span v-if="!isMore" class="page-text">Читать подробнее</span>
        <span v-else class="page-text">Скрыть</span>
        <ui-icon v-if="!isMore" icon="plus" class="m-w16"></ui-icon>
        <ui-icon v-else icon="minus" class="m-w16"></ui-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroupDescription',
  props: {
    group: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isMore: false
  }),
  methods: {
    onMore() {
      setTimeout(() => {
        const objDiv = document.querySelector('.groupDescription')
        objDiv.scrollTop = objDiv.scrollHeight
      }, 1)

      this.isMore = !this.isMore
    }
  }
}
</script>

<style lang="postcss">
.groupDescription {
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
    height: 400px;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
  &__top {
    @media (--s) {
      padding: 26px 20px;
      margin-bottom: auto;
    }
    @media (--m) {
      padding: 60px 20px;
    }
    @media (--xsm) {
      margin-bottom: 16px;
    }
  }
  &__block {
    text-align: center;
  }
  &__subtitle {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #6f7b82;
    margin-bottom: 24px;
    @media (--xsm) {
      display: none;
    }
  }
  &__title {
    text-transform: uppercase;
    @media (--s) {
      margin-bottom: 24px;
    }
    @media (--s) and (--sm) {
      font-size: 30px;
    }
    @media (--m) and (--mm) {
      font-size: 40px;
    }
  }
  &__button {
    .button {
      padding-left: 32px;
      padding-right: 32px;
    }
  }
  &__prices {
    margin-top: 16px;
  }
  &__more {
    display: flex;
    height: 56px;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .icon {
      margin-left: 15px;
    }
    .svg-plus {
      font-size: 13px;
    }
    .svg-minus {
      font-size: 2px;
    }
  }
  &__bottom {
    @media (--s) {
      border-top: 1px solid #c6cccf;
    }
  }
  &__description {
    padding: 40px 0px;
    max-height: 400px;
    @media (--s) {
      padding: 40px;
    }
    @media (--m) {
      padding: 64px;
    }
    @media (--l) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 64px 105px 64px 95px;
    }
  }
  &__main {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #23262c;
    margin-bottom: 40px;
    @media (--l) {
      flex: 0 0 356px;
    }
  }
  &__additional {
    font-size: 14px;
    line-height: 17px;
    color: #23262c;
    @media (--l) {
      flex: 1 1 100%;
      margin-left: 69px;
    }
  }
}
</style>

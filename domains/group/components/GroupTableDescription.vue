<template>
  <div class="groupTableDesciption">
    <div class="groupTableDesciption__item">
      <div class="groupTableDesciption__title">Марка</div>
      <div class="groupTableDesciption__text">
        <span v-if="item.matches.for_any_model">Все марки</span>
        <span v-else>марка</span>
      </div>
    </div>
    <div class="groupTableDesciption__item">
      <div class="groupTableDesciption__title">Модель</div>
      <div class="groupTableDesciption__text">
        <span v-if="item.matches.for_any_model">Все модели</span>
        <span v-else>марка</span>
      </div>
    </div>
    <div class="groupTableDesciption__item">
      <div class="groupTableDesciption__title">Поставщик</div>
      <div class="groupTableDesciption__text">
        {{ item.vendor }}
      </div>
    </div>
    <mq-layout mq="s" class="groupTableDesciption__item">
      <div class="groupTableDesciption__title">Артикул</div>
      <div class="groupTableDesciption__text">
        {{ item.code.code_full }}
      </div>
    </mq-layout>
  </div>
</template>

<script>
export default {
  name: 'GroupTableDescription',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss">
.groupTableDesciption {
  &__item:not(:last-child) {
    margin-bottom: 24px;
  }
  &__title {
    font-size: 12px;
    line-height: 14px;
    color: #969fa3;
    margin-bottom: 8px;
    @media (--xsm) {
      color: #969fa3;
    }
  }
  &__text {
    font-size: 16px;
    line-height: 19px;
    color: #555e65;
    @media (--xsm) {
      color: $white;
      font-size: 14px;
    }
  }
}
</style>

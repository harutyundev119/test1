<template>
  <div class="tableSkuDescription">
    <div class="tableSkuDescription__item">
      <div class="tableSkuDescription__title">Марка</div>
      <div class="tableSkuDescription__text">
        <span v-if="item.matches.for_any_model">Все марки</span>
        <span v-else>
          <span v-for="(brand, i) in item.matches.brands" :key="i">
            {{
              item.matches.brands.length !== i + 1
                ? `${brand.title},`
                : brand.title
            }}
          </span>
        </span>
      </div>
    </div>
    <div class="tableSkuDescription__item">
      <div class="tableSkuDescription__title">Модель</div>
      <div class="tableSkuDescription__text">
        <span v-if="item.matches.for_any_model">Все модели</span>
        <span v-else>
          <span v-for="(brand, i) in item.matches.brands" :key="i">
            <span>{{ brand.title }}:</span>
            <span
              v-for="(model, m) in brand.models"
              :key="m"
              class="page-text m-grey"
            >
              {{
                brand.models.length !== m + 1 ? `${model.title},` : model.title
              }}
            </span>
          </span>
        </span>
      </div>
    </div>
    <!--    <div class="tableSkuDescription__item">-->
    <!--      <div class="tableSkuDescription__title">Поставщик</div>-->
    <!--      <div class="tableSkuDescription__text">-->
    <!--        {{ item.vendor }}-->
    <!--      </div>-->
    <!--    </div>-->
    <mq-layout mq="s" class="tableSkuDescription__item">
      <div class="tableSkuDescription__title">Артикул</div>
      <div class="tableSkuDescription__text">
        {{ item.code.code_full }}
      </div>
    </mq-layout>
  </div>
</template>

<script>
export default {
  name: 'TableSkuDescription',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss">
.tableSkuDescription {
  height: 100%;
  padding: 8px 0 50px;
  &__item:not(:last-child) {
    margin-bottom: 24px;
  }
  &__title {
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
    color: #555e65;
  }
  &__text {
    font-size: 12px;
    line-height: 14px;
    @media (--s) {
      font-size: 16px;
      line-height: 19px;
    }
  }
}
</style>

<template>
  <div class="tableSave">
    <div class="tableSave__row">
      <div class="tableSave__col m-caption m-w143 m-category">Категория</div>
      <div class="tableSave__col m-caption m-w143">Артикул</div>
      <div class="tableSave__col m-caption m-w430 m-name">Наименование</div>
      <div class="tableSave__col m-caption">Применение</div>
      <div class="tableSave__col m-caption m-w102 m-price">Цена</div>
    </div>
    <div class="tableSave__row">
      <div class="tableSave__col m-w143 m-category m-hidden">
        <div class="tableSave__label">Категория</div>
        Расходные материалы
      </div>
      <div class="tableSave__col m-w143 m-hidden">
        <div class="tableSave__label">Артикул</div>
        LECAR01001 5308
      </div>
      <div class="tableSave__col m-w430 m-name">
        <div class="tableSave__item">
          <div class="tableSave__image">
            <img src="@/assets/images/sale/sale-item-1.jpg" alt="" />
          </div>
          <span>Комплект передних тормозных колодок</span>
        </div>
      </div>
      <div class="tableSave__col m-hidden">
        <div class="tableSave__label">Категория</div>
        Все переднеприводные автомобили LADA
      </div>
      <div class="tableSave__col m-w102 m-price">1200 р.</div>
    </div>
    <div class="tableSave__row m-active">
      <div class="tableSave__col m-w143 m-category m-hidden">
        <div class="tableSave__label">Категория</div>
        Расходные материалы
      </div>
      <div class="tableSave__col m-w143 m-hidden">
        <div class="tableSave__label">Артикул</div>
        LECAR01001 5308
      </div>
      <div class="tableSave__col m-w430 m-name">
        <div class="tableSave__item">
          <div class="tableSave__image">
            <img src="@/assets/images/sale/sale-item-1.jpg" alt="" />
          </div>
          <span>Комплект передних тормозных колодок</span>
        </div>
      </div>
      <div class="tableSave__col m-hidden">
        <div class="tableSave__label">Категория</div>
        Все переднеприводные автомобили LADA
      </div>
      <div class="tableSave__col m-w102 m-price">1200 р.</div>
    </div>
    <div class="tableSave__row">
      <div class="tableSave__col m-w143 m-category m-hidden">
        <div class="tableSave__label">Категория</div>
        Расходные материалы
      </div>
      <div class="tableSave__col m-w143 m-hidden">
        <div class="tableSave__label">Артикул</div>
        LECAR01001 5308
      </div>
      <div class="tableSave__col m-w430 m-name">
        <div class="tableSave__item">
          <div class="tableSave__image">
            <img src="@/assets/images/sale/sale-item-1.jpg" alt="" />
          </div>
          <span>Комплект передних тормозных колодок</span>
        </div>
      </div>
      <div class="tableSave__col m-hidden">
        <div class="tableSave__label">Категория</div>
        Все переднеприводные автомобили LADA
      </div>
      <div class="tableSave__col m-w102 m-price">1200 р.</div>
    </div>
    <div class="tableSave__row">
      <div class="tableSave__col m-w143 m-category m-hidden">
        <div class="tableSave__label">Категория</div>
        Расходные материалы
      </div>
      <div class="tableSave__col m-w143 m-hidden">
        <div class="tableSave__label">Артикул</div>
        LECAR01001 5308
      </div>
      <div class="tableSave__col m-w430 m-name">
        <div class="tableSave__item">
          <div class="tableSave__image">
            <img src="@/assets/images/sale/sale-item-1.jpg" alt="" />
          </div>
          <span>Комплект передних тормозных колодок</span>
        </div>
      </div>
      <div class="tableSave__col m-hidden">
        <div class="tableSave__label">Категория</div>
        Все переднеприводные автомобили LADA
      </div>
      <div class="tableSave__col m-w102 m-price">1200 р.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableSave'
}
</script>

<style lang="postcss">
.tableSave {
  margin-left: -20px;
  margin-right: -20px;
  @media (--s) {
    margin-left: -32px;
    margin-right: -32px;
  }
  &__row {
    display: flex;
    width: 100%;
    padding: 0px 20px 0px;

    @media (--sm) {
      flex-wrap: wrap;
      &.m-active {
        background-color: #2c2f36;
        padding: 14px 20px 15px;
        ^^&__col.m-price,
        ^^&__col.m-name {
          color: $white;
        }
        ^^&__col.m-hidden {
          display: block;
        }
      }
    }
    @media (--m) {
      border-bottom: 1px solid #2e3438;
      margin-left: 0px;
      margin: 0px;
    }
  }
  &__col {
    flex: 1 1 100%;
    &.m-caption {
      font-family: $f-2;
      font-size: 11px;
      line-height: 14px;
      color: #969fa3;
      padding: 8px 10px 8px 0;
      @media (--sm) {
        border-bottom: 1px solid #2e3438;
      }
      @media (--m) {
        padding: 10px 40px 15px 0;
      }
    }
    &:not(.m-caption) {
      font-size: 12px;
      line-height: 14px;
      color: #969fa3;
      padding: 8px 10px 8px 0;
      @media (--m) {
        font-size: 16px;
        line-height: 19px;
        padding: 25px 40px 25px 0;
      }
    }
    &.m-w143 {
      @media (--m) {
        flex: 0 0 11.4%;
      }
    }
    &.m-w430 {
      @media (--m) {
        flex: 0 0 34.4%;
      }
    }
    &.m-w102 {
      @media (--m) {
        flex: 0 0 8%;
        margin-left: auto;
      }
    }
    @media (--sm) {
      &.m-caption {
        display: none;
      }
      &.m-name {
        order: -1;
        display: block;
        flex: 0 0 60%;
      }
      &.m-price {
        order: -1;
        display: block;
        flex: 0 0 40%;
      }
      &.m-category {
        order: 1;
      }
      &.m-hidden {
        display: none;
      }
    }
  }
  &__item {
    display: flex;
  }
  &__image {
    flex: none;
    width: 32px;
    height: 32px;
    overflow: none;
    margin-right: 16px;
    position: relative;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      max-width: 100%;
      max-height: 100%;
    }
    @media (--sm) {
      display: none;
    }
  }
  &__label {
    margin-bottom: 8px;
    color: $white;
    @media (--m) {
      display: none;
    }
  }
}
</style>

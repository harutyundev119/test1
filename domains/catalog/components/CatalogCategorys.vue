<template>
  <div class="catalogCategorys">
    <div v-for="(item, i) in items" :key="i" class="catalogCategorys__item">
      <div class="catalogCategorys__icon">
        <ui-icon :icon="item.icon" class="m-w24" />
      </div>

      <span class="catalogCategorys__name page-text m-white">
        {{ item.name }}
      </span>
      <sup class="catalogCategorys__num"
        >(<span class="m-active">{{ item.num }}</span
        >/{{ item.nums }})</sup
      >
      <div class="catalogCategorys__drop">
        <ul class="catalogCategorys__items scrollContainer m-white">
          <li
            v-for="(link, ind) in links[item.id]"
            :key="ind"
            class="catalogCategorys__item"
          >
            <a href="#" class="catalogCategorys__link">{{ link }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogCategorys',
  data: () => ({
    items: [
      {
        id: '1',
        name: 'Расходные материалы',
        icon: 'category-1',
        num: '4',
        nums: '6'
      },
      {
        id: '2',
        name: 'Механические запчасти',
        icon: 'category-2',
        num: '12',
        nums: '22'
      },
      {
        id: '3',
        name: 'Уход за автомобилем',
        icon: 'category-3',
        num: '10',
        nums: '20'
      },
      {
        id: '4',
        name: 'Электрооборудование',
        icon: 'category-4',
        num: '5',
        nums: '20'
      },
      {
        id: '5',
        name: 'Смазки и жидкости',
        icon: 'category-5',
        num: '3',
        nums: '6'
      },
      {
        id: '6',
        name: 'Инструменты',
        icon: 'category-6',
        num: '4',
        nums: '20'
      },
      { id: '7', name: 'Автостиль', icon: 'category-7', num: '4', nums: '6' },
      {
        id: '8',
        name: 'Активный отдых',
        icon: 'category-8',
        num: '1',
        nums: '6'
      },
      { id: '9', name: 'Автохимия', icon: 'category-9', num: '5', nums: '16' },
      {
        id: '10',
        name: 'Безопасность',
        icon: 'category-10',
        num: '0',
        nums: '16'
      },
      {
        id: '11',
        name: 'Помощь в дороге',
        icon: 'category-11',
        num: '15',
        nums: '16'
      },
      { id: '12', name: 'Комфорт', icon: 'category-12', num: '6', nums: '6' },
      {
        id: '13',
        name: 'Кузовные запчасти',
        icon: 'category-13',
        num: '2',
        nums: '6'
      },
      { id: '14', name: 'Автозвук', icon: 'category-14', num: '13', nums: '14' }
    ],
    links: {
      1: [
        '1Рабочие тормозные цилиндры',
        '1Крестовины карданного вала',
        '1Подушки и опоры двигателя',
        '1Рычаги передней подвески',
        '1Наконечники рулевых тяг',
        '1Диски переднего тормоза',
        '1Провода высоковольтные',
        '1Опоры передней стойки'
      ],
      2: [
        '2Рабочие тормозные цилиндры',
        '2Крестовины карданного вала',
        '2Подушки и опоры двигателя',
        '2Рычаги передней подвески',
        '2Наконечники рулевых тяг',
        '2Диски переднего тормоза',
        '2Провода высоковольтные',
        '2Опоры передней стойки'
      ]
    }
  })
}
</script>

<style lang="postcss">
.catalogCategorys {
  @media (--m) {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 7px 0 1px;
    margin-bottom: 9px;
    position: relative;
    &.m-disabled {
      opacity: 0.4;
    }
    @media (--m) {
      flex: 0 0 50%;
    }
    @media (--l) {
      flex: 0 0 33.33333%;
    }
  }
  &__icon {
    margin-right: 8px;
    .svg {
      fill: #555e65;
    }
  }
  &__name {
    cursor: pointer;
  }
  &__num {
    font-size: 12px;
    line-height: 14px;
    color: #555e65;
    margin-left: 5px;
    .m-active {
      color: $white;
    }
  }
  &__drop {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: $dark;
    z-index: 2;
    display: none;
  }
  &__items {
    height: 100%;
    max-height: 200px;
    padding: 10px 32px;
    border: 1px solid #555e65;
  }
  &__item {
    padding: 4px 0;
  }
  &__link {
    font-size: 14px;
    line-height: 17px;
    color: #f0f2f2;
  }
}
</style>

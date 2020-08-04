import { CategoryInterface } from '~/store/types/Catalog/CatalogTypes'
import pluralForms from '~/helpers/pluralForms'
import { moneyToStr } from '~/helpers/moneyToStr'

export const CategoriesParse = (
  categories: CategoryInterface[]
): CategoryInterface[] => {
  return categories.map((category) => {
    category.groups = category.groups.map((group) => {
      const plural = pluralForms(group.meta.amount, [
        'товар',
        'товара',
        'товаров'
      ])
      const formattedPrice = moneyToStr(group.meta.min_price)
      group.formattedMeta = `${group.meta.amount} ${plural} от ${formattedPrice}р`
      return group
    })
    return category
  })
}

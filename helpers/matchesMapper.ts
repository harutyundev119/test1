import { MatchingBrand, Sku } from '~/store/types/Catalog/CatalogTypes'

export interface AllBrands {
  [key: number]: MatchingBrand
}

export const MatchesMapper = (skus: Sku[]): Sku[] => {
  return skus.map(
    (sku): Sku => {
      const mappedSku: AllBrands = {}
      sku.matches.models.forEach((models) => {
        if (!mappedSku.hasOwnProperty(models.brand_id)) {
          mappedSku[models.brand_id] = {
            ...models.brand,
            models: [
              {
                id: models.id,
                title: models.title
              }
            ]
          }
        } else {
          mappedSku[models.brand_id].models.push({
            id: models.id,
            title: models.title
          })
        }
      })
      sku.matches.brands = []
      Object.keys(mappedSku).forEach((id) => {
        if (!mappedSku[Number(id)]) return
        if (!sku.matches.brands) return
        sku.matches.brands.push(mappedSku[Number(id)])
      })
      return sku
    }
  )
}

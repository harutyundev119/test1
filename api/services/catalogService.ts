import { AxiosRequestConfig } from 'axios'
import { ServiceBase } from '@/api/core'
import { IResponseErrorHandler, IResponseSuccessHandler } from '@/api/types'
import { GroupsParams } from '~/store/types/Catalog/GroupsTypes'

const ApiGet: AxiosRequestConfig = {
  method: 'GET'
}

export class CatalogService extends ServiceBase {
  public static getCategories(
    brand_id: number | string | null,
    model_id: number | string | null,
    light: boolean,
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    const config = JSON.parse(JSON.stringify(ApiGet))
    config.params = {
      light: light ? 1 : 0
    }
    const params: GroupsParams = {}
    params.light = light ? 1 : 0
    if (brand_id) {
      params.brand_id = brand_id
      if (model_id) params.model_id = model_id
      config.params = params
    }
    if (model_id === null) delete config.model_id
    return ServiceBase.callApi(config, '/categories', onSuccess, onError)
  }

  public static getCategory(
    slug: string,
    brand_id: number | string | null,
    model_id: number | string | null,
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    const config = JSON.parse(JSON.stringify(ApiGet))
    const params: GroupsParams = {}
    if (brand_id) {
      params.brand_id = brand_id
      if (model_id) params.model_id = model_id
      config.params = params
    }
    return ServiceBase.callApi(config, `/categories/slug/${slug}`, onSuccess, onError)
  }

  public static getBrands(
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    return ServiceBase.callApi(
      ApiGet,
      '/brands',
      onSuccess,
      onError
    )
  }

  public static getGroup(
    cat_slug: string,
    slug: string,
    brandID: number | string | null,
    modelID: number | string | null,
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    const config = JSON.parse(JSON.stringify(ApiGet))
    const params: GroupsParams = {}
    if (brandID) {
      params.brand_id = brandID
      if (modelID) params.model_id = modelID
      config.params = params
    }
    return ServiceBase.callApi(
      config,
      `/groups/slug/${cat_slug}/${slug}`,
      onSuccess,
      onError
    )
  }

}

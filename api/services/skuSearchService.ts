import { AxiosRequestConfig } from 'axios'
import { ServiceBase } from '@/api/core'
import { IResponseErrorHandler, IResponseSuccessHandler } from '@/api/types'

const ApiGet: AxiosRequestConfig = {
  method: 'GET'
}

export class SkuSearchService extends ServiceBase {
  public static getSkuSearch(
    query: string,
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    const config = JSON.parse(JSON.stringify(ApiGet))
    config.params = {
      q: query
    }
    return ServiceBase.callApi(config, '/sku/search', onSuccess, onError)
  }
}

import { AxiosRequestConfig } from 'axios'
import { ServiceBase } from '@/api/core'
import { IResponseErrorHandler, IResponseSuccessHandler } from '@/api/types'

const aboutAppApiGet: AxiosRequestConfig = {
  method: 'GET'
}

export class SalesService extends ServiceBase {
  public static getSales(
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    return ServiceBase.callApi(aboutAppApiGet, '/specials/', onSuccess, onError)
  }

  public static getSaleBySlug(
    slug: string,
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    return ServiceBase.callApi(
      aboutAppApiGet,
      `/specials/slug/${slug}`,
      onSuccess,
      onError
    )
  }
}

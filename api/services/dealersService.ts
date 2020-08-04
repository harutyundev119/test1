import { AxiosRequestConfig } from 'axios'
import { ServiceBase } from '@/api/core'
import { IResponseErrorHandler, IResponseSuccessHandler } from '@/api/types'

const aboutAppApiGet: AxiosRequestConfig = {
  method: 'GET'
}

export class DealersService extends ServiceBase {
  public static getDealers(
    type: string,
    q: string,
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    const config = { ...aboutAppApiGet }
    config.params = {
      type,
      q
    }
    return ServiceBase.callApi(config, '/companies/', onSuccess, onError)
  }
}

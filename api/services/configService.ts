import { AxiosRequestConfig } from 'axios'
import { ServiceBase } from '@/api/core'
import { IResponseErrorHandler, IResponseSuccessHandler } from '@/api/types'

const aboutAppApiGet: AxiosRequestConfig = {
  method: 'GET'
}

export class ConfigService extends ServiceBase {
  public static getConfig(
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    return ServiceBase.callApi(aboutAppApiGet, '/config', onSuccess, onError)
  }
}

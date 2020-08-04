import { AxiosRequestConfig } from 'axios'
import { ServiceBase } from '@/api/core'
import { IResponseErrorHandler, IResponseSuccessHandler } from '@/api/types'

const ApiGet: AxiosRequestConfig = {
  method: 'GET'
}

export class VideosService extends ServiceBase {
  public static getVideos(
    offset: number,
    limit: number,
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    const config = {...ApiGet}
    config.params = {
      offset,
      limit
    }
    return ServiceBase.callApi(config, '/videos', onSuccess, onError)
  }
}

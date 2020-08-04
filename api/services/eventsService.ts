import { IResponseErrorHandler, IResponseSuccessHandler } from '@/api/types'
import { AxiosRequestConfig } from 'axios'
import { ServiceBase } from '~/api/core'

const aboutAppApiGet: AxiosRequestConfig = {
  method: 'GET'
}

export class EventsService extends ServiceBase {
  public static getEvents(
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    return ServiceBase.callApi(aboutAppApiGet, '/events', onSuccess, onError)
  }
  public static getEventBySlug(
    slug: string,
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    return ServiceBase.callApi(aboutAppApiGet, `/events/slug/${slug}`, onSuccess, onError)
  }
}

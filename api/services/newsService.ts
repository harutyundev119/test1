import { IResponseErrorHandler, IResponseSuccessHandler } from '@/api/types'
import { AxiosRequestConfig } from 'axios'
import { ServiceBase } from '~/api/core'

const aboutAppApiGet: AxiosRequestConfig = {
  method: 'GET'
}

export class NewsService extends ServiceBase {
  public static getNews(
    q: string | null,
    dateFrom: string | null,
    dateTo: string | null,
    offset: number | null,
    limit: number | null,
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    const config = { ...aboutAppApiGet }
    const params = {
      q,
      date_from: dateFrom,
      date_to: dateTo,
      offset,
      limit
    }
    if (!q) params.q = ''
    if (!dateFrom) delete params.date_from
    if (!dateTo) delete params.date_to
    if (!offset) delete params.offset
    if (!limit) delete params.limit
    config.params = params
    return ServiceBase.callApi(config, '/news', onSuccess, onError)
  }
  public static getNewsBySlug(
    slug: string,
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    return ServiceBase.callApi(aboutAppApiGet, `/news/slug/${slug}`, onSuccess, onError)
  }
}

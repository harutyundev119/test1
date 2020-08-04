import { AxiosRequestConfig } from 'axios'
import { ServiceBase } from '@/api/core'
import { IResponseErrorHandler, IResponseSuccessHandler } from '@/api/types'
import { FeedbackState } from '~/store/types/Contacts/FeedbackTypes'
import { ErrorResponse } from '~/store/types/Contacts/ContactsTypes'

const ApiGet: AxiosRequestConfig = {
  method: 'GET'
}

export class PosService extends ServiceBase {
  public static getPOS(
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
    return ServiceBase.callApi(config, '/pos', onSuccess, onError)
  }
}

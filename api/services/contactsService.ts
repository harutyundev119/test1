import { AxiosRequestConfig } from 'axios'
import { ServiceBase } from '@/api/core'
import { IResponseErrorHandler, IResponseSuccessHandler } from '@/api/types'
import { FeedbackState } from '~/store/types/Contacts/FeedbackTypes'
import { ErrorResponse } from '~/store/types/Contacts/ContactsTypes'

const ApiGet: AxiosRequestConfig = {
  method: 'GET'
}

const ApiPost: AxiosRequestConfig = {
  method: 'POST'
}

export class ContactsService extends ServiceBase {
  public static getContacts(
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    return ServiceBase.callApi(ApiGet, '/contacts', onSuccess, onError)
  }

  public static getFeedbackTopics(
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    return ServiceBase.callApi(ApiGet, '/feedback/topics', onSuccess, onError)
  }

  public static setFeedback(
    feedback: FeedbackState,
    onSuccess: IResponseSuccessHandler,
    onError?: (response: ErrorResponse) => ErrorResponse
  ): Promise<void> {
    const config = JSON.parse(JSON.stringify(ApiPost))
    config.data = feedback
    return ServiceBase.callApi(
      config,
      '/feedback',
      onSuccess
    )
  }
}

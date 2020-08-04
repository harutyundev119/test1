import axios, { AxiosRequestConfig } from 'axios'
import { Handlers } from '@/helpers/handlers'
import { IResponseErrorHandler, IResponseSuccessHandler } from '@/api/types'

const Url: string =
  process.env.apiUrl || 'https://dev-lada-lecar-api.kodix.kodix.dev'

export class ServiceBase {
  protected static async callApi(
    config: AxiosRequestConfig,
    url: string,
    onSuccess: IResponseSuccessHandler,
    onError?: IResponseErrorHandler
  ): Promise<void> {
    config.url = url
    config.baseURL = `${Url}/api`
    try {
      const response = await axios.request(config)
      if (onSuccess) {
        onSuccess(response.data)
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        onError
          ? onError(error)
          : Handlers.defaultErrorAPIHandler(
              error.response.data.error != null
                ? error.response.data.error
                : error.response.data,
              error.response.status
            )
        throw new Error(error.response.data.error)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        Handlers.defaultErrorHandler(
          'Произошла ошибка при отправлении запроса, либо сервер не ответил вовремя'
        )
        throw new Error(error)
      } else {
        // handlers.defaultErrorHandler(error.message);
        // Something happened in setting up the request that triggered an Error
      }
      throw new Error(error.config) // TODO Зачем здесь толкать еще ошибку? получаеся 2 ошибки из одной
    }
  }
}

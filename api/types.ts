export interface IResponseSuccessHandler {
  (data: any): void
}

export interface IResponseErrorHandler {
  (message: string): void
}

export interface FeedbackState {
  topic: string | null
  vehicle: string | null
  vin: string | null
  name: string | null
  city: string | null
  email: string | null
  message: string | null
  topics?: string[] | null
  requestStatus?: boolean | null
}

export interface TopicsResponse {
  data: string[]
}

export interface Contact {
  id: number | string | null,
  name: string | null,
  description: string | null,
  email: string | null,
  phone:  string | null,
}

export interface ContactsResponse {
  data: Contact[]
}

export interface ContactsState {
  contacts: Contact[]
}

export interface SuccessResponse {
  success: boolean,
}

export interface ErrorResponse {
  message: string
  errors: Errors
}

export interface Errors {
  description: string
}

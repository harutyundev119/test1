import { Sale } from '~/store/types/SalesTypes'

export interface Coordinates {
  lon: string
  lat: string
}

export interface DetailedType {
  title: string
  value: string
}

export interface Phone {
  number: string
  type: string
}

export interface RequestType {
  q: string
  type: number
}

export interface Dealer {
  id: number
  type: string
  name: string
  address: string
  url: string
  coordinates: Coordinates
  phone: Phone
  'working-time': string
}

export interface DealersState {
  dealers: Dealer[]
  query: string
  type: number
  types: [DetailedType, DetailedType]
}

export interface DealersResponse {
  data: Dealer[]
}

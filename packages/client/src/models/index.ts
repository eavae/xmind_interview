import { BillType } from '../enums'

export type Paged<T> = {
  nodes: T[]
  totalCount: number
  hasNextPage: boolean
}

export interface Bill {
  id: number
  type: BillType
  time: Date
  categoryId?: string
  category?: Category
  amount: number
}

export interface Category {
  id: string
  name: string
  type: BillType
}

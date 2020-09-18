import { Injectable } from '@nestjs/common'
import csvdb from 'csv-database'
import { filter, last, slice } from 'ramda'

import { CSVDBType } from '../../global.type'

import { Bill } from './bill.entity'

export function configureBillService(filepath: string) {
  return {
    provide: BillService,
    useFactory: async () => {
      const db = await csvdb(
        filepath,
        ['id', 'time', 'categoryId', 'amount'],
        ',',
      )
      return new BillService(db)
    },
  }
}

@Injectable()
export class BillService {
  index = 0
  db: CSVDBType

  constructor(db: CSVDBType) {
    this.db = db
  }

  convertTypes(items: Record<string, unknown>[]): Bill[] {
    return items.map(
      ({ amount, time, id, type, categoryId }) =>
        ({
          id: +id,
          type: +type,
          categoryId,
          amount: +amount,
          time: new Date(+time),
        } as Bill),
    )
  }

  async getBillsByDate(year: number, month: number, categoryId?: string) {
    const bills = this.convertTypes((await this.db.get()) as any)

    return filter((bill) => {
      if (categoryId && categoryId !== bill.categoryId) {
        return false
      }

      if (
        bill.time.getFullYear() !== year ||
        bill.time.getMonth() + 1 !== month
      ) {
        return false
      }

      return true
    }, bills)
  }

  async getAll(offset: number, limit: number, categoryId?: string) {
    let bills = this.convertTypes((await this.db.get()) as any)

    if (categoryId) {
      bills = filter((bill) => bill.categoryId === categoryId, bills)
    }
    const totalCount = bills.length

    const currentPageItems = slice(offset, offset + limit, bills)
    return {
      nodes: currentPageItems,
      totalCount,
      hasNextPage:
        currentPageItems.length !== 0 &&
        last(bills).id !== last(currentPageItems).id,
    }
  }
}

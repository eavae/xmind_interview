import { Injectable } from '@nestjs/common'
import { Bill } from 'src/modules/bills/bill.entity'

@Injectable()
export class BillService {
  private readonly bills: Bill[] = [
    {
      id: 0,
      type: 0,
      time: new Date(1561910400000),
      categoryId: '8s0p77c323',
      category: null,
      amount: 5400,
    },
  ]

  create(bill: Bill) {
    this.bills.push(bill)
  }

  findAll(): Bill[] {
    return this.bills
  }
}

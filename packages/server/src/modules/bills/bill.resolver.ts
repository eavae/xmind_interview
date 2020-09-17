import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { Bill } from '../../modules/bills/bill.entity'
import { BillService } from '../../modules/bills/bill.service'
import { BillType, Category } from '../categories/category.entity'

@Resolver(() => Bill)
export class BillResolver {
  constructor(private billsService: BillService) {}

  @Query(() => [Bill])
  async getBills() {
    return this.billsService.findAll()
  }

  @ResolveField('category', () => Category)
  async getPosts(@Parent() bill: Bill) {
    const { categoryId } = bill
    return {
      id: categoryId,
      type: BillType.INCOME,
      name: '工资',
    }
  }
}

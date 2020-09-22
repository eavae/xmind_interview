import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'

import {
  Bill,
  BillDateQuery,
  BillSearchQuery,
  PagedBill,
} from '../../modules/bills/bill.entity'
import { BillService } from '../../modules/bills/bill.service'
import { BillType, Category } from '../categories/category.entity'

@Resolver(() => Bill)
export class BillResolver {
  constructor(private billsService: BillService) {}

  @Query(() => [Bill])
  async getBillsByDate(
    @Args({ type: () => BillDateQuery }) args: BillDateQuery,
  ) {
    return this.billsService.getBillsByDate(
      args.year,
      args.month,
      args.categoryId,
    )
  }

  @Query(() => PagedBill)
  async getBills(
    @Args({ type: () => BillSearchQuery }) args: BillSearchQuery,
  ): Promise<PagedBill> {
    return this.billsService.getAll(args.offset, args.limit, args.categoryId)
  }

  @ResolveField('category', () => Category)
  async category(@Parent() bill: Bill) {
    const { categoryId } = bill
    return {
      id: categoryId,
      type: BillType.INCOME,
      name: '工资',
    }
  }

  @Query(() => Int)
  async totalIncome() {
    return this.billsService.getTotalIncome()
  }

  @Query(() => Int)
  async totalOutcome() {
    return this.billsService.getTotalOutcome()
  }
}

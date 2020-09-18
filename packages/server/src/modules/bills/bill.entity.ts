import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql'
import { MaxLength, MinLength } from 'class-validator'

import { Paginated, PaginationArgs } from '../../models'
import { Category } from '../categories/category.entity'

@ObjectType()
export class Bill {
  @Field(() => Int)
  id: number

  @Field(() => Date)
  time: Date

  @Field()
  categoryId: string

  @Field(() => Category)
  category?: Category

  @Field(() => Int)
  amount: number
}

@ObjectType()
export class PagedBill extends Paginated(Bill) {}

@ArgsType()
export class BillDateQuery {
  @MinLength(1900)
  @MaxLength(9999)
  @Field(() => Int)
  year: number

  @MinLength(1)
  @MaxLength(12)
  @Field(() => Int)
  month: number

  @Field({ nullable: true })
  categoryId?: string
}

@ArgsType()
export class BillSearchQuery extends PaginationArgs {
  @Field({ nullable: true })
  categoryId?: string
}

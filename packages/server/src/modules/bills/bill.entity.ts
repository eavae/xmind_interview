import { Field, Int, ObjectType } from '@nestjs/graphql'
import { BillType, Category } from '../categories/category.entity'

@ObjectType()
export class Bill {
  @Field(() => Int)
  id: number

  @Field(() => BillType)
  type: BillType

  @Field(() => Date)
  time: Date

  @Field()
  categoryId: string

  @Field(() => Category)
  category: Category

  @Field(() => Int)
  amount: number
}

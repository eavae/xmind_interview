import { Module } from '@nestjs/common'

import { BillService } from './bill.service'
import { BillResolver } from './bill.resolver'
import { DateScalar } from '../../scalars/DateScalar'

@Module({
  providers: [BillService, BillResolver, DateScalar],
  exports: [BillService],
})
export class BillModule {}

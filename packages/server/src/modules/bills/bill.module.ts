import { Module } from '@nestjs/common'

import { BILL_CSV_FILE_PATH } from '../../constants'
import { DateScalar } from '../../scalars/DateScalar'

import { configureBillService } from './bill.service'
import { BillResolver } from './bill.resolver'

@Module({
  providers: [
    configureBillService(BILL_CSV_FILE_PATH),
    BillResolver,
    DateScalar,
  ],
  exports: [],
})
export class BillModule {}

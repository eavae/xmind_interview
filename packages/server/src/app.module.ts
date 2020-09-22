import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BillModule } from './modules/bills/bill.module'
import { CategoryModule } from './modules/categories/category.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: process.env.NODE_ENV === 'development',
      playground: process.env.NODE_ENV === 'development',
      autoSchemaFile: join(__dirname, 'schema.gql'),
      sortSchema: true,
    }),
    BillModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import request from 'supertest'
import { INestApplication } from '@nestjs/common'
import { createGraphQLModule } from './utils'

import { BillModule } from '../src/modules/bills/bill.module'

const GET_BILLS_QUERY = `
query {
  getBills(offset: 1, limit: 1, categoryId: "0fnhbcle6hg") {
    hasNextPage
    totalCount
    nodes {
      id
    }
  }
}
`

const GET_BILLS_BY_DATE_QUERY = `
query {
  getBillsByDate(year: 2019, month: 11) {
    id
  }
}
`

describe('Bill Module (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture = await createGraphQLModule(BillModule)

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('GET_BILL_QUERY', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: GET_BILLS_QUERY,
        variables: {},
      })
      .expect(200)
      .expect(
        '{"data":{"getBills":{"hasNextPage":true,"totalCount":6,"nodes":[{"id":5}]}}}\n',
      )
  })

  it('GET_BILLS_BY_DATE_QUERY', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: GET_BILLS_BY_DATE_QUERY,
        variables: {},
      })
      .expect(200)
      .expect(
        '{"data":{"getBillsByDate":[{"id":17},{"id":18},{"id":19},{"id":20},{"id":21}]}}\n',
      )
  })
})

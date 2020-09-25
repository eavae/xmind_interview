import gql from 'graphql-tag'

export const CATEGORIES_FRAGMENT = gql`
  fragment AllCategoryFields on Category {
    id
    type
    name
  }
`

export const TOTAL_INCOME_AND_OUTCOME_FRAGMENT = gql`
  fragment TotalIncomeAndOutCome on Query {
    totalIncome
    totalOutcome
  }
`

export const QUERY_ALL_BILLS = gql`
  query getBills(
    $categoryId: String
    $year: Int
    $month: Int
    $limit: Int = 20
    $offset: Int = 0
  ) {
    getBills(
      categoryId: $categoryId
      year: $year
      month: $month
      limit: $limit
      offset: $offset
    ) {
      totalCount
      hasNextPage
      nodes {
        id
        type
        amount
        time
        category {
          name
        }
      }
    }
    categories {
      ...AllCategoryFields
    }
    ...TotalIncomeAndOutCome
    avaliableDates
  }
  ${CATEGORIES_FRAGMENT}
  ${TOTAL_INCOME_AND_OUTCOME_FRAGMENT}
`

export const CREATE_BILL = gql`
  mutation createBill($type: BillType!, $amount: Int!) {
    createBill(type: $type, amount: $amount) {
      id
      type
      amount
      time
      category {
        name
      }
    }
  }
`

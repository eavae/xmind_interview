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
  query getBills($categoryId: String, $limit: Int = 20, $offset: Int = 0) {
    getBills(categoryId: $categoryId, limit: $limit, offset: $offset) {
      totalCount
      hasNextPage
      nodes {
        id
        category {
          name
        }
        type
        amount
        time
      }
    }
    categories {
      ...AllCategoryFields
    }
    ...TotalIncomeAndOutCome
  }
  ${CATEGORIES_FRAGMENT}
  ${TOTAL_INCOME_AND_OUTCOME_FRAGMENT}
`

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
  query {
    getBills {
      totalCount
      nodes {
        id
      }
    }
  }
`

export const QUERY_ALL = gql`
  query {
    categories {
      ...AllCategoryFields
    }
    ...TotalIncomeAndOutCome
  }
  ${CATEGORIES_FRAGMENT}
  ${TOTAL_INCOME_AND_OUTCOME_FRAGMENT}
`

import gql from 'graphql-tag'

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

export const QUERY_TOTAL_INCOME_AND_OUTCOME = gql`
  query {
    totalIncome
    totalOutcome
  }
`

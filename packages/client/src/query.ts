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

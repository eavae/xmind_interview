<template>
  <header><h1>balance</h1></header>
  <section class="app">
    <BillInput />
    <BillNav
      v-if="data"
      :categories="data.categories"
      :total-income="data.totalIncome"
      :total-outcome="data.totalOutcome"
    />
    <Bills
      v-if="data && data.getBills.nodes.length > 0"
      :bills="data.getBills.nodes"
      :total-count="data.getBills.totalCount"
      :has-more="data.getBills.hasNextPage"
      @load-more="loadMore"
    />
  </section>
  <footer class="info">
    <p>Created by 李宇</p>
    <p>Design from TodoMVC</p>
  </footer>
</template>

<script lang="ts">
import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { DefaultApolloClient, useQuery } from '@vue/apollo-composable'
import { provide } from 'vue'

import { QUERY_ALL_BILLS } from './query'
import BillInput from './components/BillInput.vue'
import BillNav from './components/BillNav.vue'
import Bills from './components/Bills.vue'
import { Bill, Category, Paged } from './models'

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
  }),
})

interface QueryAllBillsResponse {
  getBills: Paged<Bill>
  categories: Category[]
  totalIncome: number
  totalOutcome: number
}

interface QueryAllBillsVariable {
  categoryId?: string
  limit?: number
  offset?: number
}

export default {
  name: 'App',
  components: {
    BillInput,
    BillNav,
    Bills,
  },
  setup() {
    provide(DefaultApolloClient, client)

    const { result, fetchMore } = useQuery<
      QueryAllBillsResponse,
      QueryAllBillsVariable
    >(
      QUERY_ALL_BILLS,
      () => ({
        offset: 0,
        limit: 20,
      }),
      {},
    )

    function loadMore() {
      fetchMore({
        variables: {
          offset: result.value.getBills.nodes.length,
        },
        updateQuery(previous, { fetchMoreResult }) {
          if (!fetchMoreResult || !previous.getBills.hasNextPage) {
            return previous
          }

          return {
            ...fetchMoreResult,
            getBills: {
              ...fetchMoreResult.getBills,
              nodes: [
                ...previous.getBills.nodes,
                ...fetchMoreResult.getBills.nodes,
              ],
            },
          }
        },
      })
    }

    return {
      data: result,
      loadMore,
    }
  },
}
</script>
<style lang="postcss">
@import 'normalize.css';

body {
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  font-smoothing: antialiased;
  font-weight: 300;
}

header > h1 {
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  text-rendering: optimizeLegibility;
}

section.app {
  background: #fff;
  margin: 70px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

footer.info {
  margin: 65px auto 0;
  color: #bfbfbf;
  font-size: 10px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  text-align: center;
}

input,
select {
  font-weight: 300;
}

input:focus,
select:focus {
  outline: none;
}

select {
  border: none;
}
</style>

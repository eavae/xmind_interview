<template>
  <header><h1>balance</h1></header>
  <section class="app">
    <BillInput />
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

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
  }),
})

export default {
  name: 'App',
  components: {
    BillInput,
  },
  setup() {
    provide(DefaultApolloClient, client)

    const { result } = useQuery(QUERY_ALL_BILLS)
    console.log(result)
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
  margin: 130px 0 40px 0;
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

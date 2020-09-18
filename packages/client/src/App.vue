<template>
  <header><h1>balence</h1></header>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { DefaultApolloClient, useQuery } from '@vue/apollo-composable'
import { provide } from 'vue'

import { QUERY_ALL_BILLS } from './query'

import HelloWorld from './components/HelloWorld.vue'

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
    HelloWorld,
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
}

header > h1 {
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}
</style>

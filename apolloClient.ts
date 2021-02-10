import { ApolloClient, InMemoryCache } from '@apollo/client'
import { onError } from "@apollo/client/link/error";
import { ApolloLink } from '@apollo/client/link/core'
import { HttpLink } from '@apollo/client/link/http'
import fetch from 'isomorphic-fetch'


 const client = new ApolloClient({
   link: ApolloLink.from([
     onError(({graphQLErrors, networkError}) => {
       if(graphQLErrors)
       graphQLErrors.map(({message, locations, path}) =>
       console.log(
         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
         ),
       )
       if(networkError) console.log(`[Network error]: ${networkError}`)
     }),
     new HttpLink({
      uri: 'http://localhost:4000/graphql/',
      credentials: 'same-origin',
      fetch: fetch,
     })
   ]),
   cache: new InMemoryCache()
})

client.defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
  },
  query: {
    fetchPolicy: 'no-cache',
  },
  mutate: {
    fetchPolicy: 'no-cache',
  },
}

export default client

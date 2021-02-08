import { ApolloClient, InMemoryCache } from '@apollo/client'
import { onError } from "@apollo/client/link/error";



 const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/',
  cache: new InMemoryCache(),

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

import React from 'react'
import { AppRegistry } from 'react-native'
import { ApolloProvider } from '@apollo/client'

import RootStackScreen from './src/routes/stackNavigation'
import  client  from './apolloClient'

function App () {
  return (
    <ApolloProvider client={client}>
      <RootStackScreen />
    </ApolloProvider>

  )
}
AppRegistry.registerComponent('MyApplication', () => App)
export default App

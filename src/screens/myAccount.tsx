import React from 'react'
import { Text, View } from 'react-native'
import { gql, useQuery } from '@apollo/client'

import { globalStyles } from '../styles/global'

interface SHIP {
  name: string
  // eslint-disable-next-line camelcase
  home_port: string
  image: string
  id: string

}
const GET_SHIPS = gql`
query GetShips {
  ships {
    name
    home_port
    image
    id
  }
    }
    `
export default function MyAccountScreen () {
  const { loading, data } = useQuery(GET_SHIPS)

  return (
    <View style={globalStyles.container}>
      <Text>Search Screen</Text>
      <View> {
        data.ships.map((ship:SHIP) => (
          <Text key={ship.id}>{ship.home_port}</Text>
        ))
      }
      </View>
    </View>
  )
}

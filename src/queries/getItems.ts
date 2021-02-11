import { gql } from '@apollo/client'

import client from '../apolloClient'

const GetItems = gql`
query GetItems{
  items {
        id
        title
        brand
        price
        description
        images
        color
        liked
        quantity
  }
    }
    `
export const getItems = async () => {
  const { data } = await client.query({
    query: GetItems,
  })
  return data.items
}

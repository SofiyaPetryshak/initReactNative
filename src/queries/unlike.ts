import { gql } from '@apollo/client'

import client from '../apolloClient'

const RemoveFromLiked = gql`
mutation removeFromLiked($id:Int!, $liked:Boolean!){
  removeFromLiked(id:$id, liked:$liked)
  }`
export const delFromLiked = async (id:number, liked:boolean) => {
  try{
    const response = await
    client.mutate({
      mutation: RemoveFromLiked,
      variables: {id, liked}
    })
    console.warn(response)
  //return response.editItem
  }
  catch(e){
    console.warn(e)
  }

}

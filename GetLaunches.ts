import { gql } from '@apollo/client'

import { client } from './apolloClient'

interface SHIP {
  name: string
  home_port: string
  image: string
  id: string

}
const GetShips = gql`
query GetLaunches {
  ships {
    name
    home_port
    image
    id
  }
    }
    `
export const getShips = async () => {
  const { data } = await client.query({
    query: GetShips,
  })
}

const ListAppletsDefinitions = gql`
  query ListAppletDefinitions {
    listAppletDefinitions {
      ...AppletDefinitionFields
    }
  }
  ${APPLET_DEFINITION_FRAGMENT}
`
export const listAppletDefinitions = async (): Promise<AppletDefinition[]> => {
  const { data } = await client.query<ListAppletDefinitionsOutput>({
    query: ListAppletsDefinitions,
  })

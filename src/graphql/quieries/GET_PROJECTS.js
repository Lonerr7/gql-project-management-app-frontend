import { gql } from "@apollo/client";


export const GET_PROJECTS = gql`
  Projects {
    projects {
      id
      name
      status
      description
      client {
        id
        name
      }
    }
  }
`
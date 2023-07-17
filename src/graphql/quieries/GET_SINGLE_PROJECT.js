import { gql } from '@apollo/client';

export const GET_SINGLE_PROJECT = gql`
  query Project($id: ID!) {
    project(id: $id) {
      id
      name
      status
      description
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

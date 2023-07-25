import { gql } from '@apollo/client';

export const UPDATE_PROJECT = gql`
  mutation UpdateProject(
    $id: ID!
    $name: String!
    $status: String!
    $description: String!
  ) {
    updateProject(
      id: $id
      name: $name
      status: $status
      description: $description
    ) {
      ...ProjectFragment
    }
  }
`;

import { gql } from '@apollo/client';

export const ADD_CLIENT = gql`
  mutation AddClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      ...ClientFragment
    }
  }
`;

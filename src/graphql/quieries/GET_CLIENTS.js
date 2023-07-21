import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
  query Clients {
    clients {
      ...ClientFragment
    }
  }
`;

export const GET_CLIENTS_FOR_SELECT = gql`
  query ClientsForSelect {
    clients {
      id
      name
    }
  }
`;

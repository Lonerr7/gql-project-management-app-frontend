import { gql, useQuery } from '@apollo/client';
import s from './Clients.module.scss';

const GET_CLIENTS = gql`
  query Clients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const Clients = () => {
  const { loading, data, error } = useQuery(GET_CLIENTS);

  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return <div className={s.clients}>Clients</div>;
};

export default Clients;

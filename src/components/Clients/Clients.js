import s from './Clients.module.scss';
import { gql, useQuery } from '@apollo/client';
import Client from './Client';

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

  const clients = data.clients.map((c) => (
    <Client key={c.id} name={c.name} phone={c.phone} email={c.email} />
  ));

  return (
    <div className={s.clients}>
      <p className={s.clients__title}>Clients</p>
      <ul className={s.clients__list}>{clients}</ul>
    </div>
  );
};

export default Clients;

import s from './Clients.module.scss';
import { useQuery } from '@apollo/client';
import Client from './Client';
import { GET_CLIENTS } from '../../graphql/quieries/GET_CLIENTS';

const Clients = () => {
  const { loading, data, error } = useQuery(GET_CLIENTS);

  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const clients = data.clients.map((c) => (
    <Client
      key={c.id}
      id={c.id}
      name={c.name}
      phone={c.phone}
      email={c.email}
    />
  ));

  return (
    <div className={s.clients}>
      <p className={s.clients__title}>Clients</p>
      <ul className={s.clients__list}>{clients}</ul>
    </div>
  );
};

export default Clients;

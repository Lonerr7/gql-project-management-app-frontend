import s from './Clients.module.scss';
import { useQuery } from '@apollo/client';
import Client from './Client';
import { GET_CLIENTS } from '../../graphql/quieries/GET_CLIENTS';
import Preloader from '../common/Preloader/Preloader';

const Clients = () => {
  const { loading, data, error } = useQuery(GET_CLIENTS);

  const clients = data?.clients.map((c) => (
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
      {loading ? (
        <Preloader customCName={s.clients__preloader} />
      ) : error ? (
        <p className={`error ${s.error}`}>{error}</p>
      ) : (
        <ul className={s.clients__list}>{clients}</ul>
      )}
    </div>
  );
};

export default Clients;

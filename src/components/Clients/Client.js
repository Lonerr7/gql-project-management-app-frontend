import { MdDelete } from 'react-icons/md';
import s from './Clients.module.scss';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../../graphql/mutations/DELETE_CLIENT';
import { GET_CLIENTS } from '../../graphql/quieries/GET_CLIENTS';
import Preloader from '../common/Preloader/Preloader';

const Client = ({ id, name, email, phone }) => {
  const [deleteClient, { error, loading }] = useMutation(DELETE_CLIENT, {
    variables: {
      id,
    },
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.filter((c) => c.id !== deleteClient.id) },
      });
    },
  });

  return (
    <li className={s.client}>
      <div className={s.client__inner}>
        <p className={s.client__info}>{name}</p>
        <a
          className={`${s.client__info} ${s.client__email}`}
          href={`mailto:${email}`}
        >
          {email}
        </a>
        <p className={s.client__info}>{phone}</p>
        <div className={s.client__controls}>
          {loading ? <Preloader customCName={s.client__preloader} /> : null}
          <button className={s.client__delete} onClick={deleteClient}>
            <MdDelete className={s.client__icon} size={22} />
          </button>
        </div>
      </div>
      {error ? <p className={`error ${s.client__error}`}>{error}</p> : null}
    </li>
  );
};

export default Client;

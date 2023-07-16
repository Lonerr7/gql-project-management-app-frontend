import { MdDelete } from 'react-icons/md';
import s from './Clients.module.scss';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../../graphql/mutations/DELETE_CLIENT';
import { GET_CLIENTS } from '../../graphql/quieries/GET_CLIENTS';

const Client = ({ id, name, email, phone }) => {
  const [deleteClient, { data, error, loading }] = useMutation(DELETE_CLIENT, {
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
      <p className={s.client__info}>{name}</p>
      <p className={s.client__info}>{email}</p>
      <p className={s.client__info}>{phone}</p>
      <button className={s.client__delete} onClick={deleteClient}>
        <MdDelete className={s.client__icon} size={22} />
      </button>
    </li>
  );
};

export default Client;

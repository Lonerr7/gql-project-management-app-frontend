import s from './Clients.module.scss';
import { MdEmail } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../../graphql/mutations/DELETE_CLIENT';
import { GET_CLIENTS } from '../../graphql/quieries/GET_CLIENTS';
import Preloader from '../common/Preloader/Preloader';
import DeleteBtn from '../common/DeleteBtn/DeleteBtn';

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
        <p className={s.client__info}>
          <BsFillPersonFill className={s.client__icon} size={21} />
          {name}
        </p>
        <a
          className={`${s.client__info} ${s.client__email}`}
          href={`mailto:${email}`}
        >
          <MdEmail
            className={`${s.client__icon} ${s.client__iconEmail}`}
            size={21}
          />
          {email}
        </a>
        <a className={s.client__info} href={`tel:${phone}`}>
          <AiFillPhone className={s.client__icon} size={21} />
          {phone}
        </a>
        <div className={s.client__controls}>
          {loading ? <Preloader customCName={s.client__preloader} /> : null}
          <DeleteBtn onDelete={deleteClient} />
        </div>
      </div>
      {error ? <p className={`error ${s.client__error}`}>{error}</p> : null}
    </li>
  );
};

export default Client;

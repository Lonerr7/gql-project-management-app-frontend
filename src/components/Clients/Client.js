import { MdDelete } from 'react-icons/md';
import s from './Clients.module.scss';

const Client = ({ name, email, phone }) => {
  return (
    <li className={s.client}>
      <p className={s.client__info}>{name}</p>
      <p className={s.client__info}>{email}</p>
      <p className={s.client__info}>{phone}</p>
      <button className={s.client__delete}>
        <MdDelete className={s.client__icon} size={22} />
      </button>
    </li>
  );
};

export default Client;

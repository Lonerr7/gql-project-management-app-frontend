import s from './Clients.module.scss';
import { useQuery } from '@apollo/client';
import Client from './Client';
import { GET_CLIENTS } from '../../graphql/quieries/GET_CLIENTS';
import Preloader from '../common/Preloader/Preloader';
import { useState } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import AddClient from './AddClient/AddClient';

const Clients = () => {
  const { loading, data, error } = useQuery(GET_CLIENTS);
  const [isOpen, setIsOpen] = useState(false);

  const modalOpeningHandler = () => {
    setIsOpen(!isOpen);
  };

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
      {isOpen ? <AddClient modalOpeningHandler={modalOpeningHandler} /> : null}
      <h1 className={s.clients__title}>Clients</h1>
      <button className={s.clients__addBtn} onClick={modalOpeningHandler}>
        <BsPersonFill className={s.clients__addIcon} size={24} />
        Add Client
      </button>
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

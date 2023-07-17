import s from './NotFound.module.scss';
import notFound from '../../assets/images/404.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const naviagte = useNavigate();

  const goBackHandler = () => {
    naviagte(-1);
  };

  return (
    <section className={s.notFound}>
      <h1 className={s.notFound__title}>
        The page you are looking for was not found!
      </h1>
      <img className={s.notFound__img} src={notFound} alt="not found" />
      <button className={s.notFound__btn} onClick={goBackHandler}>
        Go Back
      </button>
    </section>
  );
};

export default NotFound;

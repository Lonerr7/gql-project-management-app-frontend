import preloader from '../../../assets/images/preloader.gif';
import s from './Preloader.module.scss';

const Preloader = ({ customCName }) => {
  return (
    <img
      className={`${customCName} ${s.preloader}`}
      src={preloader}
      alt="prelodaer"
    />
  );
};

export default Preloader;

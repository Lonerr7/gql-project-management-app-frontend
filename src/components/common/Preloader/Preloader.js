import preloader from '../../../assets/images/preloader.gif';

const Preloader = ({ customCName }) => {
  return <img className={customCName} src={preloader} alt="prelodaer" />;
};

export default Preloader;

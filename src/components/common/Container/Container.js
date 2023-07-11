import s from './Container.module.scss';

const Container = ({ customClass, children }) => {
  return <div className={`${s.container} ${customClass}`}>{children}</div>;
};

export default Container;

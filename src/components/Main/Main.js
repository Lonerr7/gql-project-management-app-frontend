import s from './Main.module.scss';
import Container from '../common/Container/Container';
import AppRouter from '../Router/AppRouter';

const Main = ({ customClass }) => {
  return (
    <main className={`${s.main} ${customClass}`}>
      <Container>
        <AppRouter />
      </Container>
    </main>
  );
};

export default Main;

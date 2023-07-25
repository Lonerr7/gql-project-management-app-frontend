import s from './Main.module.scss';
import Container from '../common/Container/Container';
import AppRouter from '../Router/AppRouter';

const Main = () => {
  return (
    <main className={s.main}>
      <Container>
        <AppRouter />
      </Container>
    </main>
  );
};

export default Main;

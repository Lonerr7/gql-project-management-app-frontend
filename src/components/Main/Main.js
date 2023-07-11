import Clients from '../Clients/Clients';
import Container from '../common/Container/Container';
import s from './Main.module.scss';

const Main = ({ customClass }) => {
  return (
    <main className={`${s.main} ${customClass}`}>
      <Container>
        <Clients />
      </Container>
    </main>
  );
};

export default Main;

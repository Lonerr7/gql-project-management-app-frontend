import Container from '../common/Container/Container';
import s from './Header.module.scss';
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;

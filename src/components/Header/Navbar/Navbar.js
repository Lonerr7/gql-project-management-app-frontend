import s from './Navbar.module.scss';
import logo from '../../../assets/images/logo.png';
import Links from './Links';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <Link className={s.navbar__link} to="/">
        <img className={s.navbar__logo} src={logo} alt="logo" />
        <span className={s.navbar__linkText}>ProjectMgmt</span>
      </Link>
      <Links />
    </nav>
  );
};

export default Navbar;

import s from './Navbar.module.scss';
import logo from '../../../assets/images/logo.png';
import Links from './Links';

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <a className={s.navbar__link} href="/">
        <img className={s.navbar__logo} src={logo} alt="logo" />
        <span className={s.navbar__linkText}>ProjectMgmt</span>
      </a>
      <Links />
    </nav>
  );
};

export default Navbar;

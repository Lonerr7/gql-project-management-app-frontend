import s from './Navbar.module.scss';
import logo from '../../../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <a className={s.navbar__link} href="/">
        <img className={s.navbar__logo} src={logo} alt="logo" />
        <span className={s.navbar__linkText}>ProjectMgmt</span>
      </a>
    </nav>
  );
};

export default Navbar;

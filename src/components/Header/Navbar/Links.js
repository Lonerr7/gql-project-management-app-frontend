import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';

const Links = () => {
  return (
    <ul className={s.links}>
      <li className={s.links__item}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${s.links__link} ${s.links__link_active}`
              : s.links__link
          }
          to="/"
        >
          Clients
        </NavLink>
      </li>
      <li className={s.links__item}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${s.links__link} ${s.links__link_active}`
              : s.links__link
          }
          to="/projects"
        >
          Projects
        </NavLink>
      </li>
    </ul>
  );
};

export default Links;

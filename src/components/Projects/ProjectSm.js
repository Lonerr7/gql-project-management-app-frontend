import { Link } from 'react-router-dom';
import s from './Projects.module.scss';

const ProjectSm = ({ name, id, status }) => {
  return (
    <li className={s.project}>
      <div className={s.project__box}>
        <h2 className={s.project__title}>{name}</h2>
        <Link className={s.project__link} to={`/projects/${id}`}>
          View
        </Link>
      </div>
      <p className={s.project__status}>
        Status: <span className={s.project__status_bold}>{status}</span>
      </p>
    </li>
  );
};

export default ProjectSm;

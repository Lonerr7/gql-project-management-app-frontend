import { Link } from 'react-router-dom';
import s from './Projects.module.scss';
import { shortenString } from '../../utils/shortenString';
import DeleteBtn from '../common/DeleteBtn/DeleteBtn';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../../graphql/mutations/DELETE_PROJECT';
import { GET_PROJECTS } from '../../graphql/quieries/GET_PROJECTS';

const ProjectSm = ({ name, id, status }) => {
  const [deleteProject, { data, loading, error }] = useMutation(
    DELETE_PROJECT,
    {
      update(cache, { data: { deleteProject } }) {
        const { projects } = cache.readQuery({
          query: GET_PROJECTS,
        });

        cache.writeQuery({
          query: GET_PROJECTS,
          data: {
            projects: projects.filter(
              (project) => project.id !== deleteProject.id
            ),
          },
        });
      },
      variables: {
        id,
      },
    }
  );

  const deleteProjectHander = () => {
    deleteProject();
  };

  return (
    <li className={s.project}>
      <div className={s.project__box}>
        <h2
          className={s.project__title}
          title={name.length >= 20 ? name : null}
        >
          {shortenString(name, 25)}
        </h2>
        <div className={s.project__controls}>
          <Link className={s.project__link} to={`/projects/${id}`}>
            View
          </Link>
          <DeleteBtn
            btnCName={s.project__deleteBtn}
            onDelete={deleteProjectHander}
          />
        </div>
      </div>
      <p className={s.project__status}>
        Status: <span className={s.project__status_bold}>{status}</span>
      </p>
    </li>
  );
};

export default ProjectSm;

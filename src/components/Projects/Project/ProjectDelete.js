import { useMutation } from '@apollo/client';
import SubmitLoadingBtn from '../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import { DELETE_PROJECT } from '../../../graphql/mutations/DELETE_PROJECT';
import s from './Project.module.scss';
import { GET_PROJECTS } from '../../../graphql/quieries/GET_PROJECTS';
import { useNavigate } from 'react-router-dom';

const ProjectDelete = ({ projectId }) => {
  const [deleteProject, { loading, error }] = useMutation(DELETE_PROJECT, {
    update(cache, { data: { deleteProject } }) {
      const { projects } = cache.readQuery({
        query: GET_PROJECTS,
      });

      cache.writeQuery({
        query: GET_PROJECTS,
        data: {
          projects: projects.filter((pr) => pr.id !== deleteProject.id),
        },
      });
    },
  });

  const navigate = useNavigate();

  const projectDeleteHandler = () => {
    (async () => {
      await deleteProject({
        variables: { id: projectId },
      });
      navigate(-1);
    })();
  };

  return (
    <>
      <SubmitLoadingBtn
        btnClass={s.project__deleteBtn}
        isFetching={loading}
        btnFetchingText="Deleting"
        btnText="Delete Project"
        btnType="button"
        onSubmit={projectDeleteHandler}
      />
      {error ? <p className={s.project__deleteError}>{error.message}</p> : null}
    </>
  );
};

export default ProjectDelete;

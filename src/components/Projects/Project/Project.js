import { useNavigate, useParams } from 'react-router-dom';
import s from './Project.module.scss';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_PROJECT } from '../../../graphql/quieries/GET_SINGLE_PROJECT';
import Preloader from '../../common/Preloader/Preloader';
import ProjectClientInfo from './ProjectClientInfo';

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, loading } = useQuery(GET_SINGLE_PROJECT, {
    variables: {
      id,
    },
  });

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className={s.project}>
      {loading ? (
        <Preloader />
      ) : error ? (
        <p className={s.error}>{error.message}</p>
      ) : (
        <>
          <div className={s.project__box}>
            <h1 className={s.project__title}>{data.project.name}</h1>
            <button className={s.project__goBack} onClick={goBackHandler}>
              Back
            </button>
          </div>
          <p className={s.project__descr}>{data.project.description}</p>

          <div className={s.project__statusBox}>
            <h2 className={s.project__statusTitle}>Project Status</h2>
            <p className={s.project__status}>{data.project.status}</p>
          </div>

          <ProjectClientInfo
            name={data.project.client.name}
            email={data.project.client.email}
            phone={data.project.client.phone}
          />
        </>
      )}
    </div>
  );
};

export default Project;

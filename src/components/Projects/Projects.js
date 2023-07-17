import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../../graphql/quieries/GET_PROJECTS';
import s from './Projects.module.scss';
import Project from './Project';
import Preloader from '../common/Preloader/Preloader';

const Projects = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS);

  const projects = data?.projects.map((p) => (
    <Project key={p.id} id={p.id} name={p.name} status={p.status} />
  ));

  return (
    <section className={s.projects}>
      {loading ? (
        <Preloader customCName={s.projects__preloader} />
      ) : error ? (
        <p className={s.error}>{error.message}</p>
      ) : (
        <>
          <h1 className={s.projects__title}>Projects</h1>
          <ul className={s.projects__list}>{projects}</ul>
        </>
      )}
    </section>
  );
};

export default Projects;

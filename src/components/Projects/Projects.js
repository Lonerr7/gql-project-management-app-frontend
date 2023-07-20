import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../../graphql/quieries/GET_PROJECTS';
import s from './Projects.module.scss';
import ProjectSm from './ProjectSm';
import Preloader from '../common/Preloader/Preloader';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { useState } from 'react';
import AddProject from './AddProject/AddProject';

const Projects = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS);
  const [isOpen, setIsOpen] = useState(false);

  const projects = data?.projects.map((p) => (
    <ProjectSm key={p.id} id={p.id} name={p.name} status={p.status} />
  ));

  const modalOpeningHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={s.projects}>
      {isOpen ? <AddProject modalOpeningHandler={modalOpeningHandler} /> : null}

      {loading ? (
        <Preloader customCName={s.projects__preloader} />
      ) : error ? (
        <p className={s.error}>{error.message}</p>
      ) : (
        <>
          <h1 className={s.projects__title}>Projects</h1>
          <button className={s.projects__addBtn} onClick={modalOpeningHandler}>
            <AiOutlineUnorderedList className={s.projects__addIcon} size={24} />
            New Project
          </button>
          <ul className={s.projects__list}>{projects}</ul>
        </>
      )}
    </section>
  );
};

export default Projects;

import { ImCross } from 'react-icons/im';
import st from '../../../scss/addModal.module.scss';
import { Formik } from 'formik';
import { projectValidationSchemaNoClient } from '../../../utils/projectValidationSchema';
import EditProjectForm from './EditProjectForm';
import { useMutation } from '@apollo/client';
import { UPDATE_PROJECT } from '../../../graphql/mutations/UPDATE_PROJECT';
import { GET_SINGLE_PROJECT } from '../../../graphql/quieries/GET_SINGLE_PROJECT';

const EditProject = ({
  id,
  name,
  description,
  status,
  modalOpeningHandler,
}) => {
  const initialValues = {
    name,
    description,
    status,
  };

  const [
    editProject,
    { loading: isProjectBeingEdited, error: editProjectError },
  ] = useMutation(UPDATE_PROJECT, {
    update(cache, { data: { updateProject } }) {
      const { project } = cache.readQuery({
        query: GET_SINGLE_PROJECT,
        variables: { id },
      });

      cache.writeQuery({
        query: GET_SINGLE_PROJECT,
        data: {
          project: { ...project, ...updateProject },
        },
      });
    },
  });

  const onSubmit = async ({ name, description, status }) => {
    await editProject({
      variables: { name, description, status, id },
    });
    modalOpeningHandler();
  };

  return (
    <div className={st.add}>
      <div className={st.add__inner}>
        <div className={st.add__top}>
          <h2 className={st.add__title}>Edit Project</h2>
          <button className={st.add__closeBtn} onClick={modalOpeningHandler}>
            <ImCross className={st.add__closeIcon} size={17} />
          </button>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={projectValidationSchemaNoClient}
          onSubmit={onSubmit}
          validateOnBlur={false}
        >
          <EditProjectForm />
        </Formik>
      </div>
    </div>
  );
};

export default EditProject;

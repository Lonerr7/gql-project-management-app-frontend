import st from '../../../scss/addModal.module.scss';
import * as yup from 'yup';
import { ImCross } from 'react-icons/im';
import { Formik } from 'formik';
import AddProjectForm from './AddProjectForm';
import { useQuery, useMutation } from '@apollo/client';
import { GET_CLIENTS_FOR_SELECT } from '../../../graphql/quieries/GET_CLIENTS';
import { ADD_PROJECT } from '../../../graphql/mutations/ADD_PROJECT';
import { GET_PROJECTS } from '../../../graphql/quieries/GET_PROJECTS';
import { projectStatus } from '../../../utils/projectStatus';

const { NOT_STARTED, IN_PROGRESS, COMPLETED } = projectStatus;

const initialValues = {
  name: '',
  description: '',
  status: '',
  client: '',
};

const validationSchema = yup.object({
  name: yup
    .string()
    .min(1, 'Project name must be 1 character or longer')
    .required('Enter a project name'),
  description: yup
    .string()
    .max(300, 'Description must not be more than 300 characters')
    .required('Enter your project description'),
  status: yup.string().required("Select project's status"),
  client: yup.string().required('Select a client for a project'),
});

const AddProject = ({ modalOpeningHandler }) => {
  const {
    data: clientsForSelect,
    loading: areClientsLoading,
    error,
  } = useQuery(GET_CLIENTS_FOR_SELECT);

  const [
    addNewProject,
    { loading: isProjectBeingAdded, error: addProjectError },
  ] = useMutation(ADD_PROJECT, {
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });

      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [addProject, ...projects] },
      });
    },
  });

  const statusSelectOptions = [
    { value: NOT_STARTED, label: 'Not Started' },
    { value: IN_PROGRESS, label: 'In Progress' },
    { value: COMPLETED, label: 'Completed' },
  ];
  let clientsSelectOptions = [];

  // Creating options for clients select
  if (clientsForSelect?.clients) {
    console.log(clientsForSelect);

    clientsSelectOptions = clientsForSelect.clients.map((c) => ({
      label: c.name,
      value: c.id,
    }));
  }

  const onSubmit = async ({ name, client, description, status }) => {
    await addNewProject({
      variables: {
        name,
        description,
        status,
        clientId: client,
      },
    });
    modalOpeningHandler();
  };

  return (
    <div className={st.add}>
      <div className={st.add__inner}>
        <div className={st.add__top}>
          <h2 className={st.add__title}>New Project</h2>
          <button className={st.add__closeBtn} onClick={modalOpeningHandler}>
            <ImCross className={st.add__closeIcon} size={17} />
          </button>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnBlur={false}
        >
          <AddProjectForm
            initialValues={initialValues}
            statusSelectOptions={statusSelectOptions}
            clientsSelectOptions={clientsSelectOptions}
            areClientsLoading={areClientsLoading}
            clientsLoadingError={error}
            isProjectBeingAdded={isProjectBeingAdded}
            addProjectError={addProjectError}
          />
        </Formik>
      </div>
    </div>
  );
};

export default AddProject;

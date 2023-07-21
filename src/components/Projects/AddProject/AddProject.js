import st from '../../../scss/addModal.module.scss';
import * as yup from 'yup';
import { ImCross } from 'react-icons/im';
import { Formik } from 'formik';
import AddProjectForm from './AddProjectForm';
import { useQuery } from '@apollo/client';
import { GET_CLIENTS_FOR_SELECT } from '../../../graphql/quieries/GET_CLIENTS';
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
    .max(100, 'Description must not be more than 100 characters')
    .required('Enter your project description'),
  status: yup.string().required(),
});

const AddProject = ({ modalOpeningHandler }) => {
  // const [clientSelectOptions, setClientSelectOptions] = useState(null);
  const {
    data,
    loading: areClientsLoading,
    error,
  } = useQuery(GET_CLIENTS_FOR_SELECT);

  const statusSelectOptions = [
    { value: NOT_STARTED, label: 'Not Started' },
    { value: IN_PROGRESS, label: 'In Progress' },
    { value: COMPLETED, label: 'Completed' },
  ];
  let clientsSelectOptions = [];

  // Creating options for clients select
  if (data?.clients) {
    clientsSelectOptions = data.clients.map((c) => ({
      label: c.name,
      value: c.name,
    }));
  }

  const onSubmit = (values) => {
    console.log(values);
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
          />
        </Formik>
      </div>
    </div>
  );
};

export default AddProject;

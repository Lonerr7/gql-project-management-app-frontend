import st from '../../../scss/addModal.module.scss';
import * as yup from 'yup';
import { ImCross } from 'react-icons/im';
import { Formik } from 'formik';
import AddProjectForm from './AddProjectForm';

const initialValues = {
  name: '',
  description: '',
  status: '',
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
});

const AddProject = ({ modalOpeningHandler }) => {
  const onSubmit = (values, { setFieldError }) => {
    console.log(values);

    if (!values.status) {
      setFieldError('status', 'Please, select your status!');
    }
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
        >
          <AddProjectForm initialValues={initialValues} />
        </Formik>
      </div>
    </div>
  );
};

export default AddProject;

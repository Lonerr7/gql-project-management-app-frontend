import s from './AddProject.module.scss';
import st from '../../../scss/addModal.module.scss';
import { Form, useFormikContext } from 'formik';
import FormControl from '../../common/FormControl/FormControl';
import { useEffect } from 'react';
import SubmitLoadingBtn from '../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import withOnSelectChangeSelect from '../../common/SelectField/SelectField';

const AddProjectForm = () => {
  const { values, initialValues, submitForm } = useFormikContext();

  const onSelectChange = (newValue) => {
    values.status = newValue.value;
    initialValues.status = newValue.value;
  };

  useEffect(() => {
    console.log(values, initialValues);

    return () => {
      values.status = '';
      initialValues.status = '';
    };

    // eslint-disable-next-line
  }, [values]);

  return (
    <Form className={st.add__form}>
      <FormControl
        wrapperCName={st.add__formControl}
        labelCName={st.add__formLabel}
        inputCName={st.add__formInput}
        field="name"
        labelData="Name"
        placeholder="Enter a project's name"
        customErrorCName={st.add__formError}
      />
      <FormControl
        wrapperCName={st.add__formControl}
        labelCName={st.add__formLabel}
        inputCName={`${st.add__formInput} ${s.add__textarea}`}
        field="description"
        labelData="Description"
        placeholder="Enter a project's description"
        customErrorCName={st.add__formError}
        component="textarea"
      />
      <FormControl
        wrapperCName={st.add__formControl}
        labelCName={st.add__formLabel}
        inputCName={`${st.add__formInput} ${s.add__select}`}
        field="status"
        labelData="Project Status"
        placeholder="Enter a project's status"
        customErrorCName={st.add__formError}
        component={withOnSelectChangeSelect(onSelectChange, values.status)}
      />

      <SubmitLoadingBtn
        btnClass={s.add__formSend}
        btnText="Add"
        btnFetchingText="Adding"
        btnType="submit"
        isFetching={false}
        onSubmit={() => {}}
      />
    </Form>
  );
};

export default AddProjectForm;

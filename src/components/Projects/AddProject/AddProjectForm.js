import s from './AddProject.module.scss';
import st from '../../../scss/addModal.module.scss';
import { Form, useFormikContext } from 'formik';
import FormControl from '../../common/FormControl/FormControl';
import { useEffect } from 'react';
import SubmitLoadingBtn from '../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import withOnSelectChangeSelect from '../../common/SelectField/SelectField';

const AddProjectForm = ({
  statusSelectOptions,
  clientsSelectOptions,
  areClientsLoading,
  clientsLoadingError,
  isProjectBeingAdded,
  addProjectError,
}) => {
  const { values, initialValues, setFieldError } = useFormikContext();

  const onStatusSelectChange = (newValue) => {
    initialValues.status = newValue.value;
    values.status = newValue.value;
    setFieldError('status');
  };

  const onClientSelectChange = (newValue) => {
    initialValues.client = newValue.value;
    values.client = newValue.value;
    setFieldError('client');
  };

  useEffect(() => {
    return () => {
      values.status = '';
      initialValues.status = '';
      values.client = '';
      initialValues.client = '';
    };

    // eslint-disable-next-line
  }, []);

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
        component={withOnSelectChangeSelect(
          statusSelectOptions,
          onStatusSelectChange,
          values.status,
          "Select project's status",
          {
            isClearable: true,
          }
        )}
      />
      {clientsLoadingError ? (
        <p className={s.error}>{clientsLoadingError.error}</p>
      ) : (
        <FormControl
          wrapperCName={st.add__formControl}
          labelCName={st.add__formLabel}
          inputCName={`${st.add__formInput} ${s.add__select}`}
          field="client"
          labelData="Client"
          placeholder="Enter a project owner"
          customErrorCName={st.add__formError}
          component={withOnSelectChangeSelect(
            clientsSelectOptions,
            onClientSelectChange,
            values.client,
            "Select project's client",
            {
              isClearable: true,
              isLoading: areClientsLoading,
            }
          )}
        />
      )}

      <SubmitLoadingBtn
        btnClass={`${st.add__formSend} ${s.add__btn}`}
        btnText="Add"
        btnFetchingText="Adding"
        btnType="submit"
        isFetching={isProjectBeingAdded}
        onSubmit={() => {}}
      />

      {addProjectError ? (
        <p className={s.add__errorMsg}>{addProjectError.message}</p>
      ) : null}
    </Form>
  );
};

export default AddProjectForm;

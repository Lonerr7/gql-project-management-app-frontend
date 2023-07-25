import { Form, useFormikContext } from 'formik';
import st from '../../../scss/addModal.module.scss';
import s from '../AddProject/AddProject.module.scss';
import FormControl from '../../common/FormControl/FormControl';
import withOnSelectChangeSelect from '../../common/SelectField/SelectField';
import SubmitLoadingBtn from '../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import { statusSelectOptions } from '../../../utils/statusSelectOptions';

const EditProjectForm = ({ isProjectBeingEdited, editProjectError }) => {
  const { values, initialValues, setFieldError } = useFormikContext();

  const onStatusSelectChange = (newValue) => {
    initialValues.status = newValue.value;
    values.status = newValue.value;
    setFieldError('status');
  };

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

      <SubmitLoadingBtn
        btnClass={`${st.add__formSend} ${s.add__btn}`}
        btnText="Edit"
        btnFetchingText="Editing"
        btnType="submit"
        isFetching={isProjectBeingEdited}
        onSubmit={() => {}}
      />

      {editProjectError ? (
        <p className={s.add__errorMsg}>{editProjectError.message}</p>
      ) : null}
    </Form>
  );
};

export default EditProjectForm;

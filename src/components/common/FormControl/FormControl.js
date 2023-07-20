import s from './FormControl.module.scss';
import { Field, ErrorMessage } from 'formik';

const FormControl = ({
  wrapperCName,
  labelCName,
  inputCName,
  field,
  labelData,
  placeholder,
  customErrorCName,
  component,
}) => {
  return (
    <div className={`${s.control} ${wrapperCName}`}>
      <label className={labelCName} htmlFor={field}>
        {labelData}
      </label>
      <Field
        className={inputCName}
        name={field}
        id={field}
        placeholder={placeholder}
        component={component}
      />
      <ErrorMessage name={field}>
        {(err) => (
          <p className={`${customErrorCName} ${s.control__errorMsg}`}>{err}</p>
        )}
      </ErrorMessage>
    </div>
  );
};

export default FormControl;

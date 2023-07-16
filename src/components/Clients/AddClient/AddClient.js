import s from './AddClient.module.scss';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import FormControl from '../../common/FormControl/FormControl';
import { ImCross } from 'react-icons/im';
import SubmitLoadingBtn from '../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import { useMutation } from '@apollo/client';
import { ADD_CLIENT } from '../../../graphql/mutations/ADD_CLIENT';
import { GET_CLIENTS } from '../../../graphql/quieries/GET_CLIENTS';

const initialValues = {
  name: 'test',
  email: 'test@gmail.com',
  phone: '1234',
};

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Name must be 3 or more characters')
    .required('Please, enter your name'),
  email: yup
    .string()
    .email('Please, enter a valid email')
    .required('Please, enter an email'),
  phone: yup
    .string()
    .max(20, 'Is it a valid phone? I doubt')
    .required('Please, enter a phone number'),
});

const AddClient = ({ modalOpeningHandler }) => {
  const [addClient, { loading, error }] = useMutation(ADD_CLIENT, {
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  const onSubmit = async ({ name, phone, email }) => {
    await addClient({
      variables: {
        name,
        phone,
        email,
      },
    });
    modalOpeningHandler();
  };

  return (
    <div className={s.addClient}>
      <div className={s.addClient__inner}>
        <div className={s.addClient__top}>
          <h2 className={s.addClient__title}>Add Client</h2>
          <button
            className={s.addClient__closeBtn}
            onClick={modalOpeningHandler}
          >
            <ImCross className={s.addClient__closeIcon} size={17} />
          </button>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className={s.addClient__form}>
            <FormControl
              wrapperCName={s.addClient__formControl}
              labelCName={s.addClient__formLabel}
              inputCName={s.addClient__formInput}
              field="name"
              labelData="Name"
              placeholder="Enter your name"
              customErrorCName={`error ${s.addClient__formError}`}
            />
            <FormControl
              wrapperCName={s.addClient__formControl}
              labelCName={s.addClient__formLabel}
              inputCName={s.addClient__formInput}
              field="email"
              labelData="Email"
              placeholder="Enter your email"
              customErrorCName={`error ${s.addClient__formError}`}
            />
            <FormControl
              wrapperCName={`${s.addClient__formControl} ${s.addClient__formControl_last}`}
              labelCName={s.addClient__formLabel}
              inputCName={s.addClient__formInput}
              field="phone"
              labelData="Phone"
              placeholder="Enter your phone"
              customErrorCName={`error ${s.addClient__formError}`}
            />

            <SubmitLoadingBtn
              btnClass={s.addClient__formSend}
              btnText="Add"
              btnFetchingText="Adding"
              btnType="submit"
              isFetching={loading}
              onSubmit={() => {}}
            />

            {error ? (
              <p className={`error ${s.addClient__errorMsg}`}>
                {error.message}
              </p>
            ) : null}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddClient;

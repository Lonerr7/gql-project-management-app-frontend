import * as yup from 'yup';

export const projectValidationSchema = yup.object({
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

export const projectValidationSchemaNoClient = yup.object({
  name: yup
    .string()
    .min(1, 'Project name must be 1 character or longer')
    .required('Enter a project name'),
  description: yup
    .string()
    .max(300, 'Description must not be more than 300 characters')
    .required('Enter your project description'),
  status: yup.string().required("Select project's status"),
});
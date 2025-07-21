import * as Yup from 'yup';

export interface FormValues {
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  projectDetails?: string;
}

export const initialValues: FormValues = {
  name: '',
  companyName: '',
  email: '',
  phoneNumber: '',
  projectDetails: '',
};

export const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  companyName: Yup.string().required('Company Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  projectDetails: Yup.string(),
});


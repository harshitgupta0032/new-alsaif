import * as Yup from 'yup';

export interface QuotesModelProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const contactInitialValues = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
  captcha: '',
};

export const contactValidationSchema = Yup.object({
  fullName: Yup.string().min(2).required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().min(8).required('Phone is required'),
  message: Yup.string().required('Message is required'),
  captcha: Yup.string().required('CAPTCHA is required'),
});
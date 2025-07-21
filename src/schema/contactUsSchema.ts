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
  captchaInput: '',
};

export const contactValidationSchema = Yup.object({
  fullName: Yup.string().min(2).required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().min(8).required('Phone is required'),
  message: Yup.string().required('Message is required'),
  captchaInput: Yup.string().required('Please enter the CAPTCHA'),
});
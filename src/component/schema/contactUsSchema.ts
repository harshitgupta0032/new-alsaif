import * as Yup from 'yup';

export interface QuotesModelProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  captcha: string;
}
export const contactInitialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
  captcha: '',
};

export const contactUsValidationSchema = (t: (key: string) => string) => Yup.object({
  name: Yup.string().min(2).required(t('Al_Saif_form_name_required_error_message')),
  email: Yup.string().email(t('Al_Saif_form_email_invalid_error_message')).required(t('Al_Saif_form_email_required_error_message')),
  phone: Yup.string().min(8).required(t('Al_Saif_form_phone_required_error_message')),
  message: Yup.string().required(t('Al_Saif_form_message_required_error_message')),
  captcha: Yup.string().required(t('Al_Saif_form_captcha_required_error_message')),
});
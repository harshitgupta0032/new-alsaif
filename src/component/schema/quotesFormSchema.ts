import * as Yup from 'yup';

export interface FormValues {
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  projectDetails?: string;
  captcha: string; 
}

export const initialValues: FormValues = {
  name: '',
  companyName: '',
  email: '',
  phoneNumber: '',
  projectDetails: '',
  captcha: '',
};

export function getValidationSchema(t: (key: string) => string) {
  return Yup.object({
    name: Yup.string().required(t('Al_Saif_form_name_required_error_message')),
    companyName: Yup.string().required(t('Al_Saif_form_company_name_required_error_message')),
    email: Yup.string().email(t('Al_Saif_form_email_valid_email_error_message')).required(t('Al_Saif_form_email_required_error_message')),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, t('Al_Saif_form_phone_length_error_message'))
      .required(t('Al_Saif_form_phone_required_error_message')),
    projectDetails: Yup.string(),
    captcha: Yup.string().required(t('Al_Saif_form_captcha_required_error_message')),
  });
}


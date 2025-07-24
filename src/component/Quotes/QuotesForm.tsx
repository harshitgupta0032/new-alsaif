'use client';

import React, { useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import { FaPaperPlane } from 'react-icons/fa';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import {
  FormValues,
  initialValues,
  getValidationSchema,
} from '@/component/schema/quotesFormSchema';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';



const QuoteForm = () => {

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const { i18n, t } = useTranslation('common');
  const isRTL = i18n.language === 'ar';

  const onSubmit = async (
    values: FormValues,
    actions: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
      setFieldError: (field: string, message: string) => void;
      setTouched: (touched: { [field: string]: boolean }) => void;
    }
  ) => {
    if (!captchaToken) {
      actions.setFieldError('captcha', 'Please complete the CAPTCHA');
      actions.setSubmitting(false);
      return;
    }

    console.log('Form submitted:', values, 'CAPTCHA token:', captchaToken);
    actions.setSubmitting(false);
    actions.resetForm();
    recaptchaRef.current?.reset();
    setCaptchaToken(null);
  };
  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={getValidationSchema(t)}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue, setFieldError, values, errors, touched }) => (
        <Form className="bg-inherit grid grid-cols-1 px-3 md:px-6 py-2 gap-x-5 md:grid-cols-2 text-black placeholder:text-black/80 ">
          <Input
            label={t('start_your_project_with_Al_Saif_form_name')}
            id="name"
            type="text"
            placeholder={t('start_your_project_with_Al_Saif_form_name_placeholder')}
            onChange={(e) => setFieldValue('name', e.target.value)}
            value={values.name}
            error={errors.name}
            touched={touched.name}
            className="w-full text-xs 2xl:text-[17px] py-[6px] 2xl:py-3"
            />
          <Input
            label={t('start_your_project_with_Al_Saif_form_company_name')}
            id="companyName"
            type="text"
            placeholder={t('start_your_project_with_Al_Saif_form_company_name_placeholder')}
            onChange={(e) => setFieldValue('companyName', e.target.value)}
            value={values.companyName}
            error={errors.companyName}
            touched={touched.companyName}
            className="w-full text-xs 2xl:text-[17px] py-[6px] 2xl:py-3"
            />
          <Input
            label={t('start_your_project_with_Al_Saif_form_email')}
            id="email"
            type="email"
            placeholder={t('start_your_project_with_Al_Saif_form_email_placeholder')}
            onChange={(e) => setFieldValue('email', e.target.value)}
            value={values.email}
            error={errors.email}
            touched={touched.email}
            className="w-full text-xs 2xl:text-[17px] py-[6px] 2xl:py-3"
            />

          <Input
            label={t('start_your_project_with_Al_Saif_form_phone')}
            id="phoneNumber"
            type="tel"
            placeholder={t('start_your_project_with_Al_Saif_form_phone_placeholder')}
            onChange={(e) => setFieldValue('phoneNumber', e.target.value)}
            value={values.phoneNumber}
            error={errors.phoneNumber}
            touched={touched.phoneNumber}
            className="w-full text-xs 2xl:text-[17px] py-[6px] 2xl:py-3"
            />

          {/* Project Details */}
          <div className="col-span-1 md:col-span-2">
            <Textarea
              label={t('start_your_project_with_Al_Saif_form_project_details')}
              id="projectDetails"
              rows={4}
              placeholder={t('start_your_project_with_Al_Saif_form_project_details_placeholder')}
              onChange={(e) => setFieldValue('projectDetails', e.target.value)}
              value={values.projectDetails || ''}
              error={errors.projectDetails}
              touched={touched.projectDetails}
              className="w-full text-xs 2xl:text-[17px] px-3 py-2 2xl:py-3 min-h-[130px] 2xl:min-h-[150px]"
            />
          </div>
          <div className="md:col-span-2 h-[107px] mt-2 lg:mt-5 overflow-hidden w-full relative ">
            <div className={`transform ${isRTL ? 'origin-top-right scale-78 sm:scale-84 lg:scale-116 2xl:scale-132  ': 'origin-top-left scale-78 sm:scale-84 lg:scale-116 2xl:scale-132 ' } w-full`}>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={(token) => {
                  setCaptchaToken(token);
                  setFieldValue('captcha', token);
                  setFieldError('captcha', '');
                }}
                onExpired={() => {
                  setCaptchaToken(null);
                  setFieldValue('captcha', '');
                  setFieldError('captcha', t('start_your_project_with_Al_Saif_form_captcha_expired_error_message'));
                }}
              />
            </div>
            {errors.captcha && (
              <p className="text-red-500 text-[13px] ps-1 absolute top-14 md:top-17 lg:top-23">{errors.captcha}</p>
            )}
          </div>


          {/* Submit */}
          <div className="text-center col-span-1 md:col-span-2 lg:mt-5">
            <Button
              type="submit"
              disabled={isSubmitting || !captchaToken}
              className="inline-flex items-center cursor-pointer gap-2 text-sm lg:text-lg text-white 2xl:text-xl font-semibold md:px-6 py-2 2xl:py-3 2xl:my-2 rounded-full shadow transition duration-300 ease-in-out disabled:opacity-50"
            >
              <FaPaperPlane />
              {t('start_your_project_with_Al_Saif_form_submit_button')}
            </Button>

            <p className="mt-3 text-xs 2xl:text-[17px] text-gray-400">{t('start_your_project_with_Al_Saif_form_response_time')}</p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default QuoteForm;

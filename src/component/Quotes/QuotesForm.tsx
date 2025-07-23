'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import { FaPaperPlane } from 'react-icons/fa';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import {
  FormValues,
  initialValues,
  validationSchema,
} from '@/schema/quotesFormSchema';
import ReCAPTCHA from 'react-google-recaptcha';



const QuoteForm = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

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
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue, setFieldError, values, errors, touched }) => (
        <Form className="bg-gray-100 grid grid-cols-1 gap-x-5 md:grid-cols-2 text-black placeholder:text-black/80 px-3 md:px-6 py-6 rounded-xl shadow-lg w-11/12 md:w-5/6 mx-auto">
          <Input
            label="Name"
            id="name"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setFieldValue('name', e.target.value)}
            value={values.name}
            error={errors.name}
            touched={touched.name}
            className="w-full text-xs 2xl:text-[17px] py-[6px] 2xl:py-3"
          />
          <Input
            label="Company Name"
            id="companyName"
            type="text"
            placeholder="Enter your company name"
            onChange={(e) => setFieldValue('companyName', e.target.value)}
            value={values.companyName}
            error={errors.companyName}
            touched={touched.companyName}
            className="w-full text-xs 2xl:text-[17px] py-[6px] 2xl:py-3"
          />
          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setFieldValue('email', e.target.value)}
            value={values.email}
            error={errors.email}
            touched={touched.email}
            className="w-full text-xs 2xl:text-[17px] py-[6px] 2xl:py-3"
          />
         
          <Input
            label="Phone Number"
            id="phoneNumber"
            type="tel"
            placeholder="Enter your phone number"
            onChange={(e) => setFieldValue('phoneNumber', e.target.value)}
            value={values.phoneNumber}
            error={errors.phoneNumber}
            touched={touched.phoneNumber}
            className="w-full text-xs 2xl:text-[17px] py-[6px] 2xl:py-3"
          />

          {/* Project Details */}
          <div className="col-span-1 md:col-span-2">
            <Textarea
              label="Project Details (optional)"
              id="projectDetails"
              rows={4}
              placeholder="Tell us more about your project..."
              onChange={(e) => setFieldValue('projectDetails', e.target.value)}
              value={values.projectDetails || ''}
              error={errors.projectDetails}
              touched={touched.projectDetails}
              className="w-full text-xs 2xl:text-[17px] px-3 py-2 2xl:py-3 min-h-[130px] 2xl:min-h-[150px]"
            />
          </div>
          <div className="md:col-span-2 h-[107px] mt-2 lg:mt-5 overflow-hidden w-full relative ">
            <div className='transform scale-70 sm:scale-84 lg:scale-116 2xl:scale-132 origin-top-left w-full'>
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
                  setFieldError('captcha', 'CAPTCHA expired, please try again');
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
              Submit Quote Request
            </Button>

            <p className="mt-3 text-xs 2xl:text-[17px] text-gray-400">* Required fields. we will response within 15 minutes</p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default QuoteForm;

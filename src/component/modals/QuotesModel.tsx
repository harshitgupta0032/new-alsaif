
// Fix for missing types for react-simple-captcha
declare module 'react-simple-captcha';

import { Formik, Form } from 'formik';
import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { FiRefreshCw } from 'react-icons/fi';
import Modal from 'react-modal';
import { loadCaptchaEnginge, validateCaptcha, LoadCanvasTemplate } from 'react-simple-captcha';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import toast from 'react-hot-toast';
import { contactInitialValues, contactValidationSchema, QuotesModelProps } from '@/schema/contactUsSchema';



const QuotesModel = ({ isOpen, onRequestClose }: QuotesModelProps) => {

  const handleAfterOpen = () => {
    setTimeout(() => {
      loadCaptchaEnginge(6);
    }, 0);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onAfterOpen={handleAfterOpen}
      contentLabel="Quotes Model"
      bodyOpenClassName="body-no-scroll"
      className="max-w-lg mx-auto px-6 pb-4 pt-2 w-[400px] bg-gray-200 rounded-lg shadow-lg z-[110]"
      overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-[100]"
      ariaHideApp={false}
    >
      <div className="flex flex-col justify-between items-center">
        <div className="flex items-start justify-end w-full">
          <button
            onClick={onRequestClose}
            className="cursor-pointer text-black/90 hover:bg-gray-200 rounded-full transition"
          >
            <IoClose className="size-7" />
          </button>
        </div>

        <div className="w-full">
          <h2 className="text-2xl text-black font-bold text-center mb-2">Contact Us</h2>
          <Formik
            initialValues={contactInitialValues}
            validationSchema={contactValidationSchema}
            onSubmit={(values, actions) => {
              if (!validateCaptcha(values.captchaInput)) {
                actions.setFieldError('captchaInput', 'CAPTCHA did not match. Try again.');
                loadCaptchaEnginge(6);
                actions.setSubmitting(false);
                return;
              }

              console.log('Contact form submitted:', values);
              toast.success('Form submitted successfully!');
              actions.resetForm();
              loadCaptchaEnginge(6);
              actions.setSubmitting(false);
              onRequestClose(); 
            }}
          >
            {({ isSubmitting, setFieldValue, values, errors, touched }) => (
              <Form className="flex flex-col gap-[2px]">
                <Input
                  name="fullName"
                  type="text"
                  placeholder="Full Name*"
                  onChange={(e) => setFieldValue('fullName', e.target.value)}
                  value={values.fullName}
                  error={errors.fullName}
                  touched={touched.fullName}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email*"
                  onChange={(e) => setFieldValue('email', e.target.value)}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                />
                <Input
                  label=''
                  name="phone"
                  type="text"
                  placeholder="Phone*"
                  onChange={(e) => setFieldValue('phone', e.target.value)}
                  value={values.phone}
                  error={errors.phone}
                  touched={touched.phone}
                />
                <div className=''>
                  <Textarea
                    label=''
                    name="message"
                    placeholder="Message*"
                    rows={4}
                    onChange={(e) => setFieldValue('message', e.target.value)}
                    value={values.message}
                    error={errors.message}
                    touched={touched.message}
                  />
                </div>

                <div className="flex flex-col md:flex-row mt-2">
                  <div className="flex items-start ">
                    <div className='flex items-center justify-center py-[1px] px-[1px] overflow-hidden bg-white rounded-lg'>
                      <LoadCanvasTemplate reloadText=" " />
                    </div>
                    <button
                      type="button"
                      onClick={() => loadCaptchaEnginge(6)}
                      className="p-2 rounded-full cursor-pointer hover:bg-gray-300 transition"
                      aria-label="Reload CAPTCHA"
                    >
                      <FiRefreshCw className="size-4 text-gray-700" />
                    </button>
                  </div>
                  <div className="flex-1 mt-2 md:mt-0"> 
                    <Input
                      name="captchaInput"
                      type="text"
                      placeholder="Enter the CAPTCHA*"
                      onChange={(e) => setFieldValue('captchaInput', e.target.value)}
                      value={values.captchaInput}
                      error={errors.captchaInput}
                      touched={touched.captchaInput}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded mt-2"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default QuotesModel;

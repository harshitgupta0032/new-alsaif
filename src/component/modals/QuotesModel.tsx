

import { Formik, Form } from 'formik';
import React, { useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Modal from 'react-modal';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import toast from 'react-hot-toast';
import { contactInitialValues, contactValidationSchema, QuotesModelProps } from '@/schema/contactUsSchema';
import ReCAPTCHA from 'react-google-recaptcha';



const QuotesModel = ({ isOpen, onRequestClose }: QuotesModelProps) => {

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Quotes Model"
      bodyOpenClassName="body-no-scroll"
      className="max-w-lg mx-auto px-6 pb-4 pt-2 w-[300px] lg:w-[400px] 2xl:w-[450px] bg-gray-200 rounded-lg shadow-lg z-[110]"
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
              console.log('Contact form submitted:', values);
              toast.success('Form submitted successfully!');
              actions.resetForm();
              recaptchaRef.current?.reset(); 
              onRequestClose();
              actions.setSubmitting(false);
            }}
          >

            {({ isSubmitting, setFieldValue, setFieldError, values, errors, touched }) => (
              <Form className="flex flex-col gap-[4px]">
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

                <div className="col-span-2 h-[102px] mt-2 lg:mt-5 ">

                  {/* ReCAPTCHA container */}
                  <div className="transform scale-[0.83] lg:scale-[1.16] 2xl:scale-[1.32] origin-left">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                      onChange={(token) => {
                        setFieldValue('captcha', token);
                        setFieldError('captcha', '');
                      }}
                      onExpired={() => {
                        setFieldValue('captcha', '');
                        setFieldError('captcha', 'CAPTCHA expired, please try again');
                      }}
                    />
                  </div>

                  {/* Error message */}
                  {errors.captcha && touched.captcha && (
                    <p className="text-red-500 text-[13px] ps-2 mt-[2px] lg:mt-[7px]">
                      {errors.captcha}
                    </p>
                  )}
                </div>


                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded md:mt-2"
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
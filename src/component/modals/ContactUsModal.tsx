

import { Formik, Form, FormikHelpers } from 'formik';
import React, { useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import Modal from 'react-modal';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import toast from 'react-hot-toast';
import { ContactFormValues, contactInitialValues, contactUsValidationSchema, QuotesModelProps } from '@/component/schema/contactUsSchema';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import { ClipLoader } from 'react-spinners';
import SuccessMessage from '../common/SuccessMessage';



const ContactUsModal = ({ isOpen, onRequestClose }: QuotesModelProps) => {

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { t, i18n } = useTranslation('common');
  const [success, setSuccess] = React.useState(false);
  const [captchaToken, setCaptchaToken] = React.useState<string | null>(null);
  
  const isDir = i18n.language === 'ar';

  const onSubmit = async (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    if (!captchaToken) {
      actions.setFieldError('captcha', 'Complete the captcha')
      actions.setSubmitting(false);
      return;
    }

    await new Promise(() => setTimeout(() => {
      setSuccess(true)
    }, 4000));

    console.log('Contact form submitted:', values);
    toast.success('Form submitted successfully!');
    actions.resetForm();
    recaptchaRef.current?.reset();
    // onRequestClose();
    actions.setSubmitting(false);
  }

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (success) {
      timeoutId = setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timeoutId); // cleanup only when `success` changes or component unmounts
    };
  }, [success]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Us"
      bodyOpenClassName="body-no-scroll"
      className="max-w-lg mx-auto px-6 pb-4 pt-2 w-[300px] lg:w-[400px] 2xl:w-[450px] bg-gray-200 rounded-lg shadow-lg z-[110]"
      overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-[100]"
      ariaHideApp={false}
    >
      {success ? (
        <SuccessMessage />
      ) : (
        <div className="">
          <div className="flex items-start justify-end w-full">
            <button
              onClick={onRequestClose}
              className="cursor-pointer text-black/90 hover:bg-gray-200 rounded-full transition"
            >
              <IoClose className="size-7" />
            </button>
          </div>
          <div className="w-full">
            <>
              <h2 className="text-2xl text-[#006fba] font-bold text-center mb-2">{t('Al_Saif_contact_us_title')}</h2>
              <Formik
                initialValues={contactInitialValues}
                validationSchema={(contactUsValidationSchema(t))}
                onSubmit={(values, action) => onSubmit(values, action)}
              >

                {({ isSubmitting, setFieldValue, setFieldError, values, errors, touched }) => (
                  <Form className="flex flex-col gap-[4px]">
                    <Input
                      name="name"
                      type="text"
                      placeholder={t('Al_Saif_form_name_placeholder')}
                      onChange={(e) => setFieldValue('name', e.target.value)}
                      value={values.name}
                      error={errors.name}
                      touched={touched.name}
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder={t('Al_Saif_form_email_placeholder')}
                      onChange={(e) => setFieldValue('email', e.target.value)}
                      value={values.email}
                      error={errors.email}
                      touched={touched.email}
                    />
                    <Input
                      label=''
                      name="phone"
                      type="text"
                      placeholder={t('Al_Saif_form_phone_placeholder')}
                      onChange={(e) => setFieldValue('phone', e.target.value)}
                      value={values.phone}
                      error={errors.phone}
                      touched={touched.phone}
                    />
                    <div className=''>
                      <Textarea
                        label=''
                        name="message"
                        placeholder={t('Al_Saif_form_message')}
                        rows={4}
                        onChange={(e) => setFieldValue('message', e.target.value)}
                        value={values.message}
                        error={errors.message}
                        touched={touched.message}
                      />
                    </div>

                    <div className="col-span-2 h-[102px] mt-2 lg:mt-5 ">

                      {/* ReCAPTCHA container */}
                      <div className={`transform   scale-[0.83] lg:scale-[1.16] 2xl:scale-[1.32] ${isDir ? 'origin-top-right' : 'origin-top-left'}`}>
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                          onChange={(token) => {
                            setFieldValue('captcha', token);
                            setCaptchaToken(token)
                            setFieldError('captcha', '');
                          }}
                          onExpired={() => {
                            setFieldValue('captcha', '');
                            setCaptchaToken(null)
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
                      className="w-full bg-[#006fba] hover:bg-blue-500 text-white font-bold py-2 rounded md:mt-2"
                    >
                      {isSubmitting ? (<ClipLoader color="#fff" size={24} />) : t('Al_Saif_form_submit_button')}
                    </Button>

                  </Form>
                )}
              </Formik>
            </>
          </div>
        </div>
      )
      }

    </Modal>
  );
};

export default ContactUsModal;
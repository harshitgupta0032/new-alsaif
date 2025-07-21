
import React from 'react';
import { Formik, Form } from 'formik';
import { FaPaperPlane } from 'react-icons/fa';
import { FormValues, initialValues, validationSchema } from '@/schema/quotesFormSchema';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';

const QuoteForm = () => {
  const onSubmit = (values: FormValues, actions: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }) => {
    console.log('Form submitted:', values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik<FormValues> initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting, setFieldValue, values, errors, touched }) => (
        <Form className="bg-gray-200 grid grid-cols-1 gap-y-0 gap-x-5 md:gap-y-0 md:grid-cols-2 text-black placeholder:text-black/80 px-6 py-6 rounded-xl shadow-lg w-full lg:w-[600px] 2xl:w-[700px] mx-auto">
          {/* Name */}
          <div className=''>
            <Input
              label='Name'
              id="name"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setFieldValue('name', e.target.value)}
              value={values.name}
              error={errors.name}
              touched={touched.name}
              className="w-full text-xs 2xl:text-[17px] py-[6px] 2xl:py-3"
            />
          </div>

          {/* Company Name */}
          <div className=''>
            <Input
              label='Company Name'
              id="companyName"
              type="text"
              placeholder="Enter your company name"
              onChange={(e) => setFieldValue('companyName', e.target.value)}
              value={values.companyName}
              error={errors.companyName}
              touched={touched.companyName}
              className="w-full text-xs 2xl:text-[17px] py-[6px] 2xl:py-3"
            />
          </div>

          {/* Email */}
          <div className=''>
            <Input
              id="email"
              label='Email'
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setFieldValue('email', e.target.value)}
              value={values.email}
              error={errors.email}
              touched={touched.email}
              className="w-full text-xs 2xl:text-[17px] py-[6px] 2xl:py-3"
            />
          </div>

          {/* Phone Number */}
          <div className=''>
            <Input
              id="phoneNumber"
              label='Phone Number'
              type="tel"
              placeholder="Enter your phone number"
              onChange={(e) => setFieldValue('phoneNumber', e.target.value)}
              value={values.phoneNumber}
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
              className="w-full text-xs 2xl:text-[17px] py-[6px] 2xl:py-3"
            />
          </div>

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

          {/* Submit Button */}
          <div className="text-center col-span-1 md:col-span-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center cursor-pointer gap-2 text-white text-[15px] 2xl:text-xl font-semibold px-6 py-2 2xl:py-3 2xl:my-2 rounded-full shadow transition duration-300 ease-in-out disabled:opacity-50"
            >
              <FaPaperPlane />
              Submit Quote Request
            </Button>
            <p className="mt-3 text-xs 2xl:text-[17px] text-gray-600">* Required fields</p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default QuoteForm;

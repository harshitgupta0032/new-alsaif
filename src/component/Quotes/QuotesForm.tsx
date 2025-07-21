
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaPaperPlane } from 'react-icons/fa';
import { FormValues, initialValues, serviceOptions, validationSchema } from '@/schema/quotesFormSchema';
import Button from '../common/Button';

const QuoteForm = () => {
  const onSubmit = (values: FormValues, actions: { setSubmitting: (isSubmitting: boolean) => void }) => {
    console.log('Form submitted:', values);
    actions.setSubmitting(false);
  };

  return (
    <Formik<FormValues> initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form className="bg-white grid  grid-cols-1 gap-y-3  gap-x-5 md:gap-y-0 md:grid-cols-2 text-black placeholder:text-black placeholder:text-xs px-6 py-6  mb-2 md:mb-5 rounded-xl shadow-lg w-full max-w-xl mx-auto">
          <div className=' md:h-[72px] 2xl:h-[105px]'>
            <label htmlFor="fullName" className="block text-sm 2xl:text-lg mb-[1px]">Full Name 
               <span className="text-red-500">*</span>
              </label>
            <Field
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 px-3 text-xs 2xl:text-[17px] py-[6px] 2xl:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs 2xl:text-[17px] mt-[2px]" />
          </div>

          <div className=' md:h-[72px] 2xl:h-[105px]'>
            <label htmlFor="mobileNumber" className="block text-sm 2xl:text-lg mb-[1px]">Mobile Number 
              <span className="text-red-500">*</span>
            </label>
            <Field
              name="mobileNumber"
              type="tel"
              placeholder="Your mobile number"
              className="w-full border border-gray-300 text-xs 2xl:text-[17px] px-3 py-[6px] 2xl:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ErrorMessage name="mobileNumber" component="p" className="text-red-500 text-xs 2xl:text-[17px]  mt-[2px]" />
          </div>

          <div className=' md:h-[72px] 2xl:h-[105px]'>
            <label htmlFor="location" className="block text-sm 2xl:text-lg mb-[1px]">Location 
               <span className="text-red-500">*</span>
            </label>
            <Field
              name="location"
              type="text"
              placeholder="Pickup/Delivery location"
              className="w-full border border-gray-300 text-xs 2xl:text-[17px] px-3 py-[6px] 2xl:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ErrorMessage name="location" component="div" className="text-red-500 text-xs 2xl:text-[17px]  mt-[2px]" />
          </div>

          <div className="md:h-[72px] 2xl:h-[105px]">
            <label htmlFor="serviceRequired" className="block text-sm 2xl:text-lg mb-[1px]">Service Required 
              <span className="text-red-500">*</span>
            </label>
            <Field
              as="select"
              name="serviceRequired"
              className="w-full border border-gray-300 text-xs 2xl:text-[17px] px-3 py-[6px] 2xl:py-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </Field>
            <ErrorMessage name="serviceRequired" component="div" className="text-red-500 text-xs 2xl:text-[17px] mt-[2px]" />
          </div>

          <div className=" min-h-[130px] 2xl:h-[210px] col-span-1 md:col-span-2">
            <label htmlFor="additionalDetails" className="block text-sm 2xl:text-lg mb-[1px]">Additional Details 
              <span className="text-red-500">*</span>
            </label>
            <Field
              as="textarea"
              name="additionalDetails"
              rows={4}
              placeholder="Tell us more about your requirements..."
              className="w-full border border-gray-300 text-xs 2xl:text-[17px] px-3 py-2 2xl:py-3 rounded-md resize-none min-h-[130px] 2xl:min-h-[150px] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <ErrorMessage name="additionalDetails" component="div" className="text-red-500 text-xs 2xl:text-[17px]  mt-[2px]" />
          </div>

          <div className="text-center col-span-1 md:col-span-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center cursor-pointer gap-2  text-white 2xl:text-xl font-semibold px-6 py-2 2xl:py-3  2xl:my-2 rounded-full shadow transition duration-300 ease-in-out disabled:opacity-50"
            >
              <FaPaperPlane />
              Get My Quote Now
            </Button>
            <p className="mt-3 text-xs 2xl:text-[17px] text-gray-600">* Required fields. We&apos;ll respond within 15 minutes.</p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default QuoteForm;

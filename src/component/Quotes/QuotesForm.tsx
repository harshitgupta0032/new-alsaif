import React from "react";
declare module "react-simple-captcha";
import {
  loadCaptchaEnginge,
  validateCaptcha,
  LoadCanvasTemplate,
} from "react-simple-captcha";
import { Formik, Form } from "formik";
import { FaPaperPlane } from "react-icons/fa";
import {
  FormValues,
  initialValues,
  validationSchema,
} from "@/schema/quotesFormSchema";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { FiRefreshCw } from "react-icons/fi";

const QuoteForm = () => {
  const onSubmit = (
    values: FormValues,
    actions: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    console.log("Form submitted:", values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  const handleAfterOpen = () => {
    setTimeout(() => {
      loadCaptchaEnginge(6);
    }, 0);
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue, values, errors, touched }) => (
        <Form className="bg-gray-100 grid grid-cols-1 gap-4 md:grid-cols-2 text-black placeholder:text-black/80 px-6 py-6 rounded-xl shadow-lg lg:min-h-[600px] w-full lg:w-[900px] mx-auto">
          <div className="">
            <Input
              label="Name"
              id="name"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setFieldValue("name", e.target.value)}
              value={values.name}
              error={errors.name}
              touched={touched.name}
              className="w-full 2xl:text-[17px] p 2xl:py-3"
            />
          </div>

          <div className="">
            <Input
              label="Company Name"
              id="companyName"
              type="text"
              placeholder="Enter your company name"
              onChange={(e) => setFieldValue("companyName", e.target.value)}
              value={values.companyName}
              error={errors.companyName}
              touched={touched.companyName}
              className="w-full  2xl:text-[17px] p 2xl:py-3"
            />
          </div>

          <div className="">
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setFieldValue("email", e.target.value)}
              value={values.email}
              error={errors.email}
              touched={touched.email}
              className="w-full  2xl:text-[17px] p 2xl:py-3"
            />
          </div>

          <div className="">
            <Input
              id="phoneNumber"
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              onChange={(e) => setFieldValue("phoneNumber", e.target.value)}
              value={values.phoneNumber}
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
              className="w-full  2xl:text-[17px] p 2xl:py-3"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <Textarea
              label="Project Details (optional)"
              id="projectDetails"
              rows={4}
              placeholder="Tell us more about your project..."
              onChange={(e) => setFieldValue("projectDetails", e.target.value)}
              value={values.projectDetails || ""}
              error={errors.projectDetails}
              touched={touched.projectDetails}
              className="w-full  2xl:text-[17px] px-3 py-2 2xl:py-3 min-h-[130px] 2xl:min-h-[150px]"
            />
          </div>

          {/* <div className="flex flex-col md:flex-row mt-2">
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
                                placeholder="Enter CAPTCHA*"
                                onChange={(e) => setFieldValue('captchaInput', e.target.value)}
                                // value={values.captchaInput}
                                // error={errors.captchaInput}
                                // touched={touched.captchaInput}
                                className='h-[40px]'
                              />
                            </div>
                          </div> */}

          <div className="text-center col-span-1 md:col-span-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center cursor-pointer gap-2 text-white text-[15px] 2xl:text-xl font-semibold px-6 py-2 2xl:py-3 2xl:my-2 rounded-full shadow transition duration-300 ease-in-out disabled:opacity-50"
            >
              <FaPaperPlane />
              Submit Quote Request
            </Button>
            <p className="mt-3  2xl:text-[17px] text-gray-600">
              * Required fields
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default QuoteForm;

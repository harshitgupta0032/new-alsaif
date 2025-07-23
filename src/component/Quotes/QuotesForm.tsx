import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { FaPaperPlane } from "react-icons/fa";
import Button from "../common/Button";
import { FormikHelpers } from "formik";
type QuoteFormValues = {
  name: string;
  companyname: string;
  email: string;
  number: string;
  details: string;
};

const QuoteForm = () => {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    companyname: Yup.string().required("Company Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string()
      .matches(/^\d{13}$/, "Phone number must be exactly 13 digits")
      .required("Phone number is required"),
    details: Yup.string(),
  });

  const handleSubmit = (
    values: QuoteFormValues,
    { resetForm }: FormikHelpers<QuoteFormValues>
  ) => {
    if (!captchaVerified) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    console.log("Submitted Data:", values);
    alert("Quote request submitted successfully!");
    resetForm();
    recaptchaRef?.current?.reset();
    setCaptchaVerified(false);
  };

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    throw new Error("Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY in environment");
  }

  return (
    <div className="bg-gray-100 text-black p-6 flex flex-col rounded-xl shadow-lg lg:min-h-[600px] w-full">
      <Formik
        initialValues={{
          name: "",
          companyname: "",
          email: "",
          number: "",
          details: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="text-gray-500 p-2">
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="border p-3 py-6 placeholder-gray-400 bg-white/80 rounded-lg text-sm border-gray-300 w-full h-8"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm px-2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="companyname" className="text-gray-500 p-2">
                  Company Name
                </label>
                <Field
                  name="companyname"
                  type="text"
                  placeholder="Enter Your Company Name"
                  className="border p-3 py-6 placeholder-gray-400 bg-white/80 rounded-lg text-sm border-gray-300 w-full h-8"
                />
                <ErrorMessage
                  name="companyname"
                  component="div"
                  className="text-red-500 text-sm px-2"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="text-gray-500 p-2">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="border p-3 py-6 placeholder-gray-400 bg-white/80 rounded-lg text-sm border-gray-300 w-full h-8"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm px-2"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="number" className="text-gray-500 p-2">
                  Phone Number
                </label>
                <Field
                  name="number"
                  type="number"
                  placeholder="Enter Your Phone Number"
                  className="border p-3 py-6 placeholder-gray-400 bg-white/80 rounded-lg text-sm border-gray-300 w-full h-8"
                />
                <ErrorMessage
                  name="number"
                  component="div"
                  className="text-red-500 text-sm px-2"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="details" className="text-gray-500 p-2">
                Project Details (optional)
              </label>
              <Field
                as="textarea"
                name="details"
                placeholder="Tell us more about your project..."
                className="border p-3 py-6 placeholder-gray-400 bg-white/80 rounded-lg border-gray-300 w-full min-h-[150px]"
              />
            </div>

            <div className="flex justify-between gap-3 flex-wrap items-center">
              <ReCAPTCHA
                sitekey={siteKey}
                ref={recaptchaRef}
                onChange={(token) => setCaptchaVerified(!!token)}
                onExpired={() => setCaptchaVerified(false)}
              />
              <ul className="flex gap-2 flex-col">
                <li className="cursor-pointer text-gray-600 px-3">
                  Email: social.media@alsaifexpress.com
                </li>
                <li className="cursor-pointer text-gray-600 px-3">
                  Tel: +966596003333
                </li>
              </ul>
            </div>

            <div className="text-center mt-2 col-span-1 md:col-span-2">
              <Button
                type="submit"
                // disabled={!captchaVerified}
                className="inline-flex items-center cursor-pointer gap-2 text-white text-[15px] 2xl:text-xl font-semibold px-6 py-2 2xl:py-3 2xl:my-2 rounded-full shadow transition duration-300 ease-in-out disabled:opacity-50"
              >
                <FaPaperPlane />
                Submit Quote Request
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QuoteForm;

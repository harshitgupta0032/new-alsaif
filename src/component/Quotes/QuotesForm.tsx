import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import Button from "../common/Button";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";
import { useMutation } from "@tanstack/react-query";
import { postQuatesQn, quotesPaloadProps } from "@/querry/ContactUs";
import toast from "react-hot-toast";
import ThankYouGreet from "../ThankYouGreet";
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
  const { t } = useTranslation();
  const resetFormRef = useRef<(() => void) | null>(null);
  const [greetMessage, setGreetMessage] = useState<boolean>(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    companyname: Yup.string().required("Company Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string()
      .matches(/^\d{13}$/, "Phone number must be exactly 13 digits")
      .required("Phone number is required"),
    details: Yup.string(),
  });

  const postContactFn = useMutation({
    mutationFn: (quotesPayload: quotesPaloadProps) =>
      postQuatesQn(quotesPayload),
    onSuccess: (data) => {
      toast.success(data.message);
      recaptchaRef?.current?.reset();
      resetFormRef.current?.();
      setCaptchaVerified(false);
      setGreetMessage(true);
    },
    onError: (error: Error & { response?: { data: { message: string } } }) => {
      const errorMessage =
        error?.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    },
  });

  const handleSubmit = (
    values: QuoteFormValues,
    { resetForm }: FormikHelpers<QuoteFormValues>
  ) => {
    if (!captchaVerified) {
      toast("Please verify you are not a robot");
      return;
    }
    resetFormRef.current = resetForm;
    postContactFn.mutate({
      name: values.name,
      company_name: values.companyname,
      phone: String(values.number),
      email: values.email,
      project_details: values.details,
    });
  };

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  useEffect(() => {
    if (greetMessage) {
      const timer = setTimeout(() => setGreetMessage(false), 10000); 
      return () => clearTimeout(timer); 
    }
  }, [greetMessage]);

  if (!siteKey) {
    throw new Error("Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY in environment");
  }

  return (
    <div className="bg-gray-100 text-black p-6 flex flex-col lg:flex-row lg:justify-between lg:w-[1000px] lg:gap-3 rounded-xl shadow-lg lg:min-h-[600px] w-full">
      {greetMessage ? (
        <ThankYouGreet />
      ) : (
        <>
          <div className="lg:w-[30%]  w-full pt-5 lg:px-2   h-full">
            <div>
              <h1 className="text-2xl font-semibold">{t("Contact Us")}</h1>
              <div className="w-20 h-2 bg-[#006FBA]"></div>
              <p className="mt-4 text-gray-500">
                {t("We're open for any suggestion or just to have a chat.")}
              </p>
            </div>
            <div className="flex flex-col gap-5 pt-6">
              <div className="flex gap-3 flex-col xl:flex-row xl:items-center">
                <div className="border h-fit w-fit rounded-full border-[#006FBA] p-3">
                  <IoLocationSharp className="text-[#006FBA]" />
                </div>
                <div className="">
                  <p className="text-gray-500">
                    <strong className="text-[#006FBA] pr-2">
                      {t("Address")} :
                    </strong>
                    <span className="text-sm">
                      {t("Dammam, KSA: Al Khaldia Al Shamalia")}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex gap-3 flex-col xl:flex-row xl:items-center">
                <div className="border h-fit w-fit rounded-full border-[#006FBA]  p-3">
                  <FaPhoneAlt className="text-[#006FBA]" />
                </div>
                <div className="">
                  <p className="text-gray-500 ">
                    {" "}
                    <strong className="text-[#006FBA] pr-2">
                      {t("Phone")}:
                    </strong>{" "}
                    <span className="text-sm">+966596003333</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-3 flex-col xl:flex-row xl:items-center">
                <div className="border h-fit w-fit rounded-full border-[#006FBA]  p-3">
                  <BsFillSendFill className="text-[#006FBA]" />
                </div>
                <div className="">
                  <p className="text-gray-500">
                    <strong className="text-[#006FBA] pr-2">
                      {t("Email")}:
                    </strong>
                    <span className="text-sm">
                      social.media@alsaifexpress.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[60%] w-full flex flex-col">
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
                        {t("Name")}
                      </label>
                      <Field
                        name="name"
                        type="text"
                        placeholder={t("Enter Your Name")}
                        className="border p-3 py-6 placeholder-gray-400 bg-white/80 rounded-lg text-sm border-gray-300 w-full h-8"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm px-2"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="companyname"
                        className="text-gray-500 p-2"
                      >
                        {t("Company Name")}
                      </label>
                      <Field
                        name="companyname"
                        type="text"
                        placeholder={t("Enter Your Company Name")}
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
                        {t("Email")}
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder={t("Enter Your Email")}
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
                        {t("Phone")}
                      </label>
                      <Field
                        name="number"
                        type="number"
                        placeholder="+966596003333"
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
                      {t("Project Details")}
                    </label>
                    <Field
                      as="textarea"
                      name="details"
                      placeholder={t("Tell us more about your project...")}
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
                  </div>

                  <div className="text-center mt-2 col-span-1 md:col-span-2">
                    <Button
                      type="submit"
                      isLoading={postContactFn?.isPending}
                      className="inline-flex items-center cursor-pointer gap-2 text-white text-[15px] 2xl:text-xl font-semibold px-6 py-2 2xl:py-3 2xl:my-2 rounded-lg shadow transition duration-300 ease-in-out disabled:opacity-50"
                    >
                      {t("Submit")}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </>
      )}
    </div>
  );
};

export default QuoteForm;

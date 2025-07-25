import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "react-modal";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { QuotesModelProps } from "@/schema/contactUsSchema";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { contactPaloadProps, postContactQn } from "@/querry/ContactUs";
import ThankYouGreet from "../ThankYouGreet";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{13}$/, "Phone number must be exactly 13 digits"),
  message: yup.string().required("Message is required"),
});

const QuotesModel = ({ isOpen, onRequestClose }: QuotesModelProps) => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const { t } = useTranslation();
  const [greetMessage, setGreetMessage] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postContactFn = useMutation({
    mutationFn: (contactPaload: contactPaloadProps) =>
      postContactQn(contactPaload),
    onSuccess: (data) => {
      toast.success(data.message);
      reset();
      setGreetMessage(true);
    },
    onError: (error: Error & { response?: { data: { message: string } } }) => {
      const errorMessage =
        error?.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    },
  });

  const onSubmit = (data: FormData) => {
    if (!captchaToken) {
      toast("Please verify you are not a robot");
      return;
    }
    postContactFn.mutate({
      name: data.name,
      email: data.email,
      subject: "",
      message: data.message,
      phone: data.phone,
      type: "transport",
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
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Quotes Model"
      bodyOpenClassName="body-no-scroll"
      className="max-w-lg mx-auto px-6 pb-3 pt-5 relative w-[400px] bg-gray-200 rounded-lg shadow-lg z-[110]"
      overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-[100]"
      ariaHideApp={false}
    >
      <div className="absolute top-2 right-4 w-fit h-fit">
        <button
          onClick={onRequestClose}
          className="cursor-pointer text-black/90 hover:bg-gray-200 rounded-full transition"
        >
          <IoClose className="size-7" />
        </button>
      </div>
      {greetMessage ? (
        <div className="w-full flex justify-center items-center h-[530px]">
          <ThankYouGreet modal={true} />
        </div>
      ) : (
        <div className="w-full">
          <h2 className="text-2xl text-[#006fba] font-bold text-center mb-2">
            {t("Contact Us")}
          </h2>

          <form
            className="flex flex-col gap-4 mt-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col w-full">
              <input
                type="text"
                placeholder={t("Enter Your Name")}
                {...register("name")}
                className="border p-3 py-6 text-black placeholder-gray-400 bg-white/80 rounded-lg text-sm border-gray-300 w-full h-8"
              />
              {errors.name && (
                <span className="text-red-600 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col w-full">
              <input
                type="email"
                placeholder={t("Enter Your Email")}
                {...register("email")}
                className="border p-3 py-6 text-black placeholder-gray-400 bg-white/80 rounded-lg text-sm border-gray-300 w-full h-8"
              />
              {errors.email && (
                <span className="text-red-600 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col w-full">
              <input
                type="number"
                placeholder="+966596003333"
                {...register("phone")}
                className="border p-3 py-6 text-black placeholder-gray-400 bg-white/80 rounded-lg text-sm border-gray-300 w-full h-8"
              />
              {errors.phone && (
                <span className="text-red-600 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="flex flex-col w-full">
              <Textarea
                {...register("message")}
                name="message"
                className="rounded-lg"
                placeholder={t("Message")}
                rows={4}
              />
              {errors.message && (
                <span className="text-red-600 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className="mt-2">
              <ReCAPTCHA
                sitekey={siteKey}
                onChange={(token) => setCaptchaToken(token)}
                onExpired={() => setCaptchaToken(null)}
              />
            </div>

            <Button
              type="submit"
              isLoading={postContactFn?.isPending}
              className="w-full bg-[#006fba] hover:bg-blue-700 text-white font-bold py-2 rounded mt-2"
            >
              {t("Submit")}
            </Button>
          </form>
        </div>
      )}
    </Modal>
  );
};

export default QuotesModel;

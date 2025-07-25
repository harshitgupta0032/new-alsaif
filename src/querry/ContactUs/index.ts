import { AxiosError } from "axios";
import { apiClient } from "../api";

export interface contactPaloadProps {
  name: string;
  email: string;
  subject: string | null;
  message: string;
  phone: number | string;
  type: string;
}

export interface quotesPaloadProps {
  name: string;
  company_name: string;
  phone: string | number;
  email: string;
  project_details: string;
}

export const postContactQn = async (contactPayload: contactPaloadProps) => {
  try {
    const response = await apiClient.post(
      "form/submitcontactusform",
      contactPayload
    );
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};
export const postQuatesQn = async (quotesPayload: quotesPaloadProps) => {
  try {
    const response = await apiClient.post("form/sendquotedata", quotesPayload);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};

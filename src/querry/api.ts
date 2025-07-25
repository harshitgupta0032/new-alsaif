import api from "axios";

export type ErrorResponse = {
  message?: string;
  data: {
    message: string;
  };
};

export const apiClient = api.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}api/v1`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
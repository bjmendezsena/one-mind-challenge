import { usersApi } from "./api";

const get = async <T extends Object>(url: string) => {
  const response = await usersApi.get<T>(url);
  return response.data as T;
};

export const http = {
  get,
};

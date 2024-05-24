import { AxiosResponse, AxiosError } from "axios";
import { STATUS_CODE } from "./constants";

export const requestSuccess = <T>(res: AxiosResponse<T>) => {
  if (STATUS_CODE["200_OK"] <= res.status && res.status < STATUS_CODE["300_MULTIPLE_CHOICES"]) {
    return res.data || (null as T);
  }
  return null;
};

export const requestError = (err: AxiosError | any) => {
  return err;
};

export const objectToQuery = (obj: object & Record<string, any>) => {
  const keys = Object.keys(obj);
  const query = keys
    .filter((k) => obj[k] !== undefined)
    .map((k) => {
      const value = obj[k];
      const v = typeof value === "boolean" ? +value : Array.isArray(value) ? value.join(",") : value;
      return `${k}=${encodeURIComponent(v)}`;
    })
    .join("&");

  return query;
};

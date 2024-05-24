import { AxiosResponse, AxiosError } from "axios";
export declare const requestSuccess: <T>(res: AxiosResponse<T>) => T | null;
export declare const requestError: (err: AxiosError | any) => any;
export declare const objectToQuery: (obj: object & Record<string, any>) => string;

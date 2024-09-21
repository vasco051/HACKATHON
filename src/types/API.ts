import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IMakeRequestParams extends AxiosRequestConfig {
  authToken?: boolean;
}

export type APIResponse<Type> = Promise<AxiosResponse<Type> | APICaughtErrors>;

export type TError = { [key: string]: string[] };

export type APIError = {
  errors: TError;
  status: number;
};

export type APIResponseWithErrors = {
  response: {
    data: APIError;
    status: number;
  };
};

export type APICaughtErrors = {
  status: number;
  errors?: TError;
};
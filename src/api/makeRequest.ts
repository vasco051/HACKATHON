import axios from 'axios';
import { APICaughtErrors, APIResponse, APIResponseWithErrors, IMakeRequestParams } from "../types/API.ts";

export const makeRequest = <Type>({
                                    url = '',
                                    method = 'GET',
                                    authToken = true,
                                    headers = {},
                                    params = {},
                                    data = {},
                                    responseType = 'json',
                                    signal,
                                  }: IMakeRequestParams): APIResponse<Type> => {
  url = `${import.meta.env.VITE_BACKEND_API_ENDPOINT + '/api/' + url}`;

  if (authToken) {
    const token = localStorage.getItem('auth_token');

    headers.Authorization = `Bearer ${token}`;
  }

  return axios
    .request<Type>({
      url,
      method,
      headers,
      params,
      data,
      responseType,
      signal,
    })
    .catch((error: APIResponseWithErrors) => {
      const responseErrors = error.response.data.errors;
      const status = error.response.status;

      const caughtErrors: APICaughtErrors = {
        status,
      };

      if (status !== 500) {
        caughtErrors.errors = responseErrors;
      } else {
        caughtErrors.errors = {
          error: ['Произошла ошибка сервера, попробуйте позже'],
        };
      }

      return caughtErrors;
    });
};

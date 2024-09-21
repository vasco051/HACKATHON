import { APIResponse } from '../API';
import {
  TFetchRegisterResponse,
  TFetchSignInResponse,
} from '../api/IAuthService';
import { TRegistration, TSignIn } from '../entities/TSignIn';

export interface IAuthStore {
  isAuth: boolean;
  isLoading: boolean;

  setLoading: (isLoading: boolean) => void;
  signIn: (user: TSignIn) => APIResponse<TFetchSignInResponse>;
  registration: (user: TRegistration) => APIResponse<TFetchRegisterResponse>;
}

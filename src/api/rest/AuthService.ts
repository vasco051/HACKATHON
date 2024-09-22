import { TRegistration, TSignIn } from '../../types/entities/TSignIn';
import { makeRequest } from '../makeRequest.ts';
import { TFetchProfileResponse, TFetchRegisterResponse, TFetchSignInResponse } from '../../types/api/IAuthService.ts';


class AuthService {
  signIn(user: TSignIn) {
    return makeRequest<TFetchSignInResponse>({
      url: `auth/sign-in`,
      method: 'post',
      data: user
    });
  }

  registration(user: TRegistration) {
    return makeRequest<TFetchRegisterResponse>({
      url: `auth/register`,
      method: 'post',
      data: user
    });
  }

  profile() {
    return makeRequest<TFetchProfileResponse>({
      url: `auth/profile`,
    });
  }
}

export default new AuthService();

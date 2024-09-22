import { TAccount } from '../entities/TAccount';


export type TFetchSignInResponse = {
  accessToken: string;
  profile: TAccount
}

export type TFetchRegisterResponse = {
  accessToken: string;
  profile: TAccount
}

export type TFetchProfileResponse = TAccount

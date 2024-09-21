import { TAccount } from '../entities/TAccount';


export interface IAccountStore {
  account: TAccount | null;
  setAccount: (account: TAccount | null) => void
}
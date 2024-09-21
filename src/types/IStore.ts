import { IAccountStore } from './store/IAccountStore';
import { IAuthStore } from './store/IAuthStore.ts';


export interface IStore {
  auth: IAuthStore;
  account: IAccountStore;
}

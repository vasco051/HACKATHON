import { IAccountStore } from './store/IAccountStore';
import { IAuthStore } from './store/IAuthStore.ts';
import { ICategoryStore } from './store/ICategoryStore';


export interface IStore {
  auth: IAuthStore;
  account: IAccountStore;
  category: ICategoryStore;
}

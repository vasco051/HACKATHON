import { IAccountStore } from './store/IAccountStore';
import { IAuthStore } from './store/IAuthStore.ts';
import { ICategoryStore } from './store/ICategoryStore';
import { IRatingStore } from './store/IRatingStore.ts';


export interface IStore {
  auth: IAuthStore;
  account: IAccountStore;
  category: ICategoryStore;
  rating: IRatingStore;
}

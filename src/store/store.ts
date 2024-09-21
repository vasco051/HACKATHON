import { makeAutoObservable } from 'mobx';
import { IAccountStore } from '../types/store/IAccountStore';
import { ICategoryStore } from '../types/store/ICategoryStore';
import { AccountStore } from './account';
import { AuthStore } from './auth';

import { IStore } from '../types/IStore.ts';
import { IAuthStore } from '../types/store/IAuthStore.ts';
import { CategoryStore } from './category';


class Store implements IStore {
  auth: IAuthStore;
  account: IAccountStore;
  category: ICategoryStore;

  constructor() {
    this.auth = new AuthStore(this);
    this.account = new AccountStore();
    this.category = new CategoryStore();
    makeAutoObservable(this);
  }
}

export default Store;

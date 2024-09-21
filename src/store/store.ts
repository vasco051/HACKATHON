import { makeAutoObservable } from 'mobx';
import { IAccountStore } from '../types/store/IAccountStore';
import { AccountStore } from './account';
import { AuthStore } from './auth';

import { IStore } from '../types/IStore.ts';
import { IAuthStore } from '../types/store/IAuthStore.ts';


class Store implements IStore {
  auth: IAuthStore;
  account: IAccountStore;

  constructor() {
    this.auth = new AuthStore(this);
    this.account = new AccountStore()
    makeAutoObservable(this);
  }
}

export default Store;

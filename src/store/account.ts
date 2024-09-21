import { makeAutoObservable } from 'mobx';
import { TAccount } from '../types/entities/TAccount';
import { IAccountStore } from '../types/store/IAccountStore';


export class AccountStore implements IAccountStore{
  account: TAccount | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAccount(account: TAccount | null) {
    this.account = account;
  }
}
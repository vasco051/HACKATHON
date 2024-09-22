import { makeAutoObservable } from 'mobx';
import AuthService from '../api/rest/AuthService';
import { TRegistration, TSignIn } from '../types/entities/TSignIn';
import { IStore } from '../types/IStore';
import { IAuthStore } from '../types/store/IAuthStore';


export class AuthStore implements IAuthStore {
  rootStore: IStore;
  isAuth: boolean = false;
  isLoading: boolean = false;

  constructor(rootStore: IStore) {
    this.rootStore = rootStore;
    this.checkAuth();
    makeAutoObservable(this);
  }

  setAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  async registration(user: TRegistration) {
    const response = await AuthService.registration(user);

    if ('data' in response) {
      const data = response.data;

      localStorage.setItem('auth_token', data.accessToken);
      this.rootStore.account.setAccount(data.profile);
      this.setAuth(true);
    }

    return response;
  }

  async signIn(user: TSignIn) {
    const response = await AuthService.signIn(user);

    if ('data' in response) {
      const data = response.data;

      localStorage.setItem('auth_token', data.accessToken);
      this.rootStore.account.setAccount(data.profile);
      this.setAuth(true);

      return response;
    }

    return response;
  }

  async checkAuth() {
    this.setLoading(true);
    const response = await AuthService.profile();

    if ('data' in response) {
      this.setAuth(true);
      this.rootStore.account.setAccount(response.data);
    } else {
      this.setAuth(false);
      this.rootStore.account.setAccount(null);
      localStorage.clear();
    }

    this.setLoading(false);
  }

  logout = () => {
    this.setAuth(false)
    this.rootStore.account.setAccount(null);
    localStorage.clear();
  }
}

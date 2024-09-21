import { makeAutoObservable } from 'mobx';

import { ICalculateStore } from '../types/store/ICalculateStore.ts';

export class CalculateStore implements ICalculateStore {
  _count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get count() {
    return this._count;
  }

  increment = () => {
    this._count = this._count + 1;
  };

  decrement = () => {
    this._count = this._count - 1;
  };
}

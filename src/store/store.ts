import { makeAutoObservable } from 'mobx';

import { CalculateStore } from "./calculateStore.ts";

import { IStore } from "../types/IStore.ts";
import { ICalculateStore } from "../types/store/ICalculateStore.ts";


class Store implements IStore {
  calculate: ICalculateStore

  constructor() {
    this.calculate = new CalculateStore()
    makeAutoObservable(this);
  }
}

export default Store;

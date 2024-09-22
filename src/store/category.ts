import { makeAutoObservable, observable, values } from 'mobx';
import CategoryService from '../api/rest/CategoryService';
import { TCategory } from '../types/entities/TCategory';
import { ICategoryStore } from '../types/store/ICategoryStore';


export class CategoryStore implements ICategoryStore {
  _categories = observable.map<number, TCategory>();
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get categories() {
    return values(this._categories);
  }

  setCategory(category: TCategory) {
    this._categories.set(category.id, category);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  async fetchCategories() {
    this.setIsLoading(true);
    this._categories.clear();

    const response = await CategoryService.fetchCategories();

    if ('data' in response) {
      response.data.categories.forEach(category => {
        this.setCategory(category);
      });
    }

    this.setIsLoading(false);
  }

  async fetchCategory(id: number | string) {
    this.setIsLoading(true);
    this._categories.clear();

    const response = await CategoryService.fetchCategory(id);

    this.setIsLoading(false);
  }
}
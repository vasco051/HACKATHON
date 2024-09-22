import { makeAutoObservable, observable, values } from 'mobx';
import CategoryService from '../api/rest/CategoryService';
import { TCategory } from '../types/entities/TCategory';
import { ICategoryStore } from '../types/store/ICategoryStore';

export class CategoryStore implements ICategoryStore {
  _categories = observable.map<number, TCategory>();
  _currentCategory: TCategory = {} as TCategory;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get categories() {
    return values(this._categories);
  }

  get currentCategory() {
    return this._currentCategory;
  }

  setCategory(category: TCategory) {
    this._categories.set(category.id, category);
  }

  setCurrentCategory(category: TCategory) {
    this._currentCategory = category;
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  async fetchCategories() {
    this.setIsLoading(true);
    this._categories.clear();

    const response = await CategoryService.fetchCategories();

    if ('data' in response) {
      response.data.categories.forEach((category) => {
        this.setCategory(category);
      });
    }

    this.setIsLoading(false);
  }

  async fetchCategory(id: number | string) {
    this.setIsLoading(true);
    this._categories.clear();

    const response = await CategoryService.fetchCategory(id);

    if ('data' in response) {
      this.setCurrentCategory(response.data);
    }

    this.setIsLoading(false);
  }
}

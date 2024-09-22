import { makeAutoObservable, observable, values } from 'mobx';
import CategoryService from '../api/rest/CategoryService';
import { TCategory } from '../types/entities/TCategory';
import { ICategoryStore } from '../types/store/ICategoryStore';

export class CategoryStore implements ICategoryStore {
  _categories = observable.map<number, TCategory>();
  _backgroundImage: string = '';
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get categories() {
    return values(this._categories);
  }

  get background(): string {
    return this._backgroundImage;
  }

  setCategory(category: TCategory) {
    this._categories.set(category.id, category);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setBackground(newBackground: string) {
    this._backgroundImage = newBackground;
  }

  async fetchCategories() {
    this.setIsLoading(true);
    this._categories.clear();

    const response = await CategoryService.fetchCategories();

    if ('data' in response) {
      this.setBackground(response.data.categories[0].photoUrl);
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

    this.setIsLoading(false);
  }
}

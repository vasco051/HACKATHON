import { makeAutoObservable, observable, values } from 'mobx';

import AdminCategoryService from '../../api/rest/admin/AdminCategoryService.ts';

import { IAdminCategoryStore } from '../../types/store/admin/IAdminCategoryStore.ts';
import { TAdminCategory, TAdminCategoryCreate } from '../../types/entities/admin/TAdminCategory.ts';


export class AdminCategoryStore implements IAdminCategoryStore {
  _categories = observable.map<number, TAdminCategory>();
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get categories() {
    return values(this._categories);
  }

  setCategory(category: TAdminCategory) {
    this._categories.set(category.id, category);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  async fetchCategories() {
    this.setIsLoading(true);
    this._categories.clear();

    const response = await AdminCategoryService.fetchCategories();

    if ('data' in response) {
      response.data.categories.forEach(category => {
        this.setCategory(category);
      });
    }

    this.setIsLoading(false);
  }

  async createCategory(category: TAdminCategoryCreate) {
    this.setIsLoading(true);

    const response = await AdminCategoryService.createCategory(category);

    if ('data' in response) {
      this.setCategory(response.data);
    }

    this.setIsLoading(false);
    return response;
  }


  deleteCategory = async (id: number | string) => {
    const response = await AdminCategoryService.deleteCategory(id);

    if (response.status === 204) {
      this._categories.delete(+id);
    }
  };
}
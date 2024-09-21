import { TCategory } from '../entities/TCategory';


export interface ICategoryStore {
  isLoading: boolean;
  categories: readonly TCategory[];

  fetchCategories: () => void;
}
import { TCategory } from '../entities/TCategory';

export interface ICategoryStore {
  isLoading: boolean;
  categories: readonly TCategory[];
  currentCategory: TCategory;

  setCategory: (category: TCategory) => void;

  fetchCategories: () => void;
  fetchCategory: (id: number | string) => void;
}

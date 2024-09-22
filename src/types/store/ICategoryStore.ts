import { TCategory } from '../entities/TCategory';

export interface ICategoryStore {
  isLoading: boolean;
  categories: readonly TCategory[];
  background: string;

  setCategory: (category: TCategory) => void;

  fetchCategories: () => void;
  fetchCategory: (id: number | string) => void;
}

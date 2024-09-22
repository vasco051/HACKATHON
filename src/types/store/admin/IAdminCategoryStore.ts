import { TAdminCategory } from "../../entities/admin/TAdminCategory.ts";

export interface IAdminCategoryStore {
  isLoading: boolean;
  categories: readonly TAdminCategory[];

  setCategory: (category: TAdminCategory) => void

  fetchCategories: () => void;
  deleteCategory: (id: number | string) => void;
}
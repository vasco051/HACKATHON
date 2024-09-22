import { APIResponse } from '../../API';
import { TFetchAdminCategoryCreateResponse } from '../../api/admin/IAdminCategoryService';
import { TAdminCategory, TAdminCategoryCreate } from '../../entities/admin/TAdminCategory.ts';


export interface IAdminCategoryStore {
  isLoading: boolean;
  categories: readonly TAdminCategory[];

  setCategory: (category: TAdminCategory) => void;

  fetchCategories: () => void;
  createCategory: (category: TAdminCategoryCreate) => APIResponse<TFetchAdminCategoryCreateResponse>;
  deleteCategory: (id: number | string) => void;
}
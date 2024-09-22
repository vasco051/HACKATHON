import { TAdminCategory } from '../../entities/admin/TAdminCategory.ts';


export type TFetchAdminCategoriesResponse = {
  categories: TAdminCategory[]
}

export type TFetchAdminCategoryCreateResponse = {
  category: TAdminCategory
}
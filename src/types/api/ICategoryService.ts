import { TCategory } from '../entities/TCategory';

export type TFetchCategoriesResponse = {
  categories: TCategory[];
};

export type TFetchCategoryResponse = {
  data: TCategory;
};

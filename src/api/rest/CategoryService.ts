import { makeRequest } from '../makeRequest.ts';

import {
  TFetchCategoriesResponse,
  TFetchCategoryResponse,
} from '../../types/api/ICategoryService';

class CategoryService {
  fetchCategories() {
    return makeRequest<TFetchCategoriesResponse>({
      url: `categories`,
    });
  }

  fetchCategory(id: string | number) {
    return makeRequest<TFetchCategoryResponse>({
      url: `categories/${id}`,
    });
  }
}

export default new CategoryService();

import { makeRequest } from '../makeRequest.ts';

import { TFetchCategoriesResponse, } from '../../types/api/ICategoryService';


class CategoryService {
  fetchCategories() {
    return makeRequest<TFetchCategoriesResponse>({
      url: `categories`
    });
  }

  fetchCategory(id: string | number) {
    return makeRequest<TFetchCategoriesResponse>({
      url: `categories/${id}`
    });
  }
}

export default new CategoryService();

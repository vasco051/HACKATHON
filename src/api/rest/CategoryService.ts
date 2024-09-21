import { makeRequest } from '../makeRequest.ts';

import { TFetchCategoriesResponse } from '../../types/api/ICategoryService';


class CategoryService {
  fetchCategories() {
    return makeRequest<TFetchCategoriesResponse>({
      url: `categories`
    });
  }
}

export default new CategoryService();

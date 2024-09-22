import { makeRequest } from "../../makeRequest.ts";
import { TAdminCategoryCreate } from '../../../types/entities/admin/TAdminCategory';
import {
  TFetchAdminCategoriesResponse,
  TFetchAdminCategoryCreateResponse
} from '../../../types/api/admin/IAdminCategoryService.ts';

class AdminCategoryService {
  fetchCategories() {
    return makeRequest<TFetchAdminCategoriesResponse>({
      url: `categories`
    });
  }

  createCategory(category: TAdminCategoryCreate) {
    return makeRequest<TFetchAdminCategoryCreateResponse>({
      url: `categories`,
      method: 'post',
      data: category
    });
  }

  deleteCategory(id: string | number) {
    return makeRequest<never>({
      url: `categories/${id}`,
      method: 'delete'
    });
  }
}

export default new AdminCategoryService();

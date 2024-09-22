import { makeRequest } from "../../makeRequest.ts";
import { TFetchAdminCategoriesResponse } from "../../../types/api/admin/IAdminCategoryService.ts";

class AdminCategoryService {
  fetchCategories() {
    return makeRequest<TFetchAdminCategoriesResponse>({
      url: `categories`
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

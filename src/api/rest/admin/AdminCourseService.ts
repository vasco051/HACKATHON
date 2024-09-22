import { makeRequest } from "../../makeRequest.ts";

import { TFetchAdminCoursesResponse } from "../../../types/api/admin/IAdminCourseService.ts";

class AdminCourseService {
  fetchCourses(categoryId: string | number) {
    return makeRequest<TFetchAdminCoursesResponse>({
      url: `categories/${categoryId}/courses`
    });
  }

  deleteCourse(categoryId: string | number, courseId: string | number) {
    return makeRequest<never>({
      url: `categories/${categoryId}/courses/${courseId}`,
      method: 'delete'
    });
  }
}

export default new AdminCourseService();

import { makeRequest } from '../../makeRequest.ts';

import {
  TFetchAdminCourseCreateResponse,
  TFetchAdminCoursesResponse,
} from '../../../types/api/admin/IAdminCourseService.ts';
import { TAdminCourseCreate } from '../../../types/entities/admin/TAdminCourse.ts';

class AdminCourseService {
  fetchCourses(categoryId: string | number) {
    return makeRequest<TFetchAdminCoursesResponse>({
      url: `categories/${categoryId}/courses`,
    });
  }

  createCourse(categoryId: string | number, course: TAdminCourseCreate) {
    return makeRequest<TFetchAdminCourseCreateResponse>({
      url: `categories/${categoryId}/courses`,
      method: 'post',
      data: course,
    });
  }

  deleteCourse(courseId: string | number) {
    return makeRequest<never>({
      url: `courses/${courseId}`,
      method: 'delete',
    });
  }
}

export default new AdminCourseService();

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

  deleteCourse(categoryId: string | number, courseId: string | number) {
    return makeRequest<never>({
      url: `categories/${categoryId}/courses/${courseId}`,
      method: 'delete',
    });
  }

  createCourse(course: TAdminCourseCreate) {
    return makeRequest<TFetchAdminCourseCreateResponse>({
      url: `courses`,
      method: 'post',
      data: course,
    });
  }
}

export default new AdminCourseService();

import { makeRequest } from '../makeRequest.ts';

import { TFetchCoursesResponse } from "../../types/api/ICourseService.ts";


class CourseService {
  fetchCourses(id: string | number) {
    return makeRequest<TFetchCoursesResponse>({
      url: `categories/${id}/courses`
    });
  }
}

export default new CourseService();

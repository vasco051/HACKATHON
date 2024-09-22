import { TAdminCourse } from '../../entities/admin/TAdminCourse.ts';
import { TAdminCategoryCreate } from '../../entities/admin/TAdminCategory.ts';
import { APIResponse } from '../../API.ts';
import { TFetchAdminCourseCreateResponse } from '../../api/admin/IAdminCourseService.ts';

export interface IAdminCourseStore {
  isLoading: boolean;
  courses: readonly TAdminCourse[];

  setCourse: (course: TAdminCourse) => void;
  createCourse: (
    course: TAdminCategoryCreate,
  ) => APIResponse<TFetchAdminCourseCreateResponse>;

  fetchCourses: (id: number | string) => void;
  deleteCourse: (
    categoryId: string | number,
    courseId: string | number,
  ) => void;
}

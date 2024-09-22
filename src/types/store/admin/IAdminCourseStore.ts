import { APIResponse } from '../../API';
import { TFetchAdminCourseCreateResponse } from '../../api/admin/IAdminCourseService';
import { TAdminCourse, TAdminCourseCreate } from '../../entities/admin/TAdminCourse.ts';


export interface IAdminCourseStore {
  isLoading: boolean;
  courses: readonly TAdminCourse[];

  setCourse: (course: TAdminCourse) => void;

  fetchCourses: (id: number | string) => void;
  createCourse: (categoryId: string | number, course: TAdminCourseCreate) => APIResponse<TFetchAdminCourseCreateResponse>;
  deleteCourse: (courseId: string | number) => void;
}
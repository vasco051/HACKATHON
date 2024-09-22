import { TAdminCourse } from "../../entities/admin/TAdminCourse.ts";

export interface IAdminCourseStore {
  isLoading: boolean;
  courses: readonly TAdminCourse[];

  setCourse: (course: TAdminCourse) => void

  fetchCourses: (id: number | string) => void;
  deleteCourse: (categoryId: string | number, courseId: string | number) => void;
}
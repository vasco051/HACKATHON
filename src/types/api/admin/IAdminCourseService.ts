import { TAdminCourse } from '../../entities/admin/TAdminCourse.ts';

export type TFetchAdminCoursesResponse = {
  courses: TAdminCourse[];
};

export type TFetchAdminCourseCreateResponse = TAdminCourse

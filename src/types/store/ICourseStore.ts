import { TCourse } from "../entities/TCourse.ts";

export interface ICourseStore {
  isLoading: boolean;
  courses: readonly TCourse[];

  setCourse: (course: TCourse) => void

  fetchCourses: (id: number | string) => void;
}
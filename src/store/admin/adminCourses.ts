import { makeAutoObservable, observable, values } from 'mobx';

import AdminCourseService from "../../api/rest/admin/AdminCourseService.ts";

import { IAdminCourseStore } from "../../types/store/admin/IAdminCourseStore.ts";
import { TAdminCourse } from "../../types/entities/admin/TAdminCourse.ts";

export class AdminCourseStore implements IAdminCourseStore {
  _courses = observable.map<number, TAdminCourse>();
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get courses() {
    return values(this._courses);
  }

  setCourse(course: TAdminCourse) {
    this._courses.set(course.id, course);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  async fetchCourses(categoryId: string | number) {
    this.setIsLoading(true);
    this._courses.clear();

    const response = await AdminCourseService.fetchCourses(categoryId);

    if ('data' in response) {
      response.data.courses.forEach(course => {
        this.setCourse(course);
      });
    }

    this.setIsLoading(false);
  }

  async deleteCourse(categoryId: string | number, courseId: string | number) {
    const response = await AdminCourseService.deleteCourse(categoryId, courseId);

    if (response.status === 200) {
      this._courses.delete(+courseId)
    }
  }
}
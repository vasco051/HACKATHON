import { makeAutoObservable, observable, values } from 'mobx';

import AdminCourseService from '../../api/rest/admin/AdminCourseService.ts';

import { IAdminCourseStore } from '../../types/store/admin/IAdminCourseStore.ts';
import {
  TAdminCourse,
  TAdminCourseCreate,
} from '../../types/entities/admin/TAdminCourse.ts';

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
      response.data.courses.forEach((course) => {
        this.setCourse(course);
      });
    }

    this.setIsLoading(false);
  }

  async createCourse(categoryId: string | number, course: TAdminCourseCreate) {
    this.setIsLoading(true);

    const response = await AdminCourseService.createCourse(categoryId, course);

    if ('data' in response) {
      this.setCourse(response.data);
    }

    this.setIsLoading(false);
    return response;
  }

  deleteCourse = async (courseId: string | number) => {
    const response = await AdminCourseService.deleteCourse(courseId);

    if (response.status === 204) {
      this._courses.delete(+courseId);
    }
  };
}

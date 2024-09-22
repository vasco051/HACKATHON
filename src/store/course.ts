import { makeAutoObservable, observable, values } from 'mobx';
import { TCourse } from "../types/entities/TCourse.ts";
import CourseService from "../api/rest/CourseService.ts";
import { ICourseStore } from "../types/store/ICourseStore.ts";


export class CourseStore implements ICourseStore {
  _courses = observable.map<number, TCourse>();
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get courses() {
    return values(this._courses);
  }

  setCourse(course: TCourse) {
    this._courses.set(course.id, course);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  async fetchCourses(id: string | number) {
    this.setIsLoading(true);
    this._courses.clear();

    const response = await CourseService.fetchCourses(id);

    if ('data' in response) {
      response.data.courses.forEach(course => {
        this.setCourse(course);
      });
    }

    this.setIsLoading(false);
  }
}
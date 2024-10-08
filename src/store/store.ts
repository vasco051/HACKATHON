import { makeAutoObservable } from 'mobx';

import { AccountStore } from './account';
import { AdminQuestionStore } from './admin/adminQuestion';
import { AuthStore } from './auth';
import { CourseStore } from './course.ts';
import { CategoryStore } from './category';
import { RatingStore } from './rating.ts';
import { AdminCourseStore } from "./admin/adminCourses.ts";
import { AdminCategoryStore } from "./admin/adminCategory.ts";

import { IStore } from '../types/IStore.ts';
import { IAuthStore } from '../types/store/IAuthStore.ts';
import { IRatingStore } from '../types/store/IRatingStore.ts';
import { ICourseStore } from "../types/store/ICourseStore.ts";
import { IAccountStore } from '../types/store/IAccountStore';
import { ICategoryStore } from '../types/store/ICategoryStore';
import { IAdminCategoryStore } from "../types/store/admin/IAdminCategoryStore.ts";
import { IAdminCourseStore } from "../types/store/admin/IAdminCourseStore.ts";
import { IAdminQuestionStore } from '../types/store/admin/IAdminQuestionStore';

class Store implements IStore {
  auth: IAuthStore;
  account: IAccountStore;
  category: ICategoryStore;
  course: ICourseStore;
  rating: IRatingStore;

  // admin
  adminCategory: IAdminCategoryStore;
  adminCourse: IAdminCourseStore;
  adminQuestion: IAdminQuestionStore;

  constructor() {
    this.auth = new AuthStore(this);
    this.account = new AccountStore();
    this.category = new CategoryStore();
    this.course = new CourseStore();
    this.rating = new RatingStore();

    // admin
    this.adminCategory = new AdminCategoryStore();
    this.adminCourse = new AdminCourseStore();
    this.adminQuestion = new AdminQuestionStore();

    makeAutoObservable(this);
  }
}

export default Store;

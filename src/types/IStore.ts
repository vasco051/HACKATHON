import { IAccountStore } from './store/IAccountStore';
import { IAuthStore } from './store/IAuthStore.ts';
import { ICategoryStore } from './store/ICategoryStore';
import { IRatingStore } from './store/IRatingStore.ts';
import { ICourseStore } from "./store/ICourseStore.ts";

// admin
import { IAdminCategoryStore } from "./store/admin/IAdminCategoryStore.ts";
import { IAdminCourseStore } from "./store/admin/IAdminCourseStore.ts";


export interface IStore {
  auth: IAuthStore;
  account: IAccountStore;
  category: ICategoryStore;
  rating: IRatingStore;
  course: ICourseStore;

  // admin
  adminCategory: IAdminCategoryStore;
  adminCourse: IAdminCourseStore;
}

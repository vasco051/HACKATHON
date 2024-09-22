import { staticLinks } from '../config/staticLinks.ts';
import { AdminCoursePage } from '../pages/admin/category/course/AdminCoursePage';
import { AuthorizationPage } from '../pages/authorization/AuthorizationPage';
import { NotFound } from '../pages/not-found/NotFound';
import { RegistrationPage } from '../pages/registration/RegistrationPage';
import { MainPage } from '../pages/main/MainPage';
import { CategoryPage } from '../pages/category/CategoryPage';
import { BoardPage } from '../pages/board/BoardPage.tsx';
import { AdminCategoriesPage } from "../pages/admin/category/collection/AdminCategoriesPage.tsx";
import { AdminCategoryPage } from "../pages/admin/category/_/AdminCategoryPage.tsx";

export const authorizedRoutes = [
  {
    path: staticLinks.main,
    element: <AuthorizationPage/>
  },
  {
    path: staticLinks.authorization,
    element: <AuthorizationPage/>
  },
  {
    path: staticLinks.registration,
    element: <RegistrationPage/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
];

export const unauthorizedRoutes = [
  {
    path: staticLinks.main,
    element: <MainPage/>
  },
  {
    path: staticLinks.category,
    element: <CategoryPage/>
  },
  {
    path: staticLinks.courseBoard,
    element: <BoardPage/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
];

export const adminRoutes = [
  {
    path: staticLinks.adminCategories,
    element: <AdminCategoriesPage/>
  },
  {
    path: staticLinks.adminCategory,
    element: <AdminCategoryPage/>
  },
  {
    path: staticLinks.adminCourse,
    element: <AdminCoursePage/>
  }
];
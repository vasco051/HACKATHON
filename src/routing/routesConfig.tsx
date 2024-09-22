import { staticLinks } from '../config/staticLinks.ts';
import { AuthorizationPage } from '../pages/authorization/AuthorizationPage';
import { RegistrationPage } from '../pages/registration/RegistrationPage';
import { MainPage } from '../pages/main/MainPage';
import { CategoryPage } from '../pages/category/CategoryPage';
import { BoardPage } from '../pages/board/BoardPage.tsx';
import { AdminCategoriesPage } from "../pages/admin/category/collection/AdminCategoriesPage.tsx";
import { AdminCategoryPage } from "../pages/admin/category/_/AdminCategoryPage.tsx";

export const authorizedRoutes = [
  {
    path: '*',
    element: <AuthorizationPage/>,
  },
  {
    path: staticLinks.authorization,
    element: <AuthorizationPage/>,
  },
  {
    path: staticLinks.registration,
    element: <RegistrationPage/>,
  },
];

export const unauthorizedRoutes = [
  {
    path: '*',
    element: <MainPage/>
  },
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
];
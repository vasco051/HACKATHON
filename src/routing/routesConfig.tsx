import { staticLinks } from '../config/staticLinks.ts';
import { AuthorizationPage } from '../pages/authorization/AuthorizationPage';
import { RegistrationPage } from '../pages/registration/RegistrationPage';
import { MainPage } from '../pages/main/MainPage';
import { CategoryPage } from '../pages/category/CategoryPage';
import { BoardPage } from '../pages/board/BoardPage.tsx';

export const publicRoutes = [
  {
    path: '*',
    element: <AuthorizationPage />,
  },
  {
    path: staticLinks.authorization,
    element: <AuthorizationPage />,
  },
  {
    path: staticLinks.registration,
    element: <RegistrationPage />,
  },
];

export const privateRoutes = [
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

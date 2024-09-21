import { staticLinks } from '../config/staticLinks.ts';
import { AuthorizationPage } from '../pages/authorization/AuthorizationPage';
import { RegistrationPage } from '../pages/registration/RegistrationPage';
import { MainPage } from '../pages/main/MainPage';
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
  {
    path: staticLinks.board,
    element: <BoardPage />,
  },
];

export const privateRoutes = [
  {
    path: staticLinks.main,
    element: <MainPage />,
  },
];

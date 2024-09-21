import { staticLinks } from "../config/staticLinks.ts";
import { AuthorizationPage } from '../pages/authorization/AuthorizationPage';
import { PrivatePage } from "../pages/private/PrivatePage.tsx";
import { RegistrationPage } from '../pages/registration/RegistrationPage';

export const publicRoutes = [
  {
    path: '*',
    element: <AuthorizationPage/>
  },
  {
    path: staticLinks.authorization,
    element: <AuthorizationPage/>
  },
  {
    path: staticLinks.registration,
    element: <RegistrationPage/>
  }
];

export const privateRoutes = [
  {
    path: staticLinks.main,
    element: <PrivatePage/>
  }
];

import { staticLinks } from "../config/staticLinks.ts";
import { MainPage } from "../pages/main/MainPage.tsx";
import { PrivatePage } from "../pages/private/PrivatePage.tsx";

export const publicRoutes = [
  {
    path: staticLinks.main,
    element: <MainPage/>
  }
];

export const privateRoutes = [
  {
    path: staticLinks.main,
    element: <PrivatePage/>
  }
];

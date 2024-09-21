import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routesConfig.tsx';
import { useStore } from '../hooks/useStore.ts';
import { LoadingPage } from '../pages/loading/LoadingPage.tsx';
import { observer } from 'mobx-react-lite';
import { staticLinks } from '../config/staticLinks.ts';

const Routing = observer(() => {
  const authStore = useStore().auth;
  const routes = authStore.isAuth ? privateRoutes : publicRoutes;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (authStore.isLoading) return <LoadingPage />;

  if (
    authStore.isAuth &&
    [staticLinks.authorization, staticLinks.registration].includes(pathname)
  ) {
    navigate(staticLinks.main);
  }

  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
});

export default Routing;

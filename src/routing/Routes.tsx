import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { adminRoutes, authorizedRoutes, unauthorizedRoutes } from './routesConfig.tsx';
import { useStore } from '../hooks/useStore.ts';
import { LoadingPage } from '../pages/loading/LoadingPage.tsx';
import { observer } from 'mobx-react-lite';
import { staticLinks } from '../config/staticLinks.ts';

const Routing = observer(() => {
  const store = useStore();
  const authStore = store.auth;
  const accountStore = store.account;

  const navigate = useNavigate();
  const {pathname} = useLocation();

  if (authStore.isLoading) return <LoadingPage/>;

  if (
    authStore.isAuth &&
    [staticLinks.authorization, staticLinks.registration].includes(pathname)
  ) {
    navigate(staticLinks.main);
  }

  let routes = authStore.isAuth ? unauthorizedRoutes : authorizedRoutes;

  if (accountStore.account?.isTeacher) {
    routes = [...routes, ...adminRoutes]
  }

  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path}/>
      ))}
    </Routes>
  );
});

export default Routing;

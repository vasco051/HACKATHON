import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import { useStore } from '../hooks/useStore';
import { privateRoutes, publicRoutes } from './routesConfig.tsx';


const Routing = observer(() => {
  const authStore = useStore().auth;

  const routes = authStore.isAuth ? privateRoutes : publicRoutes;

  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path}/>
      ))}
    </Routes>
  );
});

export default Routing;

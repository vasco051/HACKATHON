import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from "./routesConfig.tsx";

const Routing = () => {
  const isAuth = true
  const routes = isAuth ? publicRoutes : privateRoutes

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          element={route.element}
          key={route.path}
        />
      ))}
    </Routes>
  );
}

export default Routing;

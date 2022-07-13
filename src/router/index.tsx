import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';
import useAuthorized from '../hooks/useAuthorized';
import AuthPage from '../pages/auth';
import { RouteType } from '../types/route-types';


const AppRouter: React.FC = () => {
  const appRoutes = useProtectedRoutes(routes);
  return (
    <Routes>
      {appRoutes}
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

const useProtectedRoutes = (routes: RouteType[]) => {
  const isAuthorized = useAuthorized();
  return routes.map(({ path, Element, ...rest }) =>
    <Route
      key={path}
      path={path}
      element={isAuthorized ? <Element /> : <Navigate to='/auth' />}
      {...rest}
    />);
};


export default AppRouter;

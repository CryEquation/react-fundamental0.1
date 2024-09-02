import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {publickRoutes, privateRoutes} from "../router";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Posts from "../pages/Posts";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
  console.log(isAuth);

  if (isLoading) {
    return <Loader/>
  }

  return (
    isAuth
      ?
        <Routes>
          {privateRoutes.map(route =>
            <Route exact={route.exact}
                   path={route.path}
                   element={route.element}
                   key={route.path}
            />
          )}
          <Route path="*" element={<Posts />}
          />
        </Routes>
      :
        <Routes>
          {publickRoutes.map(route =>
            <Route exact={route.exact}
                   path={route.path}
                   element={route.element}
                    key={route.path}
            />
          )}
          <Route path="*" element={<Login />}
          />
        </Routes>

  );
};

export default AppRouter;



import { createBrowserRouter, Navigate, NavLink, Outlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { paths } from "../routes/constant";

import Dashboard from "../screens/Dashboard";
import Error from "../screens/Error";
import Login from "../screens/Login";
import Policy from "../screens/Policy";
import Register from "../screens/Register";
import Root from "../screens/Root";
import StyleGuide from "../screens/StyleGuide";
import Todos from "../screens/Todos";

const Private = () => {
  const { isAuth } = useAuth();
  return !isAuth ? (
    <Navigate
      to={{
        pathname: "/login",
      }}
    />
  ) : (
    <Outlet />
  );
};

const Public = () => {
  const { isAuth } = useAuth();
  return isAuth ? (
    <Navigate
      to={{
        pathname: "/",
      }}
    />
  ) : (
    <Outlet />
  );
};

const Common = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const Admin = () => {
  return (
    <div>
      Admin
      <br />
      <NavLink to="/admin/todos">+todos</NavLink>
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter(
  [
    {
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          element: <Private />,
          children: [
            {
              path: paths.dashboard,
              element: <Dashboard />,
              children: [
                {
                  path: paths.styleGuide,
                  element: <StyleGuide />,
                },
                {
                    path: paths.todos,
                    element: <Todos />,
                  },
              ],
            },
            {
              path: paths.admin,
              element: <Admin />,
              children: [
                {
                  path: paths.adminTodos,
                  element: <Todos />,
                },
              ],
            },
          ],
        },
        {
          element: <Public />,
          children: [
            {
              path: paths.login,
              element: <Login />,
            },
            {
              path: paths.register,
              element: <Register />,
            },
          ],
        },
        {
          element: <Common />,
          children: [
            {
              path: paths.policy,
              element: <Policy />,
            },
          ],
        },
      ],
    },
  ]
  // {
  //   basename: "/chnirt",
  // }
);

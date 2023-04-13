import { lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  NavLink,
  Outlet,
} from "react-router-dom";
import { useAuthenticateStore } from "../global/authenticateSlice";

import { paths } from "../routes/constant";

const Home = lazy(() => import("../screens/Home"));
const Dashboard = lazy(() => import("../screens/Dashboard"));
const Error = lazy(() => import("../screens/Error"));
const Login = lazy(() => import("../screens/Login"));
const Policy = lazy(() => import("../screens/Policy"));
const Register = lazy(() => import("../screens/Register"));
const Root = lazy(() => import("../screens/Root"));
const StyleGuide = lazy(() => import("../screens/StyleGuide"));
const Todos = lazy(() => import("../screens/Todos"));
const Profile = lazy(() => import("../screens/Profile"));
const ResetPassword = lazy(() => import("../screens/ResetPassword"));
const ChangePassword = lazy(() => import("../screens/ChangePassword"));

const Private = () => {
  // const isAuth = useAuthenticateStore(
  //   (state) => Boolean(state.accessToken) && Boolean(state.refreshToken)
  // );
  const isSignedIn = useAuthenticateStore((state) => state.isSignedIn);
  return !isSignedIn ? (
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
  // const isAuth = useAuthenticateStore(
  //   (state) => Boolean(state.accessToken) && Boolean(state.refreshToken)
  // );
  const isSignedIn = useAuthenticateStore((state) => state.isSignedIn);
  return isSignedIn ? (
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
  return <Outlet />;
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

export const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        element: <Private />,
        children: [
          {
            // path: paths.dashboard,
            element: <Home />,
            children: [
              {
                path: "/",
                element: <Dashboard />,
              },
              {
                path: paths.styleGuide,
                element: <StyleGuide />,
              },
              {
                path: paths.todos,
                element: <Todos />,
              },
              {
                path: paths.profile,
                element: <Profile />,
              },
              {
                path: paths.changePassword,
                element: <ChangePassword />,
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
          {
            path: paths.resetPassword,
            element: <ResetPassword />,
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
]);

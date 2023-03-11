import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

const Provider = () => {
  return <RouterProvider router={router} />;
};

export default Provider;

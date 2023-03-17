import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
// import App from "./App";
import { AuthProvider } from "./hooks/useAuth";
import { router } from "./routes/router";
import { queryClient } from "./gql/queryClient";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
    <ToastContainer />
    {/* <App /> */}
  </React.StrictMode>
);

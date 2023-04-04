import { useEffect, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuthenticateStore } from "../global/authenticateSlice";

const Root = () => {
  const { isLoaded, checkTokens } = useAuthenticateStore();

  useEffect(() => {
    checkTokens();
  }, []);

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
  // return (
  //   <div>
  //     Root
  //     <br />
  //     <NavLink to="/login">+login</NavLink>
  //     <NavLink to="/register">+register</NavLink>
  //     <br />
  //     <NavLink to="/">+dashboard</NavLink>
  //     <NavLink to="/admin">+admin</NavLink>
  //     <br />
  //     <NavLink to="/policy">+policy</NavLink>
  //     <br />
  //     <Outlet />
  //   </div>
  // );
};

export default Root;

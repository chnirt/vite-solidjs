import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="container">
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

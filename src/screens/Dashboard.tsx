import { useCallback } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useAuthenticateStore } from "../global/authenticateSlice";
import { paths } from "../routes/constant";

const Dashboard = () => {
  const { removeTokens } = useAuthenticateStore();
  const handleLogout = useCallback(() => {
    removeTokens();
  }, []);
  return (
    <div>
      <Navbar />
      Dashboard
      <br />
      <Button onClick={handleLogout}>Logout</Button>
      <NavLink to={paths.todos}>+todos</NavLink>
      <NavLink to={paths.styleGuide}>+style-guide</NavLink>
      <NavLink to={paths.profile}>+profile</NavLink>
      <NavLink to={paths.changePassword}>+changePassword</NavLink>
      <Outlet />
    </div>
  );
};

export default Dashboard;

import { useCallback } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { logout } = useAuth();
  const handleLogout = useCallback(() => {
    logout();
  }, []);
  return (
    <div>
      <Navbar />
      Dashboard
      <br />
      <Button onClick={handleLogout}>Logout</Button>
      <NavLink to="/todos">+todos</NavLink>
      <NavLink to="/style-guide">+style-guide</NavLink>
      <Outlet />
    </div>
  );
};

export default Dashboard;

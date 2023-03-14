import { Fragment, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { paths } from "../routes/constant";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = useCallback(() => {
    login("anonymous");
  }, []);
  const navigateRegister = useCallback(() => {
    navigate(paths.register);
  }, []);
  return (
    <Fragment>
      Login Page
      <Button onClick={handleLogin}>Login</Button>
      <a onClick={navigateRegister}>New user? Create account</a>
    </Fragment>
  );
};

export default Login;

import React, { Fragment, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../routes/constant";

const Register = () => {
  const navigate = useNavigate();
  const navigateLogin = useCallback(() => {
    navigate(paths.login);
  }, []);
  return (
    <Fragment>
      Register Page
      <a onClick={navigateLogin}>Back to login</a>
    </Fragment>
  );
};

export default Register;

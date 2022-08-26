import React from "react";
import { Route, useNavigate } from "react-router-dom";

const RouteGuard = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("token") ? (flag = true) : (flag = false);

    return flag;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        hasJWT() ? <Component {...props} /> : navigate("/Login")
      }
    />
  );
};

export default RouteGuard;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

interface Props {
  path: string;
  component: any;
  exact?: boolean;
}

const MyRoute: React.FC<Props> = ({ path, component: Component, exact }) => {
  const { currentUser } = useUserContext();
  const isAuthRoute = path === "/login" || path === "/signup";

  return (
    <Route
      exact={!!exact}
      path={path}
      render={props => {
        if (isAuthRoute) {
          return !!currentUser ? (
            <Redirect to="/home" />
          ) : (
            <Component {...props} />
          );
        } else {
          return !!currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          );
        }
      }}
    />
  );
};

export default MyRoute;

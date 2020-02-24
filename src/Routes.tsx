import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import MyRoute from "./components/utils/MyRoute";
import SignUp from "./components/sign-up/SignUp";

const Route = () => {
  return (
    <BrowserRouter>
      <Switch>
        <MyRoute exact path="/" component={Home} />
        <MyRoute path="/home" component={Home} />
        <MyRoute path="/login" component={Login} />
        <MyRoute path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Route;

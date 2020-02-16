import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./app.scss";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

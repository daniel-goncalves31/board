import React from "react";
import { ToastContainer } from "react-toastify";
import "./app.scss";
import { UserProvider } from "./contexts/UserContext";
import Routes from "./Routes";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <UserProvider>
      <Routes />
      <ToastContainer pauseOnHover={true} position="bottom-right" />
    </UserProvider>
  );
};

export default App;

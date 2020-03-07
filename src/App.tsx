import React from "react";
import { ToastContainer } from "react-toastify";
import "./app.scss";
import { UserProvider } from "./contexts/UserContext";
import Routes from "./Routes";
import "react-toastify/dist/ReactToastify.css";
import { ModalProvider } from "./contexts/ModalContext";

const App = () => {
  return (
    <UserProvider>
      <ModalProvider>
        <Routes />
        <ToastContainer pauseOnHover={true} position="bottom-right" />
      </ModalProvider>
    </UserProvider>
  );
};

export default App;

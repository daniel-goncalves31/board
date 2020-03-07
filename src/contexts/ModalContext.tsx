import React, { useContext, useState } from "react";

interface Context {
  showProjectModal: boolean;
  setShowProjectModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = React.createContext<Context>({
  showProjectModal: false,
  setShowProjectModal: () => {}
});

const useModalContext = () => useContext(ModalContext);

const ModalProvider: React.FC = ({ children }) => {
  const [showProjectModal, setShowProjectModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showProjectModal, setShowProjectModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { useModalContext, ModalProvider };

import React, { useContext, useState, useEffect } from "react";
import { auth, getUserData } from "../config/firebase";
import Loader from "react-loader-spinner";

export interface CurrentUser {
  id: string;
  name: string;
  imageUrl: string;
  email: string;
}

interface Context {
  currentUser: CurrentUser | null | undefined;
  setCurrentUser: React.Dispatch<
    React.SetStateAction<CurrentUser | null | undefined>
  >;
}

const UserContext = React.createContext<Context>({
  currentUser: null,
  setCurrentUser: () => {}
});

const useUserContext = () => useContext(UserContext);

const UserProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<
    CurrentUser | null | undefined
  >(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async firebaseUser => {
      if (firebaseUser) {
        const userData = await getUserData(firebaseUser);
        setCurrentUser(userData);
      } else {
        setCurrentUser(null);
      }
    });

    return function() {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {currentUser === undefined ? (
        <div className="center" style={{ height: "100%" }}>
          <Loader type="Watch" color="#00d1b2" height={100} width={100} />
          <h3 className="subtitle" style={{ marginTop: "8px" }}>
            Loading...
          </h3>
        </div>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};

export { useUserContext, UserProvider };

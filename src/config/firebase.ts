import firebase, { User } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { CurrentUser } from "../contexts/UserContext";

const firebaseConfig = {
  apiKey: "AIzaSyBq8moml1hyEtUjtrAdw0grTloetA3vhSc",
  authDomain: "kanban-board-8a52e.firebaseapp.com",
  databaseURL: "https://kanban-board-8a52e.firebaseio.com",
  projectId: "kanban-board-8a52e",
  storageBucket: "kanban-board-8a52e.appspot.com",
  messagingSenderId: "584822062839",
  appId: "1:584822062839:web:512883adeadc4bc63bddf2"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();

export const getUserData = async (user: User) => {
  const userRef = firestore.doc(`users/${user.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    return null;
  }

  return userSnapshot.data() as CurrentUser;
};

export const saveUserData = async (user: CurrentUser) => {
  try {
    const userRef = firestore.doc(`users/${user.id}`);
    await userRef.set(user);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

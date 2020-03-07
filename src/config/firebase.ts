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
export const firestore = firebase.firestore();

// * Firestore
export const saveProjectFirestore = async (
  project: any,
  projectId?: string
) => {
  try {
    if (projectId) {
    } else {
      await firestore
        .collection("projects")
        .doc()
        .set(project);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// * Auth
export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const continueWithGoogle = async () => {
  try {
    const { user: firebaseUser } = await auth.signInWithPopup(googleProvider);
    return await getUserData(firebaseUser!, true);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const getUserData = async (user: User, isGoogle: boolean = false) => {
  const userRef = firestore.doc(`users/${user.uid}`);
  let userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    if (!isGoogle) {
      return null;
    }

    const userData: CurrentUser = {
      id: user.uid,
      name: user.displayName!,
      email: user.email!,
      imageUrl: "some image"
    };

    await userRef.set(userData);
    userSnapshot = await userRef.get();
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

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDOwEy5wouGLUhD7BQrV9mO4LBu9fVBKy4",
  authDomain: "crwn-clothing-db-b1c3e.firebaseapp.com",
  projectId: "crwn-clothing-db-b1c3e",
  storageBucket: "crwn-clothing-db-b1c3e.appspot.com",
  messagingSenderId: "76344508018",
  appId: "1:76344508018:web:f010f5ad702f1c25ffcceb",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (exception) {
      console.log("there was an error creating the user: " + exception.message);
    }
  }

  return userDocRef;
};

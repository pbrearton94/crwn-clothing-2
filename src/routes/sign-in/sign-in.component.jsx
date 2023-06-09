import React from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);

    createUserDocumentFromAuth(user);
  };
  return (
    <>
      <div>
        <h1>SignIN</h1>
        <button onClick={logGoogleUser}>Sign in with google popup</button>
      </div>
    </>
  );
};

export default SignIn;

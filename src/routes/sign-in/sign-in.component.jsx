import React, { useEffect } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <div>
        <h1>SignIN</h1>
        <button onClick={logGoogleUser}>Sign in with google popup</button>
        <SignUpForm />
      </div>
    </>
  );
};

export default SignIn;

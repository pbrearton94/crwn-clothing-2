import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
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

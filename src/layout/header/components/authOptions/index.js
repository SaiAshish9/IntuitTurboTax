import React from "react";
import LockImg from "assets/images/lock.svg";

import {
  SignInButton,
  SignUpButton,
  LockImage,
  SignInButtonText,
} from "./styles";

const AuthOptions = () => {
  return (
    <>
      <SignUpButton>Sign up</SignUpButton>
      <SignInButton>
        <LockImage src={LockImg} alt="img" />
        <SignInButtonText>Sign in</SignInButtonText>
      </SignInButton>
    </>
  );
};

export default AuthOptions;

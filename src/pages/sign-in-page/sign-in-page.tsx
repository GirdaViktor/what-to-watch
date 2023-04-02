import React from 'react';
import Footer from "../../components/footer/footer";
import HeaderSignIn from "../../components/header/header-sign-in/header-sign-in";
import SignIn from "../../components/sign-in/sign-in";

const SignInPage = () : JSX.Element => {
  return (
    <div className="user-page">
      <HeaderSignIn/>

      <SignIn/>

      <Footer/>
    </div>
  );
};

export default SignInPage;

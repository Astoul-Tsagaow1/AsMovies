import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { SignIn, SignOut } from "../../Actions";

function GoogleAuth(props) {
  let auth;

  useEffect(() => {

   
    window.gapi.load("client:auth2", () => {
      return window.gapi.client
        .init({
          clientId:
            "343947870406-ffkk9raui0uo61ji0g5ukqeh45riii16.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  });

  const onAuthChange = isSignedIn => {
    if (isSignedIn) {
      console.log(isSignedIn);

      props.SignIn(
        auth.currentUser.get().getId(),
        auth.currentUser
          .get()
          .getBasicProfile()
          .getName()
      );
      console.log(
        auth.currentUser
          .get()
          .getBasicProfile()
          .getName()
      );
    } else {
      props.SignOut();
    }
  };
  const HendaleSignInClick = () => {
    auth.signIn();
  };

  const HendaleSignOutClick = () => {
    auth.signOut();
  };

  function RenderAuthButton() {
    if (props.IsSignIn === null) {
      return <div>I dont know if you are signed in !</div>;
    } else if (props.IsSignIn) {
      return  <a onClick={HendaleSignOutClick} class="btn btn-block btn-social btn-google" style={{color:"#fff"}}>
      <span class="fa fa-google" style={{color:"#fff"}}></span>
      Sign out 
    </a>
      ;
    } else {
      return (
        <a onClick={HendaleSignInClick}  class="btn btn-block btn-social btn-google" style={{color:"#fff"}}>
          <span class="fa fa-google" style={{color:"#fff"}}></span>
          Sign in with google
        </a>
      );
    }
  }
  return <div>{RenderAuthButton()}</div>;
}
const MapStateTopProp = MyState => {
  console.log(MyState);

  return { IsSignIn: MyState.isSinedIn };
};
export default connect(MapStateTopProp, { SignIn, SignOut })(GoogleAuth);

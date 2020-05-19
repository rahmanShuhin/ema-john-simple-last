import React from "react";
import Auth from "src/use.auth";

const Login = () => {
  const auth = Auth();
  const handleSignIn = () => {
    auth.signInWithGoogle().then(res => {
      console.log("redirect now");
      //window.location.pathname = "/review";
      window.location.pathname = "/review";
      // e.preventDefault();
    });
  };
  //console.log(auth);
  return (
    <div>
      <h1>hello login done</h1>

      {auth.user ? (
        <div>
          <button onClick={auth.signOut}>Sign Out</button>
          <h2>Hi i'm {auth.user.name}</h2>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign In With Google</button>
      )}
    </div>
  );
};
export default Login;

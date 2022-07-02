import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../firebase.init';
const auth = getAuth(app);

const Login = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
  
    //google provider
    const handleGoogleSignIn = () => {
      console.log("working");
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          setUser(user);
          
        })
        .catch((error) => {
          console.log("error", error);
        });
    };

     //github provider
  const handleGithubSignIn = () => {
 
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const user = error.user;
        setUser(user);
      });
  };

  //google signOut
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
        setUser({});
      });
  };

  
  //github signOut
  const handleGithubSignOut = () => {
    console.log("click");
    //const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({})
      })
      .catch((error) => {
        // An error happened.
        setUser({})
      });
  };
    
    return (
        <div>
            <h1>login page</h1>
            <div className="App">
      <h1>Name : {user.displayName}</h1>
      <h1>Email : {user.email}</h1>

      <img src={user.photoURL} alt="img" />
      <br />

      {user.email ? (
        <>
          <button onClick={handleGoogleSignOut}>Google Sign out</button>
          <button onClick={handleGithubSignOut}>Github Sign out</button>
        </>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google Sign in</button>
          <button onClick={handleGithubSignIn}>Github Sign in</button>
        </>
      )}

      <br />
    </div>
        </div>
    );
};

export default Login;
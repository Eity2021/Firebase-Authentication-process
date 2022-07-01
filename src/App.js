import logo from "./logo.svg";
import "./App.css";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.init";
import { useState } from "react";
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("working");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
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
  return (
    <div className="App">
      <h1>Name : {user.displayName}</h1>
      <h1>Email : {user.email}</h1>

      <img src={user.photoURL} alt="img" />
      <br />

      {user.email ? (
        <button onClick={handleGoogleSignOut}>Google Sign out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Google Sign in</button>
      )}

      <br />
    </div>
  );
}

export default App;

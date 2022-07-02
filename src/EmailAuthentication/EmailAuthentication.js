import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import "../Allcss/Allcs.css";
import app from "../firebase.init";

const auth = getAuth(app);
const EmailAuthentication = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailEvent = (event) => {
    //console.log("email text");
    const email = event.target.value;
    setEmail(email);
  };

  const handlePasswordEvent = (event) => {
    //console.log("email text");
    const password = event.target.value;
    setPassword(password);
  };

  //email authentication

  const handleFormSubmit = (event) => {
    // console.log("click")
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
  };

  return (
    <div>
        <div>
            <h1>{user.email}</h1>
        </div>
      <div>
        <h1 className="heading">Email/Password</h1>
        <div className="email-pass">
          <form onSubmit={handleFormSubmit}>
            <input
              onBlur={handleEmailEvent}
              type="text"
              placeholder="User Email"
            />
            <br></br>
            <input
              onBlur={handlePasswordEvent}
              type="password"
              placeholder="User password"
            />
            <br></br>
            <input className="submit" type="submit" value="login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailAuthentication;

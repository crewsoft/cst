import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMsg, setErrorMsg] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validation = () => {
    let RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return RegExp.test(email) & (password.length > 7);
  };

  const validateEmail = (email) => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email)) {
      setEmail(email);
      setEmailError("");
      return true;
    } else {
      setEmail(email);
      console.log("an error");

      setEmailError("Please enter a valid email address.");

      return false;
    }
  };

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    if (validation) {
      console.log(email);
    }
  };

  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action="" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => validateEmail(e.target.value)}
                  id="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              {emailError !== "" && <p className="text-danger">{emailError}</p>}
              <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  minimum={8}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="forget">
                <label for="">
                  <input type="checkbox" />
                  Remember Me
                </label>
              </div>
              <button type="submit">Log in</button>
              <div className="register">
                <p>
                  <Link to="#">Forgot Password</Link>
                </p>
                <p>
                  Don't have a account <Link href="#">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
}

export default Login;
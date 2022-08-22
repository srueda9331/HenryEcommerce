import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [init, setInit] = useState(true);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navigate = useNavigate();

  useEffect(() => {
    const userListener = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      if (init) {
        setInit(false);
      }
    });

    return userListener;
  }, [init]);

  return (
    <div className="lgn-container">
      <div className="lg-container">
        {user ? (
          navigate("/")
        ) : (
          <div class="main">
            <input
              className="input"
              type="checkbox"
              id="chk"
              aria-hidden="true"
            />

            <div class="signup">
              <form>
                <label className="label" for="chk" aria-hidden="true">
                  Sign up
                </label>
                <input
                  className="input"
                  type="text"
                  name="full_name"
                  placeholder="Fullname"
                  required=""
                />
                <input
                  className="input"
                  type="text"
                  name="billing_address"
                  placeholder="Address"
                  required=""
                />
                <input
                  className="input"
                  type="text"
                  name="country"
                  placeholder="Country"
                  required=""
                />
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                />
                <input
                  className="input"
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required=""
                />
                <button className="button">Sign up</button>
              </form>
            </div>

            <div class="login">
              <form>
                <label className="label" for="chk" aria-hidden="true">
                  Login
                </label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                />
                <input
                  className="input"
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required=""
                />
                <button className="button">Login</button>
                <div className="google-btn button-g" onClick={signInWithGoogle}>
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt=""
                    />
                  </div>
                  <p className="btn-text">
                    <b>Sign in with google</b>
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Login;

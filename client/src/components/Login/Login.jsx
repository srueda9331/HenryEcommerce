import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";
// import { loginUser } from "../../redux/actions/actionCreators";
import axios from "axios";
import { setAuthToken } from "../setAuthToken";

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
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const [isSubmitedLogin, setSubmitedLogin] = useState(false);
  // const isSession = useSelector((state) => state.loginState);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitedLogin(true);
      await axios
        .post(`http://localhost:3001/users/login`, {
          ...input,
        })

        .then((response) => {
          const token = response.data.token;
          const user = response.user;
          localStorage.setItem("token", token);
          localStorage.setItem("user", user);
          setAuthToken(token);
          navigate("/");
        });
    } catch (error) {
      console.log("hubo un error: " + error);
    } finally {
      setSubmitedLogin(false);
    }
  };

  // useEffect(() => {
  //   console.log(input.email);
  // }, [input]);
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
              <form onSubmit={(e) => handleSubmit(e)}>
                <label className="label" for="chk" aria-hidden="true">
                  Login
                </label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  value={input.email}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                  value={input.password}
                  onChange={(e) => handleChange(e)}
                />
                <button className="button" type="submit">
                  Login
                </button>
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

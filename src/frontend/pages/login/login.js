import { useAuth } from "../../contexts/authContext";
import "../signup/signup.css";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const { user, error } = authState;

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "TOKEN",
        payload: response.data.encodedToken,
      });
      navigate("/");
    } catch (err) {
      authDispatch({
        type: "ERROR",
        payload:
          "Wrong Email or Pssword, signup if you don't have account with us",
      });
      console.log(err);
    }
  };

  setTimeout(() => {
    if (error)
      authDispatch({
        type: "ERROR",
        payload: null,
      });
  }, 3000);

  return (
    <div className="center">
      <form
        className="input-container ecom-placing-input-container"
        onSubmit={loginHandler}
      >
        <h1 className="ecom-center-inside-flex">Login</h1>
        <div className="input-name">
          <label htmlFor="email">EMAIL:</label>
          <input
            type="email"
            id="email"
            className="name-input-field"
            required
            onChange={(e) =>
              authDispatch({ type: "EMAIL", payload: e.target.value })
            }
          />
        </div>
        <div className="input-password">
          <label htmlFor="password">PASSWORD:</label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            required
            onChange={(e) =>
              authDispatch({
                type: "PASSWORD",
                payload: e.target.value,
              })
            }
          />
          <span className="ecom-forgot-password">Forgot Password?</span>
        </div>
        <button
          type="submit"
          className="btn-no-border-no-color ecom-center-inside-flex"
        >
          <h2>Log In</h2>
        </button>
        <Link to="/signup" className="ecom-center-inside-flex">
          Create Account
        </Link>
      </form>
    </div>
  );
}

export { Login };

// As soon as I write input in place of button all goes away

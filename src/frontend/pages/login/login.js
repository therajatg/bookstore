import { useAuth } from "../../contexts/authContext";
import "../signup/signup.css";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const { user } = authState;

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        authType: "TOKEN",
        authPayload: response.data.encodedToken,
      });
      navigate("/");
    } catch (error) {
      authDispatch({ authType: "ERROR", authPayload: true });
      console.log(`Error: ${error}`);
    }
  };
  return (
    <div className="center">
      <form
        className="input-container ecom-placing-input-container"
        onSubmit={loginHandler}
      >
        <h1 className="ecom-center-inside-flex">Login</h1>
        <div className="input-name">
          <label for="email">EMAIL:</label>
          <input
            type="email"
            id="email"
            className="name-input-field"
            required
            onChange={(e) =>
              authDispatch({ authType: "EMAIL", authPayload: e.target.value })
            }
          />
        </div>
        <div className="input-password">
          <label for="password">PASSWORD:</label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            required
            onChange={(e) =>
              authDispatch({
                authType: "PASSWORD",
                authPayload: e.target.value,
              })
            }
          />
          <span className="ecom-forgot-password">Forgot Password?</span>
        </div>
        <button
          type="submit"
          className="btn-no-border-no-color ecom-center-inside-flex"
        >
          <h2>Sign In</h2>
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

import { useAuth } from "../../contexts/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const { authState, authDispatch } = useAuth();
  const { user } = authState;

  const navigate = useNavigate();

  const formSignupHandler = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      });
      console.log(user.firstName);
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
        onSubmit={formSignupHandler}
      >
        <h2 className="ecom-center-inside-flex">CREATE ACCOUNT</h2>
        <div className="input-name">
          <label for="firstName">FIRST NAME:</label>
          <input
            type="text"
            id="firstName"
            className="name-input-field"
            placeholder="First Name"
            required
            onChange={(e) =>
              authDispatch({
                authType: "FIRST_NAME",
                authPayload: e.target.value,
              })
            }
          />
        </div>
        <div className="input-password">
          <label for="lastName">LAST NAME:</label>
          <input
            type="text"
            id="lastName"
            className="password-input-field"
            placeholder="Last Name"
            required
            onChange={(e) =>
              authDispatch({
                authType: "LAST_NAME",
                authPayload: e.target.value,
              })
            }
          />
        </div>
        <div className="input-name">
          <label for="email">EMAIL:</label>
          <input
            type="email"
            id="email"
            className="name-input-field"
            placeholder="Email"
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
            placeholder="Password"
            required
            onChange={(e) =>
              authDispatch({
                authType: "PASSWORD",
                authPayload: e.target.value,
              })
            }
          />
        </div>
        <div className="input-password">
          <label for="confirmPassword">RE-ENTER PASSWORD:</label>
          <input
            type="password"
            id="confirmPassword"
            className="password-input-field"
            placeholder="Re-Enter Password"
            required
            onChange={(e) =>
              authDispatch({
                authType: "CONFIRM_PASSWORD",
                authPayload: e.target.value,
              })
            }
          />
        </div>
        <button
          type="submit"
          className="btn-no-border-no-color ecom-center-inside-flex"
        >
          <h2>CREATE</h2>
        </button>
      </form>
    </div>
  );
}

export { Signup };

// If I use the input tag instead of button tag for create then form disappears.

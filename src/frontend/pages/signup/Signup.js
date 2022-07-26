import { useAuth } from "../../contexts/index";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./signup.css";
import { toast } from "react-toastify";

function Signup() {
  const { authState, authDispatch } = useAuth();
  const { user, error } = authState;
  const location = useLocation();
  const navigate = useNavigate();

  const formSignupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "TOKEN",
        payload: response.data.encodedToken,
      });
      toast.success("Signup Successful");
      let from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (err) {
      authDispatch({
        type: "ERROR",
        payload: "Something went wrong",
      });
      toast.error("Error occurred, please try again");
    }
  };

  return (
    <div className="center weightedText paddingTop">
      <form
        className="input-container ecom-placing-input-container"
        onSubmit={formSignupHandler}
      >
        <h2 className="ecom-center-inside-flex">CREATE ACCOUNT</h2>
        <div className="input-name">
          <label htmlFor="firstName">FIRST NAME:</label>
          <input
            type="text"
            id="firstName"
            className="name-input-field"
            placeholder="First Name"
            required
            onChange={(e) =>
              authDispatch({
                type: "FIRST_NAME",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className="input-password">
          <label htmlFor="lastName">LAST NAME:</label>
          <input
            type="text"
            id="lastName"
            className="password-input-field"
            placeholder="Last Name"
            required
            onChange={(e) =>
              authDispatch({
                type: "LAST_NAME",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className="input-name">
          <label htmlFor="email">EMAIL:</label>
          <input
            type="email"
            id="email"
            className="name-input-field"
            placeholder="Email"
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
            placeholder="Password"
            required
            onChange={(e) =>
              authDispatch({
                type: "PASSWORD",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className="input-password">
          <label htmlFor="confirmPassword">RE-ENTER PASSWORD:</label>
          <input
            type="password"
            id="confirmPassword"
            className="password-input-field"
            placeholder="Re-Enter Password"
            required
            onChange={(e) =>
              authDispatch({
                type: "CONFIRM_PASSWORD",
                payload: e.target.value,
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
      <h4 className="error__message">{error}</h4>
    </div>
  );
}

export { Signup };

// If I use the input tag instead of button tag for create then form disappears.

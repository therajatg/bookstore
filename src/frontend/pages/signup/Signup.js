import { useAuth } from "../../contexts/index";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./signup.css";
import { toast } from "react-toastify";
import { useState } from "react";

function Signup() {
  const { authState, authDispatch } = useAuth();
  const { user, error } = authState;
  const location = useLocation();
  const navigate = useNavigate();
  const [detail, setDetail] = useState({});
  const [dummy, setDummy] = useState(false);

  const formSignupHandler = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (dummy === true) {
        response = await axios.post("/api/auth/login", detail);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
      } else {
        response = await axios.post(`/api/auth/signup`, detail);
        localStorage.setItem("user", JSON.stringify(response.data.createdUser));
      }
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "TOKEN",
        payload: {
          token: response.data.encodedToken,
          user: response.data.createdUser,
        },
      });
      toast.success("Signup Successful");
      let from = location.state?.from?.pathname || "/home";
      navigate(from, { replace: true });
    } catch (error) {
      authDispatch({
        type: "ERROR",
        payload: error,
      });
      toast.error("Error occurred, please try again");
    }
  };

  return (
    <div className="center weightedText ">
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
            value={detail.firstName}
            required
            onChange={(e) =>
              setDetail({
                ...detail,
                firstName: e.target.value,
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
            value={detail.lastName}
            required
            onChange={(e) =>
              setDetail({
                ...detail,
                lastName: e.target.value,
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
            value={detail.email}
            required
            onChange={(e) =>
              setDetail({
                ...detail,
                email: e.target.value,
              })
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
            value={detail.password}
            required
            onChange={(e) =>
              setDetail({
                ...detail,
                password: e.target.value,
              })
            }
          />
        </div>
        <button className="btn-no-border-no-color ecom-center-inside-flex">
          <h2>CREATE</h2>
        </button>
        <button
          className="btn-no-border-no-color ecom-center-inside-flex"
          onClick={() => {
            setDetail({
              firstName: "dummy",
              lastName: "Bro",
              email: "rajat@gmail.com",
              password: "rajatgupta",
            });
            setDummy(true);
          }}
        >
          <h2 className="dummySignup">Dummy Signup</h2>
        </button>
      </form>
      <h4 className="error__message">{error}</h4>
    </div>
  );
}

export { Signup };

import { useAuth } from "../../contexts/authContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";
import style from "./login.module.css";
import { toast } from "react-toastify";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { authDispatch } = useAuth();
  const [detail, setDetail] = useState({});

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, detail);
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.foundUser));
      authDispatch({
        type: "TOKEN",
        payload: {
          token: response.data.encodedToken,
          user: response.data.foundUser,
        },
      });
      toast.success("Login Successful");
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
    <div className={style.loginPage}>
      <form className={style.form} onSubmit={loginHandler}>
        <p className={style.title}>Login to Kitab</p>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setDetail({ ...detail, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setDetail({ ...detail, password: e.target.value })}
          />
        </div>
        <button className={style.loginBtn}>LOGIN</button>
        <button
          className={style.guestLoginBtn}
          onClick={() =>
            setDetail({ email: "rajat@gmail.com", password: "rajatgupta" })
          }
        >
          Login As Guest
        </button>

        <p className={style.signupLine}>
          Need An Account?{" "}
          <Link to="/signup" className={style.signup}>
            Signup
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}

import { useAuth } from "../../contexts/authContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";
import style from "./login.module.css";
import { toast } from "react-toastify";

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
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
      toast.success("Login Successful");
      let from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (err) {
      authDispatch({
        type: "ERROR",
        payload: "Wrong Email or Password",
      });
      console.log(err);
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
            onChange={(e) =>
              authDispatch({ type: "EMAIL", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) =>
              authDispatch({ type: "PASSWORD", payload: e.target.value })
            }
          />
        </div>
        <button className={style.loginBtn}>LOGIN</button>
        <button
          className={style.guestLoginBtn}
          onClick={() => {
            authDispatch({ type: "PASSWORD", payload: "rajatgupta" });
            authDispatch({ type: "EMAIL", payload: "rajat@gmail.com" });
          }}
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

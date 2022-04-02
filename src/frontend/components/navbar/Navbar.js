import { FcSearch } from "react-icons/fc";
import { AiFillHeart } from "react-icons/ai";
import { FaBookOpen, FaShoppingCart } from "react-icons/fa";
import "./navbar.css";
import { useAuth, useCart, useWishlist } from "../../contexts/index";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();
  const { authState, authDispatch } = useAuth();
  const { token } = authState;
  const navigate = useNavigate();

  function loginHandler(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    authDispatch({ type: "TOKEN", payload: null });
    navigate("/");
  }
  return (
    <nav className="navigation-container">
      <div className="logo" onClick={() => navigate("/")}>
        <FaBookOpen className="icon-size-small" />
        <span className="font-size-m">Kitab</span>
      </div>

      <div className="nav-search-bar">
        <input
          type="search"
          placeholder="Search..."
          className="nav-search-input"
        ></input>
        <FcSearch />
      </div>
      <div className="nav-options">
        <div className="helloUser">
          <span>Hello User</span>
          <button
            className="button-outlined font-size-s"
            onClick={loginHandler}
          >
            {token ? "Logout" : "Login"}
          </button>
        </div>
        <Link to={token ? "/wishlist" : "/login"}>
          <div className="icon-button">
            <AiFillHeart className="icon-size-large" />
            <span className="icon-button__badge">
              {token ? wishlist.length : 0}
            </span>
          </div>
        </Link>
        <Link to={token ? "/cart" : "/login"}>
          <div className="icon-button">
            <FaShoppingCart className="icon-size-large" />
            <span className="icon-button__badge">
              {token ? cartItems.length : 0}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export { Navbar };

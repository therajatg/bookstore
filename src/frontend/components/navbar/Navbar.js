import { FcSearch } from "react-icons/fc";
import { AiFillHeart } from "react-icons/ai";
import { FaBookOpen, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import "./navbar.css";
import { useAuth, useCart, useWishlist } from "../../contexts/index";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();
  const { authState, authDispatch } = useAuth();
  const { user, token } = authState;
  const navigate = useNavigate();

  function logoutHandler(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({
      type: "TOKEN",
      payload: {
        token: null,
        user: null,
      },
    });
    toast.success("Logout Successful");
    navigate("/home");
  }

  function loginHandler(e) {
    navigate("/login");
  }

  return (
    <nav className="navigation-container">
      <div className="logo" onClick={() => navigate("/home")}>
        <FaBookOpen className="iconSizeSmall" />
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
        {token ? (
          <button
            className="button-outlined font-size-s"
            onClick={logoutHandler}
          >
            Logout
          </button>
        ) : (
          <button
            className="button-outlined font-size-s"
            onClick={loginHandler}
          >
            Login
          </button>
        )}
        <Link to="/profile">
          <FaUserAlt className="iconSizeSmall" title="Profile" />
        </Link>
        <Link to={token ? "/wishlist" : "/login"}>
          <div className="icon-button">
            <AiFillHeart className="iconSizeLarge" title="Wishlist" />
            <span className="icon-button__badge">
              {token ? wishlist.length : 0}
            </span>
          </div>
        </Link>
        <Link to={token ? "/cart" : "/login"}>
          <div className="icon-button">
            <FaShoppingCart className="iconSizeLarge" title="Cart" />
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

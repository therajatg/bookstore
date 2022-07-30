import style from "./profile.module.css";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

export function Profile() {
  const [displayAddress, setDisplayAddress] = useState(false);
  console.log(window.location.pathname);
  return (
    <div className={style.mainDiv}>
      <div className={style.content}>
        <div className={style.title}>
          <Link
            to="/profile"
            onClick={() => setDisplayAddress(false)}
            className={displayAddress ? style.dormant : style.active}
          >
            <FaUserAlt />
            Profile
          </Link>
          <Link
            to="/profile/address"
            onClick={() => {
              setDisplayAddress(true);
            }}
            className={displayAddress ? style.active : style.dormant}
          >
            <MdLocationOn />
            Addresses
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

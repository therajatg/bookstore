import style from "./profile.module.css";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { Outlet, Link, useLocation } from "react-router-dom";

export function Profile() {
  const [displayAddress, setDisplayAddress] = useState(false);
  const { pathname } = useLocation();
  return (
    <div className={style.mainDiv}>
      <div className={style.content}>
        <div className={style.title}>
          <Link
            to="/profile"
            className={pathname === "/profile" ? style.active : style.dormant}
          >
            <FaUserAlt />
            Profile
          </Link>
          <Link
            to="/profile/address"
            className={
              pathname === "/profile/address" ? style.active : style.dormant
            }
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

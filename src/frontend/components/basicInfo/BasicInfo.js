import style from "./basicInfo.module.css";
import { useAuth } from "../../contexts/index";
import { FaUserAlt } from "react-icons/fa";

export function BasicInfo() {
  const {
    authState: { user },
  } = useAuth();

  return (
    <div className={style.detail}>
      <FaUserAlt className={style.icon} />
      <p>First Name: {user?.firstName}</p>
      <p>Last Name: {user?.lastName}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}

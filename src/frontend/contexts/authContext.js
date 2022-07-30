import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

const authContext = createContext();
const useAuth = () => useContext(authContext);

function AuthProvider({ children }) {
  const localStorageToken = localStorage.getItem("token");
  const [authState, authDispatch] = useReducer(authReducer, {
    user: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
    },
    error: null,
    token: localStorageToken ?? null,
  });

  return (
    <authContext.Provider value={{ authState, authDispatch }}>
      {children}
    </authContext.Provider>
  );
}

export { AuthProvider, useAuth };

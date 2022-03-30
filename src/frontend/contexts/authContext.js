import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

const authContext = createContext();
const useAuth = () => useContext(authContext);

function AuthProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, {
    user: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
    },

    error: null,
    token: null,
  });

  return (
    <authContext.Provider value={{ authState, authDispatch }}>
      {children}
    </authContext.Provider>
  );
}

export { AuthProvider, useAuth };

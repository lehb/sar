import { createContext, useMemo, useReducer } from "react";
import authReducer from "./authReducer";
const AuthContext = createContext();
const initialState = {
  user: {
    id:null,
    isAuthenticated: false,
    isAdmin:false,
    email: null,
  },
  tokens:{},
};
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export { AuthContext, AuthContextProvider };

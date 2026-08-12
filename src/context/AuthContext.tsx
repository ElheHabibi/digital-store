import { createContext, useContext, useState } from "react";

interface IAuthProvider {
  children: React.ReactNode;
}

interface IAuthContext {
  isLogin: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}

const AuthContext = createContext({} as IAuthContext);
export const useAuthContext = () => useContext(AuthContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
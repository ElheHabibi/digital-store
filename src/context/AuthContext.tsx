import { createContext, useContext, useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

interface IAuthProvider {
  children: React.ReactNode;
}

interface IAuthContext {
  isLogin: boolean;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
}

const AuthContext = createContext({} as IAuthContext);
export const useAuthContext = () => useContext(AuthContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [isLogin, setIsLogin] = useState(() => {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  });

  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    login(username, password).finally(() => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0IiwibmFtZSI6IkFsaSIsImV4cCI6MTcyMzY1NDgwMH0.4f8s9a2d1f7g6h5j4k3l2m1n0p9q8r7s";
      localStorage.setItem("token", token);
      setIsLogin(true);
      navigate("/");
    });
  };

  //📌 If I had real API:

  // const handleLogin = (username: string, password: string) => {
  //   Login(username, password)
  //     .then((data) => {
  //       localStorage.setItem("token", data.token);
  //       setIsLogin(true);
  //     })
  //     .catch((error) => {
  //       console.error("unsuccessful login", error);
  //     });
  // };

  const handleLogout = () => {
    setIsLogin(false);
    navigate("/login");
    localStorage.removeItem("token");
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

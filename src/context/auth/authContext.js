import { createContext, useContext, useState } from "react";
import { loginService } from "../../services";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [user, setUser] = useState({});

  const loginUser = async (email, password) => {
    if (email && password !== "") {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await loginService(email, password);
        if (status === 200) {
          localStorage.setItem(
            "login",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          setUser({ ...user, ...foundUser });
        }
      } catch (error) {
        console.log("Error in login user", error);
      }
    }
  };
  return (
    <AuthContext.Provider value={{ token, setToken, loginUser, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };

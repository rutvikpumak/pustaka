import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { loginService, signUpService } from "../../services";
import { ACTION_TYPE } from "../../utils";
import { useData } from "../data/dataContext";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);
  const { dataDispatch } = useData();

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
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setUser(foundUser);
        }
      } catch (error) {
        console.log("Error in login user", error);
      }
    }
  };

  const signUpUser = async (email, password, firstName, lastName) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await signUpService(email, password, firstName, lastName);
      if (status === 201) {
        localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify({ user: createdUser }));
        setUser(createdUser);
      }
    } catch (error) {
      console.log("Error in login user", error);
    }
  };

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const { data: address } = await axios.get("api/user/address", {
            headers: {
              authorization: token,
            },
          });
          dataDispatch({
            type: ACTION_TYPE.INITIALIZE_ADDRESS,
            payload: address.address,
          });
        } catch (error) {
          console.log("Error in Add To Address Service");
        }
      })();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, setToken, loginUser, signUpUser, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };

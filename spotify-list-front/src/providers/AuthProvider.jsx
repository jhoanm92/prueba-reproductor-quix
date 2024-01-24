import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { instance } from "../http/axiosConfig";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useLocalStorage("user", null);  
  const [isLogged, setIslogged] = useState(user != null ? true : false);
  const navigate = useNavigate();  

  // call this function when you want to authenticate the user
  const login = async (user) => {    
    const data = await instance.post("/auth/login", user);
    let token = "Bearer " + data.data.access_token;
    setUser(token);    
    instance.defaults.headers.common["Authorization"] = token;
    setIslogged(true);
    if (data.status == 200) {        
        navigate("/canciones", {replace: true});        
    }else{
        alert("Error al iniciar sesion")
    }
  };

  const getToken = () => user;

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    setIslogged(false);          
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      isLogged,
      login,
      logout,
      getToken
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
import React, {
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("shopEaseUser");

    const loggedIn = localStorage.getItem("shopEaseLoggedIn");

    if (savedUser && loggedIn === "true") {
      return JSON.parse(savedUser);
    }

    return null;
  });


  // =========================
  // LOGIN
  // =========================

  const login = (userData) => {
    localStorage.setItem("shopEaseUser", JSON.stringify(userData));
    localStorage.setItem("shopEaseLoggedIn","true");
    setUser(userData);
  };


  // =========================
  // LOGOUT
  // =========================

  const logout = () => {
    localStorage.removeItem("shopEaseLoggedIn");
    setUser(null);
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};
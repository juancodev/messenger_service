import React from "react";

type Users = {
  email: string;
  password: string;
  token: string;
  fullName: string;
};

const AuthContext = React.createContext({});

const AuthProvider = ({ children }: FormComponents): JSX.Element => {
  const [user, setUser] = React.useState({});

  const login = ({ email, password, token }: Users) => {
    setUser({ email, password, token });
  };

  const logout = () => {
    setUser({});
  };

  const register = ({ fullName, email, password }: Users) => {
    setUser({ fullName, email, password });
  };

  const auth = { user, login, logout, register };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

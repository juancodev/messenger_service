import React from "react";

type Users = {
  user: object | string;
  register: (userInformation: object) => void;
  login: (userInformation: object) => void;
};

const AuthContext = React.createContext({});

const AuthProvider = ({ children }: FormComponents): JSX.Element => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    token: "",
    fullName: "",
  });

  const login = (user: any) => {
    return setUser({
      ...user,
      email: user.email,
      password: user.password,
      token: user.token,
      fullName: user.fullName,
    });
  };

  const register = (user: any) => {
    return setUser({
      ...user,
      fullName: user.fullName,
      email: user.email,
      password: user.password,
    });
  };

  const auth: Users = { user, login, register };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = (): any => {
  const userAuth = React.useContext(AuthContext);
  return userAuth;
};

export { AuthContext, AuthProvider, useAuth };

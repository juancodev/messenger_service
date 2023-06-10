import React from "react";

type Users = {
  user: object | string;
  register: (userInformation: object, tokenUser: string) => void;
  login: (userInformation: object, tokenUser: string) => void;
};

const AuthContext = React.createContext({});

const AuthProvider = ({ children }: FormComponents): JSX.Element => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    token: "",
    fullName: "",
  });

  const login = (user: any, token: string) => {
    return setUser({
      ...user,
      email: user.email,
      password: user.password,
      token: token,
    });
  };

  const register = (user: any, token: string) => {
    return setUser({
      ...user,
      fullName: user.fullName,
      email: user.email,
      password: user.password,
      token: token,
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

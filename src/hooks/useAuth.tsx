import React from "react";
import { AuthContext } from "../auth/AuthContext";

const useAuth = () => {
  const user = React.useContext(AuthContext);
  return user;
};

export { useAuth };

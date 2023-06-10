import { useAuth } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

const AuthRouter = ({ children }: FormComponents) => {
  const authUser = useAuth();

  if (authUser.user?.token === "") {
    return <Navigate to="/login" replace={true} />;
  }
  return <>{children}</>;
};

export { AuthRouter };

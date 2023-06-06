import { useAuth } from "../hooks/useAuth";

const AuthRouter = ({ children }: FormComponents) => {
  const authUser = useAuth();

  switch (authUser) {
    case {}:
      console.log("there is not user");
      break;
  }

  return children;
};

export { AuthRouter };

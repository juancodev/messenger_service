import { useState } from "react";
import { Form } from "../form/Form";
import { Link } from "react-router-dom";

const Login = () => {
  const [userLogin, setUserLogin] = useState(true);
  return (
    <>
      <Form titleForm="Login" userCredential={userLogin} />
      <div className="flex w-1/2 gap-[21px]">
        <p className="font-light">Don't an account?</p>
        <Link
          to="/register"
          className="font-bold text-[#CAC61E]"
          onClick={() => {
            setUserLogin(!userLogin);
          }}
        >
          Register
        </Link>
      </div>
    </>
  );
};

export { Login };

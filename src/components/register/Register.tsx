import { useState } from "react";
import { Form } from "../form/Form";
import { Link } from "react-router-dom";

const Register = () => {
  const [userLogin, setUserLogin] = useState(false);
  return (
    <>
      <Form titleForm="Register" userCredential={userLogin} />
      <div className="flex w-1/2 gap-[21px]">
        <p className="font-light">You have an account?</p>
        <Link
          to="/login"
          className="font-bold text-[#CAC61E]"
          onClick={() => {
            setUserLogin(!userLogin);
          }}
        >
          Sign in
        </Link>
      </div>
    </>
  );
};

export { Register };

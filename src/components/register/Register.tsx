import { useState } from "react";
import { Form } from "../form/Form";
import { Link } from "react-router-dom";

const Register = () => {
  const [userLogin, setUserLogin] = useState(false);
  return (
    <>
      <Form titleForm="Register" userCredential={userLogin} />
      <div className="flex w-1/2 gap-[21px] max-sm:w-full max-sm:justify-center max-sm:text-base max-sm:mb-8 max-sm:px-5">
        <p className="font-light">¿Posees cuenta?</p>
        <Link
          to="/login"
          className="font-bold text-[#CAC61E]"
          onClick={() => {
            setUserLogin(!userLogin);
          }}
        >
          Iniciar Sesión
        </Link>
      </div>
    </>
  );
};

export { Register };

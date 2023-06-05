import { Form } from "../form/Form";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Form titleForm="Register" />
      <div className="flex w-1/2 gap-[21px]">
        <p className="font-light">You have an account?</p>
        <Link to="/" className="font-bold text-[#CAC61E]">
          Sign in
        </Link>
      </div>
    </>
  );
};

export { Register };

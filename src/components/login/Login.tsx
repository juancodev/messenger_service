import { Form } from "../form/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Form titleForm="Login" />
      <div className="flex w-1/2 gap-[21px]">
        <p className="font-light">Don't an account?</p>
        <Link to="/register" className="font-bold text-[#CAC61E]">
          Register
        </Link>
      </div>
    </>
  );
};

export { Login };

import { Form } from "../form/Form";

const Login = () => {
  return (
    <>
      <Form titleForm="Login" />
      <div className="flex w-1/2 gap-[21px]">
        <p className="font-light">Don't an account?</p>
        <a href="/register" className="font-bold text-[#CAC61E]">
          Register
        </a>
      </div>
    </>
  );
};

export { Login };

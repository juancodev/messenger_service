import { Form } from "../form/Form";

const Register = () => {
  return (
    <>
      <Form titleForm="Register" />
      <div className="flex w-1/2 gap-[21px]">
        <p className="font-light">You have an account?</p>
        <a href="/" className="font-bold text-[#CAC61E]">
          Sign in
        </a>
      </div>
    </>
  );
};

export { Register };

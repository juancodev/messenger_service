import { useRef } from "react";
import { Button } from "../button/Button";
// const API = "https://api.chat.oha.services";
// const VERSION = "api/v1";

type Forms = {
  titleForm: string;
  userCredential: boolean;
};

const Form = ({ titleForm, userCredential }: Forms) => {
  // const createUser = async (create: boolean) => {
  //   const response = await fetch(`${API}/${VERSION}/token/?create=${create}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       password: "123456789",
  //       first_name: "admin",
  //       last_name: "admin123",
  //       email: "admin@exam.com",
  //     }),
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   return data;
  // };

  // createUser(true);

  const formName = useRef(null);
  const formEmail = useRef(null);
  const formPassword = useRef(null);
  // const formName = useRef(null);

  if (userCredential === false) {
    return (
      <>
        <div className="w-1/2 mt-2.5">
          <h2 className="text-5xl mb-7 font-normal">{titleForm}</h2>
          <form className="mb-5">
            <input
              ref={formName}
              type="text"
              placeholder="Full name"
              className="form-text mb-5 rounded-md w-full"
            />
            <input
              ref={formEmail}
              type="email"
              placeholder="Email"
              className="form-email mb-5 rounded-md w-full"
            />
            <input
              ref={formPassword}
              type="password"
              placeholder="Password"
              className="form-password mb-5 rounded-md w-full"
            />
            <input
              ref={formPassword}
              type="password"
              placeholder="Confirm Password"
              className="form-password rounded-md w-full"
            />
            <Button
              submit={(e: any) => {
                e.preventDefault();
                if (
                  formName.current &&
                  formEmail.current &&
                  formPassword.current
                ) {
                  const fullName = formName.current?.value;
                  const email = formEmail.current?.value;
                  const password = formPassword.current?.value;
                  console.log(formEmail.current);
                  console.log({ fullName, email, password });
                }
              }}
            />
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-1/2 mt-2.5">
          <h2 className="text-5xl mb-7 font-normal">{titleForm}</h2>
          <form className="mb-5">
            <input
              type="email"
              placeholder="Email"
              className="form-email mb-5 rounded-md w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="form-password mb-5 rounded-md w-full"
            />
            <div>
              <input
                type="checkbox"
                name=""
                id="check"
                className="form-checkbox"
              />
              <p className="inline-block ml-3 font-light">
                Forget your password?
              </p>
            </div>
            <Button
              submit={(e) => {
                console.log("submit");
              }}
            />
          </form>
        </div>
      </>
    );
  }
};

export { Form };

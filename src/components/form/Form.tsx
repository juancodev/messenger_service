import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button/Button";
import { useAuth } from "../../auth/AuthContext";
const API = "https://api.chat.oha.services";
const VERSION = "api/v1";

type Props = {
  props: string[] | string | boolean;
  titleForm: string;
  userCredential: boolean | string;
  key: number;
};

type FormsParams = React.ReactElement<Props, string> & Props;

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  isAuthenticated: boolean;
};

type FormElement = FormEvent<HTMLFormElement>;

const Form = (props: FormsParams) => {
  const [formValue, setFormValue] = useState<FormValues>({
    fullName: "",
    email: "",
    password: "",
    isAuthenticated: false,
  });

  const createUser = async (create: boolean) => {
    const response = await fetch(`${API}/${VERSION}/token/?create=${create}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: formValue.password,
        first_name: formValue.fullName,
        last_name: formValue.fullName,
        email: formValue.email,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  // const navigate = useNavigate();

  const auth = useAuth();

  // useEffect(() => {
  //   // if (auth) {
  //   //   // auth.register(formValue);
  //   //   // console.log(auth.user);
  //   // }
  // }, []);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    if (auth) {
      auth?.register(formValue);
    }
    console.log(auth);
    // createUser(true);
    // navigate("/");
  };

  if (props.userCredential === false) {
    return (
      <>
        <div className="w-1/2 mt-2.5">
          <h2 className="text-5xl mb-7 font-normal">{props.titleForm}</h2>
          <form className="mb-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full name"
              className="form-text mb-5 rounded-md w-full"
              onChange={(e) =>
                setFormValue({
                  ...formValue,
                  fullName: e.target.value,
                })
              }
            />
            <input
              type="email"
              placeholder="Email"
              className="form-email mb-5 rounded-md w-full"
              onChange={(e) =>
                setFormValue({
                  ...formValue,
                  email: e.target.value,
                })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className="form-password mb-5 rounded-md w-full"
              onChange={(e) =>
                setFormValue({
                  ...formValue,
                  password: e.target.value,
                })
              }
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-password rounded-md w-full"
              onChange={(e) =>
                setFormValue({
                  ...formValue,
                  password: e.target.value,
                  isAuthenticated: true,
                })
              }
            />
            <Button />
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-1/2 mt-2.5">
          <h2 className="text-5xl mb-7 font-normal">{props.titleForm}</h2>
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
            <Button />
          </form>
        </div>
      </>
    );
  }
};

export { Form };

import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button/Button";
import { useAuth } from "../../auth/AuthContext";
const API = "https://api.chat.oha.services";
const VERSION = "api/v1";

interface PropsComponent {
  titleForm: string;
  userCredential: boolean;
}

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  isAuthenticated: boolean;
};

type FormElement = FormEvent<HTMLFormElement>;

const Form = (props: PropsComponent) => {
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
    return data?.token;
  };

  const navigate = useNavigate();

  const auth = useAuth();

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    if (props.userCredential === false) {
      try {
        createUser(true).then((response) => {
          auth?.register(formValue, response);
          const myToken = response;
          localStorage.setItem("token", myToken);
          navigate("/");
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      if (localStorage.getItem("token") !== "") {
        auth?.login(formValue, localStorage.getItem("token"));
        navigate("/");
      } else {
        alert("User not logged in.");
      }
    }
  };

  if (props.userCredential === false) {
    return (
      <>
        <div className="w-1/2 mt-2.5 max-sm:w-full max-sm:px-5">
          <h2 className="text-5xl max-sm:text-2xl mb-7 font-normal">
            {props.titleForm}
          </h2>
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
        <div className="w-1/2 mt-2.5 max-sm:w-full max-sm:px-5">
          <h2 className="text-5xl max-sm:text-2xl mb-7 font-normal">
            {props.titleForm}
          </h2>
          <form className="mb-5" onSubmit={handleSubmit}>
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
                  isAuthenticated: true,
                })
              }
            />
            <div>
              <input
                type="checkbox"
                name=""
                id="check"
                className="form-checkbox max-sm:hidden"
              />
              <p className="inline-block ml-3 font-light max-sm:w-full max-sm:m-0 max-sm:text-lg max-sm:text-center">
                ¿Olvidaste tu contraseña?
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

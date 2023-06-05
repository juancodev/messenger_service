import React from "react";
import { Button } from "../button/Button";

type Forms = {
  titleForm: string;
};

const Form = ({ titleForm }: Forms) => {
  return (
    <>
      <div className="w-1/2 mt-2.5">
        <h2 className="text-5xl mb-7 font-normal">{titleForm}</h2>
        <form className="mb-5">
          <input
            type="email"
            placeholder="Email"
            className="form-email mb-5 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="form-password mb-5 rounded-md"
          />
          <input type="checkbox" name="" id="check" className="form-checkbox" />
          <p className="inline-block ml-3 font-light">Forget your password?</p>
          <Button />
        </form>
      </div>
    </>
  );
};

export { Form };

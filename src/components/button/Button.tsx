import React from "react";

type ButtonProps = {
  submit?: (e: any) => object | void;
};

const Button = ({ submit }: ButtonProps) => {
  return (
    <>
      <button
        onClick={submit}
        className="block mt-5 py-4 bg-sky-700 w-full rounded-md font-semibold text-xl text-white"
      >
        Sing in
      </button>
    </>
  );
};

export { Button };

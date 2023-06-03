import React, { Children } from "react";
import logo from "../assets/oha_logo.svg";
import imageOha from "../assets/Image.png";

type Forms = {
  children?: JSX.Element[] | JSX.Element;
};

const Layout = ({ children }: Forms): JSX.Element => {
  return (
    <>
      <div className="max-w-full py-20 px-24 bg-[#5F636785]">
        <div className="h-full grid grid-cols-2 bg-white rounded-3xl">
          <div className="container-logo">
            <div className="logo">
              <img className="pt-8 pl-7" src={logo} />
            </div>
            <div className="title text-center mt-7">
              <h3 className="text-3xl">Welcome a Oha App</h3>
            </div>
            <div className="form">{children}</div>
          </div>
          <div className="container-img">
            <img src={imageOha} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export { Layout };

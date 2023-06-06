import React from "react";
import logo from "../assets/oha_logo.svg";
import imageOha from "../assets/Image.png";

const Layout = ({ children }: FormComponents): JSX.Element => {
  return (
    <>
      <div className="max-w-full h-full py-20 px-24 bg-[#5F636785]">
        <div className="h-full grid grid-cols-2 bg-white rounded-3xl">
          <div className="container-logo">
            <div className="logo">
              <img className="pt-8 pl-7" src={logo} />
            </div>
            <div className="title text-center mt-7">
              <h3 className="text-3xl font-bold">
                Welcome a <span className="text-[#7FBCE9]">Oha App</span>
              </h3>
            </div>
            <div className="flex flex-col items-center">{children}</div>
          </div>
          <div className="container-img">
            <img src={imageOha} alt="" />
          </div>
        </div>
        <p className="absolute bottom-[12%] right-[52%] font-light text-base">
          Terms & conditions
        </p>
      </div>
    </>
  );
};

export { Layout };

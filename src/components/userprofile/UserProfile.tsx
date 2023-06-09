import React from "react";
import background from "../../assets/fondo-oha.png";
import logo from "../../assets/oha_logo.svg";
import contact from "../../assets/contact.svg";
import logoMessage from "../../assets/fondo-message.png";

const UserProfile = () => {
  return (
    <>
      <div className={`absolute bg-[url('${background}')]`}>
        <div className="mt-5 ml-5">
          <img src={logo} alt="Logo" />
        </div>
        <div className="mt-5 mx-[75px] grid grid-cols-3">
          <section className="list-contact bg-[#F2F2F2] rounded-2xl">
            <div className="flex flex-col">
              <div className="border-[1px] border-cyan-600 w-1/4 self-center mt-8"></div>
              <div className="image-chat flex mt-[15px] mr-5 mb-[26px] ml-4 p-2.5">
                <div className="image-contact">
                  <img src={contact} alt="" />
                </div>
                <div className="text-cyan-700 font-bold text-lg ml-8">
                  <p className="border-b-2 border-cyan-600">New chat</p>
                </div>
              </div>
            </div>
            <div className="container-list-contact mx-5 bg-white p-2.5">
              <div className="online">
                <p>Online</p>
              </div>
              <div className="contact">
                {/* component contacts */}
                <div className="image-chat">
                  <img src={contact} alt="" />
                </div>
                <div className="name-email">
                  <div className="name">
                    <p>Jane Cooper</p>
                  </div>
                  <div className="email">
                    <p>jane@email.com</p>
                  </div>
                </div>
                <div className="time-new-message">
                  <div className="time">
                    <p>12:00</p>
                  </div>
                  <div className="new-Message">
                    <p>1</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="messages col-start-2 col-end-4 bg-white">
            {/* Component Message*/}
            <div className="container-message">
              <div className="image-bg-message">
                <img src={logoMessage} alt="" />
              </div>
              <div className="title-bg-message">
                <p>Welcome!</p>
              </div>
              <div className="paragraph">
                <p>Start Chat</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export { UserProfile };

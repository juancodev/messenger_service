import React from "react";
import background from "../../assets/fondo-oha.png";
import logo from "../../assets/oha_logo.svg";
import contact from "../../assets/contact.svg";
import logoMessage from "../../assets/fondo-message.png";

const UserProfile = () => {
  return (
    <>
      <div className="absolute">
        <img src={background} alt="" />
      </div>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <section className="list-contact">
          <div>line</div>
          <div className="image-chat">
            <div className="image-contact">
              <img src={contact} alt="" />
            </div>
            <div className="new-chat">
              <p>New chat</p>
            </div>
          </div>
          <div className="container-list-contact">
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
        <section className="messages">
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
    </>
  );
};

export { UserProfile };

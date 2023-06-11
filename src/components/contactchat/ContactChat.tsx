import React, { useEffect, useState, useCallback } from "react";
import logoMessage from "../../assets/fondo-message.png";
import contactIcon from "../../assets/contact.svg";
import iconButton from "../../assets/Vector.svg";
const API = "https://api.chat.oha.services";
const VERSION = "api/v1";

type PropsStateContact = {
  stateContact: boolean;
  nameContact: any;
};

const ContactChat = ({ stateContact, nameContact }: PropsStateContact) => {
  const [messageInput, setMessageInput] = useState<string>("");

  const messageContent: Array<string> = [];

  const token = localStorage.getItem("token");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      content: messageInput,
    }),
  };
  const sendMessage = async () => {
    const response = await fetch(
      `${API}/${VERSION}/users/${nameContact.id}/send-message/`,
      options
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    try {
      sendMessage().then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getStoredMessages: string[] | undefined | any =
    localStorage.getItem("messages");
  const getMessages = JSON.parse(getStoredMessages);

  const handleMessage = () => {
    messageContent.push(messageInput);
    const messages = JSON.stringify(messageContent);
    localStorage.setItem("messages", messages);
    setMessageInput("");
  };

  if (stateContact) {
    return (
      <>
        <div className="chat w-full h-full flex flex-col justify-between">
          <div className="flex bg-[#F2F2F2] rounded-tr-lg pt-5 pb-4 pl-24 gap-2.5">
            <div className="image-contact ">
              <img src={contactIcon} alt="" />
            </div>
            <div className="name-contact">
              <p className="text-lg">{nameContact?.name}</p>
              <p className="text-sm font-bold text-[#737373]">Online</p>
            </div>
          </div>
          <div className="bg-gradient-to-t from-[#FFFFFFF7] to-[#0078A7] h-full py-4">
            <div className="chat-time text-end mx-5">
              <div className="text-center text-xs mb-8 mt-28">
                <p className="py-1.5 px-3.5 bg-white inline-block rounded-full font-semibold">
                  today
                </p>
              </div>
              <div className="py-[19px] px-[19px] bg-white inline-block rounded-l-lg rounded-br-3xl">
                <p className="text-[15px] font-base">Hi there, How are you?</p>
              </div>
              <div className="time-chat mt-1.5">
                <p className="font-bold text-xs text-white">9:20 AM</p>
              </div>
              {getMessages !== "" ? (
                <>
                  <div className="py-[19px] px-[19px] bg-[#11348F] rounded-l-lg rounded-br-3xl text-white mt-3.5 text-start w-[15%]">
                    <p className="text-[15px] inline-block font-base">
                      {getMessages[0]}
                    </p>
                  </div>
                  <div className="time-chat mt-1.5 text-start">
                    <p className="font-bold text-xs text-white">9:20 AM</p>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="message-box flex justify-between bg-[#C4C4C4] pt-4 pl-4 pb-10 pr-5">
            <div className="message w-[89%]">
              <input
                type="text"
                value={messageInput}
                className="h-full form-text w-full bg-[#F2F2F2] rounded-[21px] py-3 shadow-[inset_-1px_2px_5px_rgba(0,0,0,0.2)] border-none"
                placeholder="Writing icon..."
                onChange={(e) => {
                  setMessageInput(e.target.value);
                }}
              />
            </div>
            <button
              className="bg-cyan-600 pt-3 pb-2 px-2.5 rounded-[21px] border-none"
              onClick={handleMessage}
            >
              <img src={iconButton} alt="" />
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-9 w-3/5 h-3/6 bg-[rgba(0,120,167,0.24)] rounded-full">
            <div className="image-bg-message">
              <img src={logoMessage} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <div className="font-bold text-4xl">
                <p>¡Bienvenido!</p>
              </div>
              <div className="border-b-[1px] border-[#E4BF4C] w-1/2 my-5"></div>
              <div className="paragraph font-light text-lg text-[#5F6367]">
                <p>Comienza un chat</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export { ContactChat };

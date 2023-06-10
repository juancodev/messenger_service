import { useEffect, useState } from "react";
import logo from "../../assets/oha_logo.svg";
import contactIcon from "../../assets/contact.svg";
import logoMessage from "../../assets/fondo-message.png";
import { useAuth } from "../../auth/AuthContext";
const API = "https://api.chat.oha.services";
const VERSION = "api/v1";

const UserProfile = () => {
  const [contact, setContact] = useState([]);

  const auth = useAuth();
  const { user } = auth;

  const options = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const getUsers = async () => {
    const response = await fetch(`${API}/${VERSION}/users/`, options);
    const data = await response.json();
    return data.results;
  };

  useEffect(() => {
    getUsers().then((response) => {
      setContact(response);
    });
  }, []);

  return (
    <>
      <div className="absolute bg-[url('src/assets/fondo-oha.png')]">
        <div className="mt-5 ml-5">
          <img src={logo} alt="Logo" />
        </div>
        <div className="mt-5 mx-[75px] grid grid-cols-3">
          <section className="list-contact bg-[#F2F2F2] rounded-2xl">
            <div className="flex flex-col">
              <div className="border-[1px] border-cyan-600 w-1/4 self-center mt-8"></div>
              <div className="image-chat flex mt-[15px] mr-5 mb-[26px] ml-4 p-2.5">
                <div className="image-contact">
                  <img src={contactIcon} alt="" />
                </div>
                <div className="text-cyan-700 font-bold text-lg ml-8">
                  <p className="border-b-2 border-cyan-600">Nuevo chat</p>
                </div>
              </div>
            </div>
            <div className="container-list-contact mx-5 bg-white p-2.5 shadow-[inset_0px_2px_5px_rgba(0,0,0,0.4)]">
              <div className="text-cyan-700 font-bold text-lg">
                <p className="border-b-2 border-cyan-600 inline-block">
                  En Línea
                </p>
              </div>
              <div className="contacts mt-3.5 flex flex-col">
                {contact.map((contacts: any) => (
                  <>
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <div className="image-chat">
                          <img src={contactIcon} alt="" />
                        </div>
                        <div key={contacts.uuid} className="name-email">
                          <div className="name font-bold text-lg">
                            <p>{contacts.first_name}</p>
                          </div>
                          <div className="email font-bold text-[11px] text-[#737373]">
                            <p>{contacts.email}</p>
                          </div>
                        </div>
                      </div>
                      <div className="time-new-message">
                        <div className="time text-xs">
                          <p>{contacts.updated_at.slice(11, -16)}pm</p>
                        </div>
                        <div className="new-Message text-end font-bold text-white text-xs">
                          <p className="bg-cyan-700 rounded-full inline-block p-1 mt-1">
                            {/* {contact.newMessage} */}1
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-[#C1B7B7] w-1/4 self-center my-2"></div>
                  </>
                ))}
              </div>
            </div>
          </section>
          <section className="messages col-start-2 col-end-4 bg-white">
            {/* Component Message*/}
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
          </section>
        </div>
      </div>
    </>
  );
};

export { UserProfile };

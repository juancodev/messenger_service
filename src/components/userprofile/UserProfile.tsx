import { useEffect, useState } from "react";
import logo from "../../assets/oha_logo.svg";
import contactIcon from "../../assets/contact.svg";
import { useAuth } from "../../auth/AuthContext";
import { ContactChat } from "../contactchat/ContactChat";
const API = "https://api.chat.oha.services";
const VERSION = "api/v1";

const UserProfile = () => {
  const [contact, setContact] = useState([]);
  const [chatContact, setChatContact] = useState<boolean>(false);
  const [nameContact, setNameContact] = useState<string>("");

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
      <div className="md:absolute bg-[url('src/assets/fondo-oha.png')] max-sm:max-w-full max-sm:block">
        <div className="mt-5 ml-5 max-sm:my-5">
          <img src={logo} alt="Logo" />
        </div>
        <div className="mt-5 mx-[75px] grid grid-cols-3 max-sm:grid-cols-1 max-sm:m-0">
          <section className="bg-[#F2F2F2] rounded-2xl max-sm:w-full max-sm:shadow-[0_1px_2px_5px_rgba(0,0,0,0.2)]">
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
            <div className="container-list-contact mx-5 bg-white p-2.5 shadow-[inset_0px_2px_5px_rgba(0,0,0,0.4)] max-sm:p-0">
              <div className="text-cyan-700 font-bold text-lg max-sm:ml-11">
                <p className="border-b-2 border-cyan-600 inline-block max-sm:pt-5">
                  En Línea
                </p>
              </div>
              <div className="contacts mt-3.5 flex flex-col max-sm:pr-16">
                {contact.map((contacts: any) => (
                  <>
                    <div
                      className="flex justify-between hover:cursor-pointer"
                      onClick={() => {
                        setChatContact(true);
                        setNameContact(contacts.first_name);
                      }}
                    >
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
          <section className="messages col-start-2 col-end-4 bg-white max-sm:hidden">
            {/* Component Message*/}
            <ContactChat stateContact={chatContact} nameContact={nameContact} />
          </section>
        </div>
      </div>
    </>
  );
};

export { UserProfile };

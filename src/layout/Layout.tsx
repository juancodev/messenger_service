import logo from "../assets/oha_logo.svg";
import imageOha from "../assets/Image.png";
import { useAuth } from "../auth/AuthContext";
import { UserProfile } from "../components/userprofile/UserProfile";

const Layout = ({ children }: FormComponents): JSX.Element => {
  const auth = useAuth();

  if (auth.user?.token !== "") {
    return (
      <>
        <UserProfile />
      </>
    );
  } else {
    return (
      <>
        <div className="max-w-full max-h-full full-screen:max-h-full max-sm:px-9 max-sm:py-14 py-20 px-24 bg-[#5F636785]">
          <div className="max-h-full grid lg:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-1 bg-white rounded-3xl">
            <div className="container-logo">
              <div className="max-md:hidden">
                <img className="pt-8 pl-7" src={logo} />
              </div>
              <div className="text-center mt-7 max-md:text-start max-md:ml-5 max-md:mb-5">
                <h3 className="text-3xl max-md:text-sm font-bold">
                  Bienvenido a <span className="text-[#7FBCE9]">Oha App</span>
                </h3>
              </div>
              <div className="flex flex-col items-center">{children}</div>
            </div>
            <div className="container-img max-sm:w-full max-sm:h-full md:w-full">
              <img
                src={imageOha}
                alt="Image"
                className="max-sm:h-full max-sm:w-full max-sm:object-cover md:w-full xl:w-full full-screen:w-full"
              />
            </div>
          </div>
          <p className="absolute max-lg:hidden lg:hidden xl:block full-screen:hidden bottom-[12%] right-[52%] font-light text-base">
            Terms & conditions
          </p>
        </div>
      </>
    );
  }
};

export { Layout };

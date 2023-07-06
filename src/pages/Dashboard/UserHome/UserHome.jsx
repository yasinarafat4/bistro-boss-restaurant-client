import { FaWallet } from "react-icons/fa";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiOutlineShop } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="w-11/12 overflow-auto">
        <h2
          style={{ fontFamily: "Cinzel, serif" }}
          className="text-3xl font-extrabold mb-4"
        >
          Hi {user.displayName}, Welcome Back!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center ms-20 lg:ms-0">
          <div className="w-8/12 lg:w-full h-32 bg-gradient-to-r from-purple-500 to-pink-200 rounded-lg flex items-center justify-center">
            <div className="text-white text-4xl  lg:text-3xl xl:text-5xl mr-4 p-2">
              <FaWallet />
            </div>
            <div>
              <p className="text-white text-2xl xl:text-3xl font-bold">205</p>
              <h2 className="text-white text-xl font-bold mb-2">Menu</h2>
            </div>
          </div>

          <div className="w-8/12 lg:w-full h-32 bg-gradient-to-r from-yellow-600 to-yellow-200 rounded-lg flex items-center justify-center">
            <div className="text-white text-5xl  lg:text-4xl xl:text-5xl mr-4">
              <AiOutlineShop />
            </div>
            <div>
              <p className="text-white text-3xl font-bold">103</p>
              <h2 className="text-white text-xl font-bold mb-2">Shop</h2>
            </div>
          </div>

          <div className="w-8/12 lg:w-full h-32 bg-gradient-to-r from-pink-600 to-pink-200 rounded-lg flex items-center justify-center">
            <div className="text-white text-5xl  lg:text-4xl xl:text-5xl mr-4">
              <BsFillTelephoneForwardFill />
            </div>
            <div>
              <p className="text-white text-3xl font-bold">03</p>
              <h2 className="text-white text-xl font-bold mb-2">Contact</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;

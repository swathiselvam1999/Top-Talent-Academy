import { useState } from "react";
import BGImage from "../images/BGImage.png";
import Logo from "../images/Logo-1.png";
import award from "../images/award.png";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [inputUserID, setInputUserID] = useState("");
  const [isFocusedUserID, setIsFocusedUserID] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const floatLabelUserID = isFocusedUserID || inputUserID.trim() !== "";
  const floatLabelPassword = isFocusedPassword || inputPassword.trim() !== "";

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${BGImage})` }}
    >
<div className="min-h-screen z-20 flex justify-center items-center p-10 "
    style={{
    background: 'linear-gradient(to bottom right, rgba(0, 114, 167, 0.5), rgba(106, 78, 151, 0.85))'
  }}
>
      {/* innerbg */}
        <div className=" md:max-w-3xl w-full md:h-full bg-[#DFF3FF] rounded-tl-[5em] rounded-tr-xl rounded-br-[5em] rounded-bl-xl flex flex-col md:flex-row p-6 md:p-10">
          <div className="flex flex-col md:flex-row flex-grow md:grid md:grid-cols-2 gap-8 w-full">
            {/* Left Side */}
            <div className="relative flex flex-col justify-center items-center px-8 w-full">
              <div className="bg-[#F1FFFE] p-7 rounded-full shadow-lg">
                <img src={Logo} alt="Logo" className="w-16 h-auto" />
              </div>
              <p 
                className="text-center text-[#085072] text-xl font-bold font-nunito py-5"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}
                >
                Student Login
              </p>

              <form className="flex flex-col gap-5 w-full">
                {/* User ID Input */}
                <div className="relative w-full">
                  <input
                    type="text"
                    value={inputUserID}
                    onChange={(e) => setInputUserID(e.target.value)}
                    onFocus={() => setIsFocusedUserID(true)}
                    onBlur={() => setIsFocusedUserID(false)}
                    className="px-4 py-2 rounded-xl shadow-lg w-full focus:outline focus:outline-[#008FCE]"
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 text-[#085072] z-10
                      ${floatLabelUserID ? "text-xs -top-2.5 bg-[#DFF3FF] rounded-sm px-1" : "text-xs top-3 bg-white"}`}
                  >
                    User Id
                  </label>
                </div>

                {/* Password Input */}
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    onFocus={() => setIsFocusedPassword(true)}
                    onBlur={() => setIsFocusedPassword(false)}
                    className="px-4 py-2 rounded-xl shadow-lg w-full focus:outline focus:outline-[#008FCE]"
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 text-[#085072] z-10
                      ${floatLabelPassword ? "text-xs -top-2.5 bg-[#DFF3FF] rounded-sm px-1" : "text-xs top-3 bg-white"}`}
                  >
                    Password
                  </label>
                  <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer text-sm"
                    onClick={() => setShowPassword(!showPassword)}
                    title={showPassword ? "Hide Password" : "Show Password"}
                  >
                    {showPassword ? <FiEye /> : <FiEyeOff />}
                  </div>
                </div>

                <a href="#" className="text-[#085072] text-sm text-left">
                  Forgot Password?
                </a>

                <button className="bg-[#008FCE] text-[#F1FFFE] py-2 rounded-3xl w-[10rem] md:w-[14em] mx-auto">
                  Login
                </button>
              </form>
            </div>

            {/* Right Side */}
            <div className="relative flex flex-col items-center px-8">
              <p className="absolute top-0 left-10 md:left-5 leading-snug tracking-widest text-[#085072]  text-2xl md:text-3xl font-serif">
                <span className="block">Success</span>
                <span className="block">Starts</span>
                <span className="block">Here...</span>
              </p>
              <img src={award} alt="Award" className="w-3/5 md:w-full h-auto ml-24 md:ml-28 mt-10" />

              <div className=" text-center">
                <p className="text-[#434C52] text-sm my-2">
                  Don't have an account?
                </p>
                <button 
                  className="mt-2 bg-[#F1FFFE] border border-[#008FCE] px-10 py-2 rounded-3xl text-sm text-[#008FCE] font-bold">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

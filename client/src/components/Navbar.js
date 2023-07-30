import { useState } from "react";

import Wrapper from "../assets/wrappers/Navbar";
import { FaUserAlt, FaMoon } from "react-icons/fa";
import MainLogo from "./MainLogo";
import UserWindow from "./UserWindow";

const Navbar = (props, { handleToggle, isToggleLang }) => {
  const [showWindow, setShowWindow] = useState(false);

  const handleButtonClick = () => {
    setShowWindow(!showWindow);
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <MainLogo />
        <div className="btn-container">
          <button type="button" onClick={handleToggle}>
            {isToggleLang ? "Ar" : "En"}
          </button>
          <FaMoon />
          <FaUserAlt onClick={handleButtonClick} />
        </div>
        {showWindow && (
          <UserWindow
            userPage={props.userPage}
            setUserPage={props.setUserPage}
            setShowWindow={setShowWindow}
            isToggleLang={isToggleLang}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default Navbar;

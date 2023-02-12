import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Toggle } from '.';

import { useStateContext } from "../context/index";
import { CustomButton } from ".";
import { useNavigate } from "react-router-dom";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();
  const navigate = useNavigate();
  const { connect, address } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1100) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 ">
     

     {screenSize >= 1100 ? (
            <NavButton
            title="Menu"
            customFunc={handleActiveMenu}
            color={currentColor}
            icon={<AiOutlineMenu />}
          />
          ) : (
            <div>
              
            </div>
          )}

      



      <div className="flex">
        {/* <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />*/}

        {/* <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} /> */}

        {/* <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} /> */}

        {/* <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent> */}

        {/* {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)} */}


       {/* CAMBIO DE FONDO */}
           <div className="flex-1 sm:pr-12 sm:pt-2">
          <Toggle/>
        </div>
          {/* CAMBIO DE FONDO */}

        <div className="sm:flex hidden flex-row justify-end gap-4 sm:pr-28">
          <span className="font-semibold dark:text-white text-black pt-3">
            {" "}
            Wallet:{" "}
          </span>
          <span className="font-semibold dark:text-white text-black pt-2">
            {" "}
            <BiWallet size={30} />{" "}
          </span>
          <CustomButton
            btnType="button"
            title={address ? address : "Connect"}
            styles={address ? "bg-[#65b58e] cursor-default" : "bg-[#8c6dfd]"}
            handleClick={() => {
              if (address) "";
              else connect();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

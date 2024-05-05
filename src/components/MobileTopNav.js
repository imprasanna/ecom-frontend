import React from "react";
import logo from "../utils/logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setHomeActive,
  setSearchActive,
  setCartActive,
  setAccountActive,
} from "../store/slices/MobNavSlice";
import { setMenuOpen, hideCrossIcon } from "../store/slices/NavSlice";
import HamMenu from "./HamMenu";
import "../styles/mobiletopnav.css";

const MobileTopNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenuClick = () => {
    dispatch(setMenuOpen(true));
    dispatch(hideCrossIcon(false));
  };

  const handleLogoClick = () => {
    dispatch(setHomeActive(true));
    dispatch(setSearchActive(false));
    dispatch(setCartActive(false));
    dispatch(setAccountActive(false));
    navigate("/");
  };

  return (
    <div>
      <div className="w-full lg:hidden">
        <div className="mobile-top-nav-wrapper">
          <HamMenu />

          <div className="h-[50px] flex items-center justify-between">
            <HiOutlineMenu
              onClick={handleMenuClick}
              className="lg:hidden ml-2 text-2xl text-black"
            />
            <img
              onClick={handleLogoClick}
              className="logo w-[35%] md:w-[19%] lg:w-[20%] 2xl:w-[15%]"
              src={logo}
              alt="logo"
            />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTopNav;

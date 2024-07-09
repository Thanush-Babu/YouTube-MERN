import React, { useState } from "react";
import "./Navbar.css";

import { RiVideoAddLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import Search_Bar from "./SearchBar/Search_Bar";
import Logo_and_menu from "./Logo_and_menu/Logo_and_menu";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import Auth from "../../Pages/Auth/Auth";

function Navbar({toggledrawer,setEditCreateChannelBtn}) {
  const [authButton, setAuthButton] = useState(true);
  // const CurrentUser = null  ;
  const CurrentUser = {
    result: {
      name: "babu",
      email: "babuponnusamy72@gmail.com",
      channel: "Thunder Spark Gaming",
    },
  };

  return (
    <>
      {/* NavBar CONTAINER start */}
      <div className="Container_Navbar">
        {/* Navbar-LEFT start*/} {/* (BURGER, LOGO AND BRANDING) */}
        <Logo_and_menu />
        {/* Navbar-CENTER Start */} {/* (Search) */}
        <Search_Bar CurrentUser={CurrentUser} />
        {/* Navbar-RIGHT Start */} {/*  (Profile) */}
        <div className="navbar-right">
          <button className="create-button">
            <RiVideoAddLine />
          </button>
          <button className="notifications-button">
            <i className="fas fa-bell"></i>
            <span className="notification-count">9</span>
          </button>
          <div className="auth_cont_navbar">
            {CurrentUser ? (
              <>
                <div className="Channel_logo" onClick={(e) => setAuthButton(true)}>
                  <button className="profile-button">
                    {CurrentUser.result.name ? (
                      <>{CurrentUser.result.name.charAt(0).toUpperCase()}</>
                    ) : (
                      <>{CurrentUser.result.email.charAt(0).toUpperCase()}</>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <>
                <button className="auth_button">
                  <BiUserCircle size={25} />
                  <b> Sign in</b>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {/* NavBar Container End */}
      {
        authButton &&
        <Auth setAuthButton={setAuthButton} setEditCreateChannelBtn={setEditCreateChannelBtn} CurrentUser={CurrentUser}/>
      }
    </>
  );
}

export default Navbar;

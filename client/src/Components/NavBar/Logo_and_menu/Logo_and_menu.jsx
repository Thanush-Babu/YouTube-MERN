import React from "react";
import logo from "../../../assets/images/logo/youtube_logo.png";

function Logo_and_menu() {
  return (
    <>
      <div className="navbar-left">
        {/* Burger */}
        <div className="Burger">
          <span class="material-symbols-outlined">menu</span>
        </div>

        {/* LOGO AND  BRANDING*/}
        <div className="Logo_And_Branding">
          <div className="Youtube_Logo">
            <img src={logo} alt="youtube_logo" height={29} width={29} />
          </div>
          <div className="branding">
            <p className="pathway-gothic-one-regular">YouTube</p>
          </div>
          <sup>IN</sup>
        </div>
      </div>
    </>
  );
}

export default Logo_and_menu;

import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineHome,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineExplore,
} from "react-icons/md";
import "./LeftSideBar.css";
import shorts from "../../assets/images/logo/shorts.png";

function LeftSideBar() {
  return (
    <>
      <div className="container-LeftSideBar">
        <NavLink to={"/"} className="icon_LeftSideBar_div">
          <MdOutlineHome size={22} className="icon_SideBar" />
          <div className="icon-text">Home</div>
        </NavLink>

        <div className="icon_LeftSideBar_div">
          <img src={shorts} width={22} alt="Shorts" className="icon_SideBar" />
          <div className="icon-text">Shorts</div>
        </div>

        <div className="icon_LeftSideBar_div">
          <MdOutlineSubscriptions size={22} className="icon_SideBar" />
          <div className="icon-text">Subscriptions</div>
        </div>

        <div className="icon_LeftSideBar_div">
          <MdOutlineExplore size={22} className="icon_SideBar" />
          <div className="icon-text">Explore</div>
        </div>

        <NavLink to={"/"} className="icon_LeftSideBar_div">
          <MdOutlineVideoLibrary size={22} className="icon_SideBar" />
          <div className="icon-text">Library</div>
        </NavLink>
      </div>
    </>
  );
}

export default LeftSideBar;

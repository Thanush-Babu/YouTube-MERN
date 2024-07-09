import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import { BiLogOut } from "react-icons/bi";
const Auth = ({ setEditCreateChannelBtn, setAuthButton, CurrentUser }) => {
  return (
    <>
      <div className="Auth_container" onClick={(e) => setAuthButton(false)}>
        <div className="Auth_container2">
          {/* User Details */}
          <div className="User_Details">
            <div className="Channel_Logo">
              <div className="FirstChar_Logo">
                {CurrentUser?.result.name ? (
                  <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                ) : (
                  <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                )}
              </div>
            </div>
            <div className="channelName_and_email">
              <div className="channelName_Auth">
                {CurrentUser?.result.channel.toUpperCase()}
              </div>
              <div className="email_Auth">{CurrentUser?.result.email}</div>
              <br />
              {CurrentUser?.result.name ? (
                <>
                  {
                    <Link to={"/"} className="channel_btn">
                      View your channel
                    </Link>
                  }
                </>
              ) : (
                <>
                  {
                    <input
                      type="submit"
                      className="channel_btn"
                      value="Create your own channel"
                      onClick={(e) => setEditCreateChannelBtn(true)}
                    />
                  }
                </>
              )}
            </div>
          </div>

          {/* Auth Buttons*/}
          <div className="btns_Auth">
            <div className="btns_Auth_inner">
              <div className="log_out_btn btn_Auth">
                <BiLogOut size={22} />
                &nbsp; Sign out
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;

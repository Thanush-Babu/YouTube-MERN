import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Allroutes from "./Routes/Allroutes";
import Navbar from "./Components/NavBar/Navbar";
import DrawerSliderBar from "./Components/LeftSideBar/DrawerSliderBar";

function App() {
  const [toggleDrawerSideBar, setToggleDrawerSideBar] = useState({
    display: "none",
  });

  const toggledrawer = () => {
    if (toggleDrawerSideBar.display === "none") {
      setToggleDrawerSideBar({
        display: "flex",
      });
    } else {
      setToggleDrawerSideBar({
        display: "none",
      });
    }
  };

  const [videoUploadPage, setVideoUploadPage] = useState(false);
  const [editCreateChannelBtn, setEditCreateChannelBtn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar
          setEditCreateChannelBtn={setEditCreateChannelBtn}
          toggledrawer={toggledrawer}
        />
        <DrawerSliderBar toggledrawer={toggledrawer} toggleDrawerSideBar={toggleDrawerSideBar}/>
        <Allroutes />
      </Router>
    </div>
  );
}

export default App;

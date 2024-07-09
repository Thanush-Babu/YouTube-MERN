import React from "react";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import "./Home.css";

function Home() {
  const navlist = [
    "All",
    "Superhero Movies",
    "Anime",
    "Comedy",
    "Python",
    "Javascript",
    "C++",
    "ReactJS",
    "Gaming",
    "Music",
    "Coding",
  ];
  return (
    <>
      <div className="container_Pages_App">
        <LeftSideBar />
        <div className="container2_Pages_App">
          <ul className="navigation_Home">
            {navlist.map((item) => {
              return (
                <li key={item} className="btn_nav_home">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      .
    </>
  );
}

export default Home;

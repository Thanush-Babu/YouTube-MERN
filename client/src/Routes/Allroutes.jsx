import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Allroutes;

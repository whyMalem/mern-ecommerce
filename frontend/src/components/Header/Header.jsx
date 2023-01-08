import React from "react";
import HeaderBottom from "./HeaderBottom";

import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <HeaderTop />
      <Navbar />
      <HeaderBottom />
    </>
  );
};

export default Header;

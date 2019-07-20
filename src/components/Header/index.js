import React from "react";
import "./index.css";

import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <img src={Logo} alt="logo" />
        <input type="search" placeholder="Buscar na Netfake" />
      </nav>
    </div>
  );
};

export default Header;

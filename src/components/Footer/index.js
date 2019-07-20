import React from "react";
import "./index.css";

import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>2019</span>
      <a href="pedroribeiro.dev" target="_blank">
        Pedro Ribeiro
      </a>
    </footer>
  );
};

export default Footer;

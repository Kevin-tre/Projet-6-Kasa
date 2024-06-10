import React from "react";
import Logofooter from "../../assets/images/Logo-footer.png";
import "../footer/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img src={Logofooter} alt="Logo du site Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

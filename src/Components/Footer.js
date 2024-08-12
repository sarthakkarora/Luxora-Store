import React from "react";
import "./footer.css";
import Logo from "../imgs/rlogo.png";

function Footer() {
  return (
    <>
      <div className="footer">
        
      </div>
      <div className="extra-data">
        <div className="link-section">
          <div className="first-row">
            <p className="bold">Get to Know Us</p>
            <p>Make Money with Us</p>
            <p>Luxora Payment</p>
            <p>Let Us Help You</p>
          </div>
          <div className="second-row">
            <p className="bold">About Luxora</p>
            <p>Sell products on Luxora</p>
            <p>Luxora Business Card</p>
            <p>Luxora and COVID-19</p>
          </div>
          <div className="third-row">
            <p className="bold">Connect with Us</p>
            <p>Sell apps on Luxora</p>
            <p>Shop with Points</p>
            <p>Shipping Rates & Policies</p>
          </div>
          <div className="fourth-row">
            <p className="bold">Luxora Cares</p>
            <p>Become an Affiliate</p>
            <p>Reload Your Balance</p>
            <p>Returns & Replacements</p>
          </div>
        </div>
        <div className="link-section2">
          <div className="first-one">
            <div className="first-row">
              <p className="bold">Get to Know Us</p>
              <p>Make Money with Us</p>
              <p>Luxora Payment</p>
              <p>Let Us Help You</p>
            </div>
            <div className="second-row">
              <p className="bold">About Luxora</p>
              <p>Sell products on Luxora</p>
              <p>Luxora Business Card</p>
              <p>Luxora and COVID-19</p>
            </div>
          </div>
          <div className="second-one">
            <div className="third-row">
              <p className="bold">Connect with Us</p>
              <p>Sell apps on Luxora</p>
              <p>Shop with Points</p>
              <p>Shipping Rates & Policies</p>
            </div>
            <div className="fourth-row">
              <p className="bold">Luxora Cares</p>
              <p>Become an Affiliate</p>
              <p>Reload Your Balance</p>
              <p>Returns & Replacements</p>
            </div>
          </div>
        </div>
        <div className="developer">
          <img src={Logo} className="luxora-img" />
          <div className="dev-data">
            <p>&copy; 2024 | Developed by </p>
            <a
              className="dev-link"
              href="https://github.com/sarthakkarora"
              target="_blank"
            >
              Sarthak Arora
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

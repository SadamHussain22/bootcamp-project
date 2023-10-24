import React from "react";
 
import { styled } from "styled-components";

import image from "./navecompenets/images/wood-logo-white-reserve.svg";
import { Link } from "react-router-dom";

function Footer() {
  const Nav = styled.nav`
   /* Footer.css */
.footer {
  background-color: #343a40;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-logo img {
  height: 40px;
}

.footer-links {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.footer-link {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
}

.footer-copyright {
  font-size: 14px;
  margin-top: 10px;
}

/* Add more styles as needed */



`;
  return (
    <Nav>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img className="img1" src={image} alt="Logo" />
        </div>
        <div className="footer-links">
          <Link to="/about-us" className="footer-link">
            ABOUT US
          </Link>
          <Link to="/privacy-policy" className="footer-link">
            PRIVACY POLICY
          </Link>
          <Link to="/shipping" className="footer-link">
            ABOUT SHIPPING
          </Link>
          <Link to="/track-order" className="footer-link">
            TRACK ORDER
          </Link>
          <Link to="/faqs" className="footer-link">
            FAQs
          </Link>
        </div>
        <div className="footer-copyright">
          <a href="https://xtemos.com/" className="footer-link">
            Xtemos Studio &copy; 2022
          </a>
        </div>
      </div>
    </footer>
    </Nav>
  );
}

export default Footer;

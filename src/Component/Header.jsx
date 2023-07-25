import React from "react";
import Logo from "../Assets/Icon.jpg";
function Header() {
  return (
    <div>
      <div>
        <a href="/">
          <img src={Logo} className="logo" alt="Icon" />
        </a>
      </div>

      <div className="header-menu">
        <a href="/" className="menu">
          Home
        </a>

        <a href="/features" className="menu">
          Why UpTrack?
        </a>

        <a href="/pricing" className="menu">
          Pricing
        </a>

        <a href="/team" className="menu">
          Team
        </a>

        <a href="/contactemail" className="menu">
          Contact Us
        </a>

        <button type="text" className="button">
          <a
            href="/appstore"
            style={{ textDecoration: "none", color: "white" }}
          >
            View App Store
          </a>
        </button>
      </div>
    </div>
  );
}

export default Header;

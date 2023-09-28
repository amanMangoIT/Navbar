import logo from "./assets/logo.svg";
import { links, social } from "./data";
import React, { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggle = () => {
    console.log(linksRef.current.getBoundingClientRect());
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" className="logo" />
            <button onClick={toggle} className="nav-toggle">
              <FaBars />
            </button>
          </div>

          <div
            className="links-container"
            ref={linksContainerRef}
            style={linkStyles}
          >
            <ul ref={linksRef} className="links">
              {links.map((item) => {
                const { id, url, text } = item;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* social links */}
          <ul className="social-icons">
            {social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

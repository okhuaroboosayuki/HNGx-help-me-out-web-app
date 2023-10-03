import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export const Header = () => {
  const [burgerBarClass, setBurgerBarClass] = useState("burger_bar unclicked");
  const [menuToggle, setMenuToggle] = useState(false);

  const showMenu = () => {
    if (!menuToggle) {
      setBurgerBarClass("burger_bar clicked");
      setMenuToggle(true);
    } else {
      setBurgerBarClass("burger_bar unclicked");
      setMenuToggle(false);
    }
    setMenuToggle(!menuToggle);
  };

  //check if window width is greater than 1022px
  const checkWindowWidth = () => {
    if (window.innerWidth > 300) {
      setMenuToggle(false);
      setBurgerBarClass("burger_bar unclicked");
    }
  };
  window.addEventListener("resize", checkWindowWidth);

  return (
    <header>
      <nav>
        <Link to={"/"} className="logo">
          <img src="/images/helpmeout-logo.svg" alt="logo" />
        </Link>

        <ul className="header_nav_lists">
          <li className="header_nav_list">
            <a href="http://">Features</a>
          </li>
          <li className="header_nav_list">
            <a href="http://">How It Works</a>
          </li>
        </ul>

        <div className="cta">
          <a href="http://">Get Started</a>
        </div>
      </nav>

      <div className="responsive_menu_icon" onClick={showMenu}>
        <div className={burgerBarClass}></div>
        <div className={burgerBarClass}></div>
        <div className={burgerBarClass}></div>
      </div>

      {menuToggle && (
        <nav className="mobile_menu">
          <ul className="mobile_header_nav_lists">
            <li className="mobile_header_nav_list">
              <a href="http://">Features</a>
            </li>
            <li className="mobile_header_nav_list">
              <a href="http://">How It Works</a>
            </li>
          </ul>

          <div className="mobile_cta">
            <a href="http://">Get Started</a>
          </div>
        </nav>
      )}
    </header>
  );
};

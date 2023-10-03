import "./footer.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to={"/"}>
          <img src="/images/helpmeout-logo-white.svg" alt="logo" />
        </Link>

        <ul className="footer_nav">
          <li className="footer_nav_list">
            <ul className="footer_nav_list_card">
              <h4>Menu</h4>
              <li>
                <a href="http://">Home</a>
              </li>
              <li>
                <a href="http://">Converter</a>
              </li>
              <li>
                <a href="http://">How it Works</a>
              </li>
            </ul>
          </li>
          <li className="footer_nav_list">
            <ul className="footer_nav_list_card">
              <h4>About us</h4>
              <li>
                <a href="http://">About</a>
              </li>
              <li>
                <a href="http://">Contact Us</a>
              </li>
              <li>
                <a href="http://">Privacy Policy</a>
              </li>
            </ul>
          </li>
          <li className="footer_nav_list">
            <ul className="footer_nav_list_card">
              <h4>Screen Record</h4>
              <li>
                <a href="http://">Browser Window</a>
              </li>
              <li>
                <a href="http://">Desktop</a>
              </li>
              <li>
                <a href="http://">Application</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="copyright">
        
      </div>
    </footer>
  );
};

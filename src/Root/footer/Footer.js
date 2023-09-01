import { NavLink } from "react-router-dom";

import classes from "./Footer.module.css";

import logo from "../../img/logo.png";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaUserAlt,
  FaTruck,
  FaShoppingCart,
  FaHeart,
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaBook,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className={classes.about}>
        <div className={classes.imgContainer}>
          <img src={logo} alt="logo" />
          <h2>
            <span>Ninja</span> Cars
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora
          error veritatis. Adipisicing elit. Nihil tempora.
        </p>
        <div className={classes.socials}>
          <button>
            <NavLink href="#">
              <FaFacebookF className={classes.icon} />
            </NavLink>
          </button>
          <button>
            <NavLink href="#">
              <FaTwitter className={classes.icon} />
            </NavLink>
          </button>
          <button>
            <NavLink href="#">
              <FaInstagram className={classes.icon} />
            </NavLink>
          </button>
        </div>
      </div>
      <div className={classes.sites}>
        <div className={classes.site}>
          <h3>My Account</h3>
          <ul>
            <li>
              <FaUserAlt className={classes.siteIcon} />
              <NavLink to="#"> Account</NavLink>
            </li>
            <li>
              <FaTruck className={classes.siteIcon} />
              <NavLink to="#">Order</NavLink>
            </li>
            <li>
              <FaShoppingCart className={classes.siteIcon} />
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <FaHeart className={classes.siteIcon} />
              <NavLink to="#">Favourite</NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.site}>
          <h3>Pages</h3>
          <ul>
            <li>
              <FaHome className={classes.siteIcon} />
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <FaInfoCircle className={classes.siteIcon} />
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <FaPhone className={classes.siteIcon} />
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <FaBook className={classes.siteIcon} />
              <NavLink to="#">Terms & Conditions</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

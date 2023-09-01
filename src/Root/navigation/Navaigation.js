import { useState, useEffect } from "react";

import Modal from "../../Modals/Modal";

import { NavLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCartXFill, BsFillCartCheckFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import classes from "./Navigation.module.css";
import logo from "../../img/logo.png";

function Navigation({ products, dispatch, cartProducts }) {
  const [openModal, setOpenModal] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const closeHamburgerMenu = () => {
    setOpenHamburger(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 650) {
        closeHamburgerMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className={`${openHamburger ? classes.active : undefined}`}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <div className={`${classes.navbar} ${openHamburger && classes.active}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Contact
          </NavLink>
        </div>
        <div className={`${classes.icons} ${openHamburger && classes.active}`}>
          <div className={classes.heartContainer}>
            <NavLink to="/">
              <span className={classes.favCounter}>{products.length}</span>
              <AiFillHeart
                className={`${classes.icon} ${classes.heart}`}
                onClick={openModalHandler}
              />
            </NavLink>
          </div>
          <div className={classes.cartContainer}>
            <span className={classes.cartCounter}>{cartProducts.length}</span>
            <NavLink to="/cart">
              {cartProducts.length > 0 ? (
                <BsFillCartCheckFill className={classes.icon} />
              ) : (
                <BsFillCartXFill className={classes.icon} />
              )}
            </NavLink>
          </div>
          <NavLink to="/">
            <BiLogIn className={classes.icon} />
          </NavLink>
        </div>
        <button
          className={classes.hamburgerMenu}
          onClick={() => setOpenHamburger(() => !openHamburger)}
        >
          {openHamburger ? (
            <GrClose className={classes.icon} />
          ) : (
            <FaBars className={classes.icon} />
          )}
        </button>
      </nav>

      {openModal && (
        <Modal
          close={closeModalHandler}
          products={products}
          dispatch={dispatch}
        />
      )}
    </>
  );
}

export default Navigation;

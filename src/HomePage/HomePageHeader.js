import { NavLink } from "react-router-dom";

//Styles
import classes from "./home-page-styles/HomePageHeader.module.css";

//Imgs
import header from "../img/header.png";

function HomePageHeader() {
  return (
    <div className={classes.headerContainer}>
      <div
        className={classes.textContainer}
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <h1>
          <span>Ninja </span>Cars
        </h1>
        <h2>Buy your best car easly</h2>
        <p>Best Cars Marketplace</p>
        <div className={classes.btnWrapper}>
          <NavLink to="/products" className={classes["my-super-cool-btn"]}>
            <div className={classes["dots-container"]}>
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>
              <div className={classes.dot}></div>
            </div>
            <span>Go!</span>
          </NavLink>
        </div>
      </div>
      <div className={classes.imgContainer}>
        <img
          src={header}
          alt="Lamborgini"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        />
      </div>
    </div>
  );
}

export default HomePageHeader;

import { NavLink } from "react-router-dom";

import classes from "./HomePageNewProduct.module.css";

import newProduct from "../img/newProduct.png";

import { GiCarWheel } from "react-icons/gi";

function HomePageNewProduct() {
  return (
    <section className={classes.sectionNewProduct}>
      <div
        className={classes.newProductContainer}
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-once="false"
      >
        <div className={classes.textContainer}>
          <h3>Newest Product Added</h3>
          <h2>Jeep Wrangler SUV, 2022 </h2>
          <p>55 000 €</p>
          <NavLink to="/products">
            Go to Shop! <GiCarWheel className={classes.wheelIcon} />
          </NavLink>
        </div>
        <div className={classes.imgContainer}>
          <img src={newProduct} alt="Jeep Wrangler" />
        </div>
      </div>
    </section>
  );
}

export default HomePageNewProduct;

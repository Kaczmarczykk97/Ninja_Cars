import { useState } from "react";

import CartPageProduct from "./CartPageProduct";

//Styles
import classes from "./cart-page-styles/CartPage.module.css";

//Imgs
import emptyCart2 from "../img/emptyCart2.png";

function CartPage({ cartProducts, dispatchCart }) {
  const [allAddedPrice, setAllAddedPrice] = useState(0);
  let totals = [];

  const addTotalPrice = (value) => {
    if (!totals.some((total) => total.key === value.key)) {
      totals = [...totals, value];
    }
    if (totals.some((total) => total.key === value.key)) {
      totals = totals.map((total) =>
        total.key === value.key
          ? { ...total, totalPrice: value.totalPrice }
          : total
      );
    }
    setAllAddedPrice(totals.reduce((sum, total) => sum + total.totalPrice, 0));
  };

  return (
    <section className={classes.sectionCart}>
      {cartProducts.length > 0 ? (
        <h2 className={classes.cartHeading}>#CART</h2>
      ) : (
        <h2 className={classes.cartHeading}>#CART IS EMPTY</h2>
      )}
      <div
        className={
          cartProducts.length > 0 ? classes.productsContainer : classes.empty
        }
      >
        {cartProducts.length === 0 && (
          <img
            src={emptyCart2}
            alt="Empty cart"
            className={classes.emptyCart}
          />
        )}
        {cartProducts.map((cartProduct) => (
          <CartPageProduct
            key={cartProduct.key}
            content={cartProduct}
            dispatchCart={dispatchCart}
            addTotalPrice={addTotalPrice}
          />
        ))}
        {cartProducts.length > 0 && (
          <h2 className={classes.cartTotalPrice}>
            Cart Total Price: {allAddedPrice} €
          </h2>
        )}
      </div>
    </section>
  );
}

export default CartPage;

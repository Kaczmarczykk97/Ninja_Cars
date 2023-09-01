//Styles
import classes from "./cart-page-styles/CartPage.module.css";

function Price({ allAddedPrice }) {
  return (
    <h2 className={classes.cartTotalPrice}>
      Cart Total Price: {allAddedPrice} €
    </h2>
  );
}

export default Price;

import classes from "./CartPage.module.css";
function Price({ allAddedPrice }) {
  return (
    <h2 className={classes.cartTotalPrice}>
      Cart Total Price: {allAddedPrice} €
    </h2>
  );
}

export default Price;

import { useState } from "react";

import classes from "./CartPageProduct.module.css";

import { FaTrash } from "react-icons/fa";

function CartPageProduct({ content, dispatchCart, addTotalPrice }) {
  const [quantity, setQuantity] = useState(1);

  let extended = {
    ...content,
  };

  const addProduct = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const substractProduct = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };

  const deleteProduct = () => {
    setQuantity(1);
    dispatchCart({ type: "DELETE", payload: { content: content } });
  };

  function formatNumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  const calculateTotalPrice = (quantity) => {
    const str = content.price;
    const number = parseInt(str.replace(/\D/g, ""));
    extended.totalPrice = number * quantity;
    addTotalPrice(extended);
    const formattedNumber = formatNumberWithSpaces(number * quantity);
    return `${formattedNumber} €`;
  };

  const validation = (value) => {
    const numberValue = +value;
    if (value === "" || (numberValue > 0 && Number.isFinite(numberValue))) {
      setQuantity(numberValue);
    }
    if (numberValue === 0) {
      setQuantity("");
    }
  };

  return (
    <div className={classes.productCard}>
      <button className={classes.deleteProductBtn} onClick={deleteProduct}>
        <FaTrash className={classes.deleteProductIcon} />
      </button>
      <div className={classes.imgContainer}>
        <img src={content.img} alt={content.text} />
      </div>
      <div className={classes.textContainer}>
        <h2>{content.text}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
          reiciendis at fuga esse quia provident natus unde in ipsa pariatur.
        </p>
        <h3>
          <span>Price: </span>
          {content.price}
        </h3>
        <h3>
          <span>Total Price: </span>
          {calculateTotalPrice(quantity)}
        </h3>
        <div className={classes.inputWrapper}>
          <button className={classes.addBtn} onClick={addProduct}>
            +
          </button>
          <input
            value={quantity}
            type="text"
            inputMode="numeric"
            onChange={(event) => validation(event.target.value)}
          />
          <button className={classes.subBtn} onClick={substractProduct}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPageProduct;

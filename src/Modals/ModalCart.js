import classes from "./ModalCart.module.css";

import { FaTrash } from "react-icons/fa";

function ModalCart({ product, dispatch }) {
  const deleteProduct = () => {
    dispatch({ type: "DELETE", payload: { product: product } });
  };

  return (
    <div className={classes.productContainer}>
      <button className={classes.deleteProductBtn} onClick={deleteProduct}>
        <FaTrash className={classes.deleteProductIcon} />
      </button>
      <div className={classes.imgContainer}>
        <img src={product.img} alt={product.text} />
      </div>
      <div className={classes.textContainer}>
        <h4>{product.title}</h4>
        <h2>{product.text}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
          reiciendis at fuga esse quia provident natus unde in ipsa pariatur
          sequi quos voluptatibus cum maiores molestiae quaerat corporis
          doloremque dolorum?
        </p>
        <h3>{product.price}</h3>
        <button className={classes.cartBtn}>Add to cart</button>
      </div>
    </div>
  );
}

export default ModalCart;

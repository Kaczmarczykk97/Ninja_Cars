import { useState } from "react";

import ModalProduct from "../ModalProduct";

import classes from "./ProductPageProduct.module.css";

import { AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

function ProductPageProduct({ content, dispatch, dispatchCart }) {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const openedModal = () => {
    setOpenModal(true);
  };

  const addProductHandler = () => {
    dispatch({ type: "ADD", payload: { content: content } });
  };

  const addProductToCartHandler = () => {
    dispatchCart({ type: "ADD_TO_CART", payload: { content: content } });
  };

  return (
    <div
      className={classes.productContainer}
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="false"
    >
      <div className={classes.imgContainer}>
        <img src={content.img} alt={content.text} />
      </div>
      <hr />
      <h4>{content.title}</h4>
      <p>{content.text}</p>
      <p className={classes.price}>{content.price}</p>
      <div className={classes.productOptions}>
        <button className={classes.productBtn} onClick={addProductHandler}>
          <AiFillHeart className={`${classes.productIcon} ${classes.heart}`} />
        </button>
        <button className={classes.productBtn} onClick={openedModal}>
          <FaEye className={classes.productIcon} />
        </button>
        <button className={classes.productBtn}>
          <BsFillCartFill
            className={classes.productIcon}
            onClick={addProductToCartHandler}
          />
        </button>
      </div>

      {openModal && (
        <ModalProduct
          close={closeModal}
          details={content}
          addProductToCartHandler={addProductToCartHandler}
        />
      )}
    </div>
  );
}

export default ProductPageProduct;

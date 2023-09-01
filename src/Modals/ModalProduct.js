import React from "react";
import ReactDOM from "react-dom";

import classes from "./ModalProduct.module.css";

import { GrClose } from "react-icons/gr";

const Backdrop = ({ close }) => {
  return <div className={classes.backdrop} onClick={close}></div>;
};

const ModalOverlay = ({ details, close, addProductToCartHandler }) => {
  return (
    <div className={classes.modal}>
      <button className={classes.closeBtn} onClick={close}>
        <GrClose className={classes.icon} />
      </button>
      <div className={classes.modalWrapper}>
        <div className={classes.imgContainer}>
          <img src={details.img} alt={details.text} />
        </div>
        <div className={classes.textContainer}>
          <h4>{details.title}</h4>
          <h2>{details.text}</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
            reiciendis at fuga esse quia provident natus unde in ipsa pariatur
            sequi quos voluptatibus cum maiores molestiae quaerat corporis
            doloremque dolorum?
          </p>
          <h3>{details.price}</h3>
          <button className={classes.cartBtn} onClick={addProductToCartHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

function ModalProduct({ close, details, addProductToCartHandler }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop close={close} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          details={details}
          close={close}
          addProductToCartHandler={addProductToCartHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ModalProduct;

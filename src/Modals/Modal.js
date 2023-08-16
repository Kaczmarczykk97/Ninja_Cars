import React from "react";
import ReactDOM from "react-dom";

import ModalCart from "./ModalCart";

import classes from "./Modal.module.css";

import { GrClose } from "react-icons/gr";
import { BsFillSuitHeartFill } from "react-icons/bs";
import emptyCart from "../img/emptyCart.png";

const Backdrop = ({ close }) => {
  return <div className={classes.backdrop} onClick={close}></div>;
};

const ModalOverlay = ({ close, products, dispatch }) => {
  return (
    <div className={classes.modal}>
      <button className={classes.closeBtn} onClick={close}>
        <GrClose className={classes.icon} />
      </button>
      <div className={classes.modalContent}>
        {products.length === 0 ? (
          <div className={classes.emptyContainer}>
            <h2 className={classes.empty}>
              You haven't added your favorite product yet.
            </h2>
            <img
              src={emptyCart}
              alt="empty cart"
              className={classes.emptyCartImg}
            />
          </div>
        ) : (
          <h2 className={classes.empty}>
            You favorite products <BsFillSuitHeartFill />
          </h2>
        )}
        {products.map((product) => (
          <ModalCart product={product} key={product.key} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

function Modal({ close, products, dispatch }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop close={close} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay close={close} products={products} dispatch={dispatch} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default Modal;

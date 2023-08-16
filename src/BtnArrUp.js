import classes from "./BtnArrUp.module.css";

import { BiSolidUpArrow } from "react-icons/bi";

function BtnArrUp() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} className={classes.btnArrowUp}>
      <BiSolidUpArrow className={classes.iconBtnArrowUp} />
    </button>
  );
}

export default BtnArrUp;

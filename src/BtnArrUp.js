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
    <button onClick={scrollToTop}>
      <BiSolidUpArrow className={classes.icon} />
    </button>
  );
}

export default BtnArrUp;

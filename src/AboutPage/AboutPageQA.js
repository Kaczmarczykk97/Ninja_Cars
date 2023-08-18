import { useState } from "react";

import classes from "./AboutPageQA.module.css";

import { BiSolidUpArrow } from "react-icons/bi";

function AboutPageQA({ QA }) {
  const [open, setOpen] = useState(false);

  const openAnswearHandler = () => {
    setOpen((open) => !open);
  };

  return (
    <div className={classes.question}>
      <div className={classes.questionContainer} onClick={openAnswearHandler}>
        <div className={`${classes.iconContainer} ${open && classes.open}`}>
          <BiSolidUpArrow className={classes.arrQuestion} />
        </div>
        <p className={classes.questionText}>{QA.question}</p>
      </div>
      {open && (
        <div className={classes.answearContainer}>
          <p className={classes.answearText}>{QA.answear}</p>
        </div>
      )}
    </div>
  );
}

export default AboutPageQA;

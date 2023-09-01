//Styles
import classes from "./about-page-styles/AboutPageNotes.module.css";

function AboutPageNotes({ noteContent }) {
  return (
    <div
      className={classes.noteWrapper}
      data-aos="fade-down-right"
      data-aos-duration="1500"
      data-aos-once="false"
    >
      <div className={classes.noteImgContainer}>
        <img src={noteContent.img} alt="Car" />
      </div>
      <div className={classes.noteTextContainer}>
        <h3 className={classes.noteTextH3}>{noteContent.title}</h3>
        <h4 className={classes.noteTextH4}>{noteContent.secondTitle}</h4>
        <p className={classes.noteTextP}>{noteContent.text}</p>
      </div>
    </div>
  );
}

export default AboutPageNotes;

import classes from "./AboutPageService.module.css";

function AboutPageService({ serviceContent }) {
  return (
    <div
      className={classes.serviceCard}
      data-aos="fade-down-left"
      data-aos-duration="1500"
      data-aos-once="false"
    >
      <serviceContent.icon className={classes.serviceIcon} />
      <h4 className={classes.serviceH4}>{serviceContent.title}</h4>
      <p className={classes.serviceP}>{serviceContent.text}</p>
      <hr />
      <button className={classes.readMoreBtn}>Read More</button>
    </div>
  );
}

export default AboutPageService;

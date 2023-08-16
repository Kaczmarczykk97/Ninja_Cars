import classes from "./HomePageItem.module.css";

function HomePageItem({ data }) {
  return (
    <div className={classes.item}>
      <div className={classes.itemContainer}>
        <div
          className={classes.imgContainer}
          data-aos="flip-left"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          <img src={data.img} alt="products" />
        </div>
        <p className={classes.itemAbout}>{data.amount} products</p>
      </div>
      <div className={classes.textContainer}>
        {<data.icon className={classes.icon} />}
        <div className={classes.textWrapper}>
          <h4>{data.heading}</h4>
          <p>{data.text}</p>
        </div>
      </div>
    </div>
  );
}

export default HomePageItem;

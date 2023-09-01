//Styles
import classes from "./about-page-styles/AboutPageWelcome.module.css";

//Imgs
import welcome from "../img/welcome.jpg";
import map from "../img/map.jpg";

function AboutPageWelcome() {
  return (
    <>
      <div
        className={classes.welcomeCard}
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-once="false"
      >
        <div className={classes.cardImgContainer}>
          <img src={welcome} alt="Car mechanic" />
        </div>
        <p className={classes.welcomeCardText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          reprehenderit. Facere porro magni quod, nemo suscipit at architecto
          commodi molestiae corrupti odio, debitis vero ducimus in animi est
          inventore. Molestias.
        </p>
        <p className={classes.welcomeCardText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolore
          tempore delectus sequi, laudantium nisi dolor animi enim obcaecati
          reprehenderit! Expedita accusantium cumque maiores odit perspiciatis
          asperiores atque, consequatur necessitatibus?
        </p>
        <button className={classes.welcomeBtn}>More Details</button>
      </div>
      <div
        className={classes.welcomeCardNewsAndHours}
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-once="false"
      >
        <div className={classes.cardNews}>
          <div className={classes.cardNewsWrapper}>
            <h4 className={classes.welcomeH4}>NEWS</h4>
            <div className={classes.dateContainer}>
              <p className={classes.dateContainerText}> 09 of July 2023</p>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              enim totam asperiores laboriosam delectus aperiam voluptatem
              officia voluptatibus. Cum sed adipisci hic perferendis iure.
              Dolorum odit dignissimos suscipit in ut!
            </p>
          </div>
          <div className={classes.cardNewsWrapper}>
            <div className={classes.dateContainer}>
              <p className={classes.dateContainerText}> 15 of July 2023</p>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              enim totam asperiores laboriosam delectus aperiam voluptatem
              officia voluptatibus. Cum sed adipisci hic perferendis iure.
              Dolorum odit dignissimos suscipit in ut!
            </p>
          </div>
        </div>
        <div className={classes.cardHours}>
          <h4 className={classes.welcomeH4}>Our Hours:</h4>
          <div className={classes.hoursContainer}>
            <p>Monday-Friday: 7:00-16:00</p>
            <p>Saturday: 10:00-16:00</p>
            <p>Sunday: 10:00-16:00</p>
          </div>
          <div className={classes.mapContainer}>
            <h4 className={classes.welcomeH4}>Location:</h4>
            <img src={map} alt="Map" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              enim totam asperiores laboriosam delectus aperiam voluptatem
              officia voluptatibus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPageWelcome;

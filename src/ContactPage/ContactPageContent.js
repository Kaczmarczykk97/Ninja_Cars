import { useState } from "react";

//Styles
import classes from "./contact-page-styles/ContactPageContent.module.css";

//Imgs
import spinner from "../img/spinner.png";

//Icons
import { MdPhone, MdMail } from "react-icons/md";

function ContactPageContent() {
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  return (
    <section className={classes.sectionContact}>
      <h2 className={classes.sectionTitle}>#Contact</h2>
      <div
        className={classes.contactWrapper}
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-once="false"
      >
        <div className={classes.contactCards}>
          <div
            className={classes.contactCard}
            data-aos="flip-left"
            data-aos-duration="1500"
            data-aos-delay="1000"
            data-aos-once="true"
          >
            <div className={classes.iconContainer}>
              <MdPhone className={classes.icon} />
            </div>
            <h3>Phone:</h3>
            <h2>+48 123 456 789</h2>
          </div>
          <div
            className={classes.contactCard}
            data-aos="flip-left"
            data-aos-duration="1500"
            data-aos-delay="1000"
            data-aos-once="true"
          >
            <div className={classes.iconContainer}>
              <MdMail className={classes.icon} />
            </div>
            <h3>Email:</h3>
            <h2>kamil.kaczmarczykk@gmail.com</h2>
          </div>
        </div>
        <div className={classes.map}>
          {!mapLoaded && (
            <img src={spinner} className={classes.spinner} alt="Spinner" />
          )}
          <iframe
            onLoad={handleMapLoad}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5009.204265573271!2d17.033360309642596!3d51.1158005413065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9d955a31883%3A0xe8473c13af04dfb3!2sConcordia%20Design%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1691159246118!5m2!1spl!2spl"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactPageContent;

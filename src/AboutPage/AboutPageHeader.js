import classes from "./AboutPageHeader.module.css";

import { HiOutlineUserGroup } from "react-icons/hi";
import { FaSmileBeam } from "react-icons/fa";
import { GiLaurelCrown } from "react-icons/gi";
import { BsFillLightningFill } from "react-icons/bs";

function AboutPageHeader() {
  return (
    <div
      className={classes.aboutHeader}
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-once="false"
    >
      <div className={classes.sliderTextWrapper}>
        <div className={classes.textContainer}>
          <div className={classes.titleWrapper}>
            <h2 className={classes.textContainerH2}>
              <span>Ninja</span> Cars
            </h2>
            <h3 className={classes.textContainerH3}>A few words about us:</h3>
          </div>
          <div className={classes.aboutUsWrapper}>
            <div className={classes.aboutUs}>
              <HiOutlineUserGroup className={classes.icon} />
              <p className={classes.textContainerText}>The best crew</p>
            </div>
            <div className={classes.aboutUs}>
              <FaSmileBeam className={classes.icon} />
              <p className={classes.textContainerText}>Happy clients</p>
            </div>
            <div className={classes.aboutUs}>
              <GiLaurelCrown className={classes.icon} />
              <p className={classes.textContainerText}>Experience</p>
            </div>
            <div className={classes.aboutUs}>
              <BsFillLightningFill className={classes.icon} />
              <p className={classes.textContainerText}>Fast repairs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPageHeader;

import AboutPageHeader from "./AboutPageHeader";
import AboutPageNotes from "./AboutPageNotes";
import AboutPageService from "./AboutPageService";
import AboutPageWelcome from "./AboutPageWelcome";

import classes from "./AboutPageContent.module.css";

import notes from "./notes";
import services from "./services";

function AboutPageContent() {
  return (
    <section className={classes.sectionAbout}>
      <AboutPageHeader />

      <div className={classes.notesContainer}>
        {notes.map((note, index) => (
          <AboutPageNotes noteContent={note} key={index} />
        ))}
      </div>

      <div className={classes.servicesContainer}>
        <h3 className={classes.serviceH3}>Our Services</h3>
        <div className={classes.serviceWrapper}>
          {services.map((service, index) => (
            <AboutPageService serviceContent={service} key={index} />
          ))}
        </div>
      </div>

      <div className={classes.welcomeContainer}>
        <h3 className={classes.welcomeH3}>
          Welcome to <span>Ninja</span> Cars
        </h3>
        <div className={classes.welcomeWrapper}>
          <AboutPageWelcome />
        </div>
      </div>
    </section>
  );
}

export default AboutPageContent;

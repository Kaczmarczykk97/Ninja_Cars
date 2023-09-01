import AboutPageHeader from "./AboutPageHeader";
import AboutPageNotes from "./AboutPageNotes";
import AboutPageService from "./AboutPageService";
import AboutPageWelcome from "./AboutPageWelcome";
import AboutPageQA from "./AboutPageQA";

//Styles
import classes from "./about-page-styles/AboutPageContent.module.css";

//Data
import notes from "../data/notes.js";
import services from "../data/services.js";

const questionsAndAnswears = [
  {
    question: "1. What financing options are available for purchasing a car?",
    answear:
      "We understand that every customer's financial situation is unique. That's why we provide a range of financing options to accommodate different budgets and preferences. Whether you're interested in traditional auto loans, leasing, or special promotions, our team is dedicated to finding the best solution for you.",
  },
  {
    question: "2. Do you offer warranties for used cars?",
    answear:
      "Yes, we stand behind the quality of our used cars. All our pre-owned vehicles come with comprehensive warranties to provide you with peace of mind. Our warranties cover a variety of components, ensuring that you're protected from unexpected repairs and can enjoy your vehicle with confidence.",
  },
  {
    question:
      "3. What documents are required for purchasing or trading in a vehicle?",
    answear:
      "When purchasing a vehicle, you'll need to bring valid identification (such as a driver's license or passport), proof of insurance, and any necessary payment. Our team will guide you through the paperwork process, making it smooth and hassle-free.",
  },
  {
    question: "4. Do you provide post-sale service and repair options?",
    answear:
      "Absolutely, our commitment to your satisfaction doesn't end when you drive off the lot. We offer a comprehensive post-sale service experience, including routine maintenance, repairs, and genuine OEM parts. Our skilled technicians are here to ensure your vehicle remains in optimal condition for years to come.",
  },
  {
    question: "5. Is it possible to test drive a car before making a purchase?",
    answear:
      "Certainly, we encourage you to take a test drive to experience the vehicle firsthand. Test drives allow you to evaluate the vehicle's performance, comfort, and features. Our knowledgeable staff will accompany you during the test drive and answer any questions you may have, helping you make an informed and confident decision.",
  },
];

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

      <div className={classes.qaContainer}>
        <h3 className={classes.headingH3}>FAQ</h3>
        {questionsAndAnswears.map((questionAndAnswear, index) => {
          return <AboutPageQA QA={questionAndAnswear} key={index} />;
        })}
      </div>
    </section>
  );
}

export default AboutPageContent;

import HomePageItem from "./HomePageItem";

import classes from "./HomePageItems.module.css";

//Icons
import { CiDeliveryTruck } from "react-icons/ci";
import { BiEuro } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";

//Imgs
import suv from "../img/suv.png";
import sedan from "../img/sedan.png";
import tire from "../img/tire.png";
import motorbike from "../img/motorbike.png";

const items = [
  {
    img: suv,
    amount: 6,
    icon: CiDeliveryTruck,
    heading: "Free Shipping",
    text: "Order above 50 000 €",
    key: 1,
  },
  {
    img: sedan,
    amount: 8,
    icon: BiEuro,
    heading: "Return & Refund",
    text: "Money back gaurenty",
    key: 2,
  },
  {
    img: motorbike,
    amount: 3,
    icon: TbDiscount2,
    heading: "Member Discount",
    text: "10% discount",
    key: 3,
  },
  {
    img: tire,
    amount: 6,
    icon: MdSupportAgent,
    heading: "Customer Support",
    text: "24/7 customer support",
    key: 4,
  },
];

function HomePageItems() {
  return (
    <section className={classes.sectionIntro}>
      <div
        className={classes.itemsContainer}
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-once="false"
      >
        {items.map((item) => {
          return <HomePageItem data={item} key={item.key} />;
        })}
      </div>
    </section>
  );
}

export default HomePageItems;

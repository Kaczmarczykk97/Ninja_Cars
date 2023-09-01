import { GiCarDoor, GiBatteryPack, GiStopwatch } from "react-icons/gi";
import { FaTools, FaKey } from "react-icons/fa";

const textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum labore repellat magnam nemo minima maiores, ullam adipisci vel fuga odit quia debitis facilis corporis ab, nostrum veritatis inventore. Nihil.";

const services = [
  { title: "Car Tuning", text: textContent, icon: GiCarDoor },
  { title: "Battery Diagnostics", text: textContent, icon: GiBatteryPack },
  { title: "Reapir Service", text: textContent, icon: FaTools },
  { title: "Urgent Repairs", text: textContent, icon: GiStopwatch },
  { title: "Car Key Repair", text: textContent, icon: FaKey },
];

export default services;

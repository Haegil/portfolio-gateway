import {aboutMe} from "../utils/aboutMe.js";
import AboutCard from "./AboutCard.jsx";

export default function AboutMe() {
  return (
    <article>
      {aboutMe.map((item) => (
        <AboutCard key={item.id} aboutMe={item}/>
      ))}
    </article>
  )
};
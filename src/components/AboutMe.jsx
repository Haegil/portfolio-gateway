import {aboutMe} from "../utils/aboutMe.js";
import AboutCard from "./AboutCard.jsx";

export default function AboutMe() {
  return (
    <article className={"grid w-4/5 grid-cols-1 gap-4 md:grid-cols-2"}>
      {aboutMe.map((item) => (
        <AboutCard key={item.id} aboutMe={item}/>
      ))}
    </article>
  )
};

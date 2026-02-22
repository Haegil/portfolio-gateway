import Card from "./Card.jsx";
import {projects} from "../utils/projects.jsx"
import {useState} from "react";
import Modal from "./Modal.jsx";
import Introduce from "./Introduce.jsx";
import SectionName from "./SectionName.jsx";
import LinkCard from "./LinkCard.jsx";
import github from "../assets/images/icons/github.svg";
import styles from "../assets/css/Introduce.module.css";
import AboutMe from "./AboutMe.jsx";
import SkillsCard from "./SkillsCard.jsx";
import {skills} from "../utils/skills.js";

export default function Main() {
  const [cardId, setCardId] = useState(0);

  const updateCardId = (id) => {
    setCardId(id);
  }

  return (
    <main>
      <section className={"flex flex-col justify-center items-center pt-32 pb-16 "
        + styles.sectionBg}>
        <Introduce></Introduce>
      </section>
      <section id={"about-me-section"}
               className={"flex flex-col justify-center items-center pb-16 bg-amber-200"}>
        <SectionName>ABOUT ME</SectionName>
        <AboutMe></AboutMe>
      </section>
      <section id={"skills-section"}
               className={"flex flex-col justify-center items-center bg-rose-400 pb-16"}>
        <SectionName>SKILLS</SectionName>
        {skills.map((s) => (
          <SkillsCard key={s.id} skills={s}></SkillsCard>
        ))}
      </section>
      <section id={"projects-section"}
               className={"flex flex-col justify-center items-center bg-blue-300 pb-16"}>
        <SectionName>PROJECTS</SectionName>
        <div className={"flex flex-col gap-4 p-4 justify-center items-center md:flex-row md:flex-wrap"}>
          {projects.map((p) => (<Card key={p.id} project={p} updateCardId={updateCardId}></Card>))}
          {cardId !== 0 && (<Modal cardId={cardId} updateCardId={updateCardId}></Modal>)}
        </div>
      </section>
      <section id={"links-section"} className={"flex flex-col justify-center items-center bg-gray-600 pb-16"}>
        <SectionName>LINKS</SectionName>
        <LinkCard img={github}></LinkCard>
      </section>
    </main>
  )
}
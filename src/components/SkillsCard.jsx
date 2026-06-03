import styles from "../assets/css/SkillsCard.module.css";
import Skill from "./Skill.jsx";

export default function SkillsCard({ skills }) {
  return (
    <article
      className={
        "flex flex-col justify-center items-center gap-2 " +
        "shadow-sm border border-slate-300 rounded-sm w-4/5 h-auto " +
        "bg-white p-8 " +
        styles.container
      }
    >
      <img className={styles.img} src={skills.img} alt={skills.alt} />
      <h2 className={"font-extrabold text-2xl " + styles.title}>
        {skills.title}
      </h2>
      <hr className={"border block md:hidden " + styles.line} />
      <div
        className={
          "flex justify-start items-start flex-wrap gap-2 " + styles.content
        }
      >
        {skills.content.map((item) => (
          <Skill key={item} name={item}></Skill>
        ))}
      </div>
    </article>
  );
}

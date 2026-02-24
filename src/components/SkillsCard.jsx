import { useState } from "react";
import styles from "../assets/css/SkillsCard.module.css";

export default function SkillsCard({ skills }) {
  return (
    <article
      className={
        "flex flex-col justify-center items-center gap-2 " +
        "shadow-2xl border-2 rounded-4xl border-rose-700 w-4/5 h-auto " +
        "bg-gray-50 p-8 " +
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
        {skills.content.map((item, idx) => (
          <SkillBox key={idx}>{item}</SkillBox>
        ))}
      </div>
    </article>
  );
}
const SkillBox = ({ children }) => {
  const [color] = useState(() => Math.floor(Math.random() * 72) * 5);

  return (
    <div
      className={"font-bold text-lg border pl-1.5 pr-1.5 rounded-lg"}
      style={{ backgroundColor: `hsl(${color}, 60%, 88%)` }}
    >
      {children}
    </div>
  );
};

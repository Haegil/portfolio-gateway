import styles from "../assets/css/AboutCard.module.css";

export default function AboutCard({aboutMe}) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={aboutMe.img} alt={aboutMe.alt}/>
      <h2 className={styles.title + " font-nsr font-bold text-xl"}>
        {aboutMe.title}
      </h2>
      <p className={styles.content + " font-bold text-lg"}>{aboutMe.content}</p>
    </div>
  )
};
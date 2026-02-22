import styles from "../assets/css/Introduce.module.css";

export default function Introduce() {
  return (
    <article className={styles.textBox}>
      <h1 className={"font-nsr font-extrabold text-4xl/relaxed text-center"}>
        장윤창
        <br/>
        풀스택 개발자
        <br/>
        포트폴리오
      </h1>
      <hr className={"border-sky-600 border-2 rounded-lg m-4"}/>
      <h1 className={"font-nsr font-extrabold text-lg text-center"}>
        안녕하세요.
        <br/>
        항상 최선을 다하는 개발자
        <br/>
        장윤창입니다.
      </h1>
    </article>
  )
}
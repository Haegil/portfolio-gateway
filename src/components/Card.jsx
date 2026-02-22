import Skill from "./Skill.jsx";
import star from "../assets/images/icons/star.svg";

export default function Card({project, updateCardId}) {
  return (
    <article
      className={"cursor-pointer flex flex-col justify-between p-8 rounded-lg border-2 border-sky-500 text-sm w-72 " +
        "md:w-lg md:h-80 h-auto bg-gray-50 hover:scale-105 duration-100 ease-linear shadow-md"}
      onClick={() => updateCardId(project.id)}>
      <div>
        <div className={"flex justify-start items-center"}>
          <img src={star} alt={"star"} className={"inline"} width={32}/>
          <h3 className={"font-bold text-xl"}>{project.name}</h3>
        </div>
        <span
          className={"text-gray-600 text-sm"}
        >{project.createAt}</span>
        <hr className={"border-sky-600 rounded-lg m-1"}/>
        <ul className={"p-2"}>
          {project.description.map((d, i) => (
            <li className={"list-disc ml-4 mt-1"} key={i}><p className={"text-base font-nsr font-extrabold"}>{d}</p>
            </li>))}
        </ul>
        <hr className={"border-sky-600 rounded-lg m-1"}/>
      </div>
      <div>
        <ul className={"mt-2 flex flex-wrap gap-1 justify-start items-center"}>
          {project.skills.map((s, i) => (<li key={i}><Skill name={s}></Skill></li>))}
        </ul>
      </div>
    </article>
  )
}
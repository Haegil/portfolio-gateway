import {projects} from "../utils/projects.jsx";
import link from "../assets/images/icons/link.svg"

export default function Modal({cardId, updateCardId}) {
  const project = projects.filter((d) => d.id === cardId)[0];

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/95 flex flex-col justify-center items-center"
         onClick={() => updateCardId(0)}
    >
      <article className={"relative p-4 bg-white w-3/5 rounded-lg overflow-y-auto"}
               onClick={(e) => e.stopPropagation()}>
        <div className={"pl-2 pr-2 flex justify-between border-b-2 border-b-sky-600"}>
          <p className={"font-bold"}>{project.name}</p>
          <button className={"hover:text-sky-700 cursor-pointer"} onClick={() => updateCardId(0)}>CLOSE
          </button>
        </div>
        <div className={"p-2"}>
          <div className={"flex justify-center items-center"}>
            <img src={project.imgUrl || "#"} alt="이미지" className={"max-h-64"}/>
          </div>
          <hr className={"border-sky-600 rounded-lg m-1"}/>
          <nav className={"hover:text-sky-500"}>
            <img className={"inline mr-1"} src={link} alt={"URL: "} width={16}/>
            <a className={"break-all"} href={project.url}>{project.url}</a>
          </nav>
        </div>
      </article>
    </div>
  );
}
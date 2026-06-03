import {projects} from "../utils/projects.jsx";
import link from "../assets/images/icons/link.svg"
import Skill from "./Skill.jsx";

const projectStatusLabels = {
  live: "배포 중",
  "github-only": "GitHub만 있음",
  "in-progress": "진행 중",
};

function ProjectLink({href, children}) {
  if (!href) {
    return null;
  }

  return (
    <a
      className={"inline-flex items-center gap-1 border border-slate-300 px-3 py-1 rounded-sm font-bold text-slate-800 hover:border-sky-600 hover:text-sky-700"}
      href={href}
      target={"_blank"}
      rel={"noreferrer"}
    >
      <img src={link} alt="" width={16}/>
      {children}
    </a>
  );
}

export default function Modal({cardId, updateCardId}) {
  const project = projects.find((d) => d.id === cardId);

  if (!project) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/95 flex flex-col justify-center items-center"
         onClick={() => updateCardId(0)}
    >
      <article className={"relative p-4 bg-white w-11/12 md:w-3/5 rounded-sm overflow-y-auto shadow-xl"}
               onClick={(e) => e.stopPropagation()}>
        <div className={"pl-2 pr-2 flex justify-between border-b-2 border-b-sky-600"}>
          <div>
            <p className={"font-bold"}>{project.name}</p>
            <p className={"text-sm text-slate-500"}>{projectStatusLabels[project.status] ?? "진행 중"}</p>
          </div>
          <button className={"hover:text-sky-700 cursor-pointer"} onClick={() => updateCardId(0)}>CLOSE
          </button>
        </div>
        <div className={"p-2"}>
          <div className={"flex justify-center items-center"}>
            <img src={project.imgUrl || "#"} alt="이미지" className={"max-h-64"}/>
          </div>
          <hr className={"border-sky-600 rounded-sm m-1"}/>
          <section className={"mb-4"}>
            <h3 className={"mb-2 font-bold text-slate-900"}>Skills</h3>
            <ul className={"flex flex-wrap gap-1"}>
              {project.skills.map((skill) => (
                <li key={skill}>
                  <Skill name={skill}></Skill>
                </li>
              ))}
            </ul>
          </section>
          <nav className={"flex flex-wrap gap-2"}>
            <ProjectLink href={project.githubUrl}>GitHub</ProjectLink>
            <ProjectLink href={project.demoUrl}>Demo</ProjectLink>
          </nav>
        </div>
      </article>
    </div>
  );
}

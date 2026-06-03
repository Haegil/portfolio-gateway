import star from "../assets/images/icons/star.svg";

const projectStatus = {
  live: {
    label: "배포 중",
    className: "border-emerald-300 bg-emerald-50 text-emerald-700",
  },
  "github-only": {
    label: "GitHub만 있음",
    className: "border-slate-300 bg-slate-50 text-slate-700",
  },
  "in-progress": {
    label: "진행 중",
    className: "border-amber-300 bg-amber-50 text-amber-700",
  },
};

function ProjectAction({href, children}) {
  if (!href) {
    return null;
  }

  return (
    <a
      className={"border border-slate-300 bg-slate-950 px-3 py-1 rounded-sm text-sm font-bold text-white hover:bg-sky-700"}
      href={href}
      target={"_blank"}
      rel={"noreferrer"}
    >
      {children}
    </a>
  );
}

export default function Card({project, updateCardId}) {
  const status = projectStatus[project.status] ?? projectStatus["in-progress"];

  return (
    <article
      className={"flex flex-col justify-between p-8 rounded-sm border border-slate-300 text-sm w-72 " +
        "md:w-lg min-h-80 h-auto bg-white hover:-translate-y-1 duration-150 ease-linear shadow-sm hover:shadow-xl"}
    >
      <div className={"flex flex-col"}>
        <div className={"flex justify-start items-center"}>
          <img src={star} alt={"star"} className={"inline"} width={32}/>
          <h3 className={"font-bold text-xl"}>{project.name}</h3>
        </div>
        <div className={"mt-1 flex flex-wrap items-center gap-2"}>
          <span className={"text-gray-600 text-sm"}>{project.createAt}</span>
          <span className={`border px-2 py-0.5 rounded-sm text-xs font-bold ${status.className}`}>
            {status.label}
          </span>
        </div>
        <hr className={"border-sky-600 rounded-sm m-1"}/>
        <ul className={"p-2"}>
          {project.description.map((d, i) => (
            <li className={"list-disc ml-4 mt-1"} key={i}><p className={"text-base font-nsr font-extrabold"}>{d}</p>
            </li>))}
        </ul>
        <hr className={"border-sky-600 rounded-sm m-1"}/>
      </div>
      <div className={"mt-4"}>
        <div className={"flex flex-wrap gap-2 border-t border-slate-200 pt-4"}>
          <button
            className={"border border-sky-700 bg-white px-3 py-1 rounded-sm text-sm font-bold text-sky-800 hover:bg-sky-50 cursor-pointer"}
            type={"button"}
            onClick={() => updateCardId(project.id)}
          >
            상세보기
          </button>
          <ProjectAction href={project.githubUrl}>GitHub</ProjectAction>
          <ProjectAction href={project.demoUrl}>Demo</ProjectAction>
        </div>
      </div>
    </article>
  )
}

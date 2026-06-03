import {skillIcons} from "../utils/icons.js";

const skillIconAliases = {
  Javascript: "JavaScript",
  Vue: "Vue.js",
  TailwindCSS: "Tailwindcss",
  "Redux-toolkit": "Redux-Toolkit",
  "React-router": "React-Router",
  "Express.js": "Express",
};

export default function Skill({name}) {
  const iconName = skillIconAliases[name] ?? name;
  const path = `../assets/images/skills/${iconName}.svg`;
  const icon = skillIcons[path]?.default;

  return (
    <div className={"flex items-center justify-center box-border gap-1 border border-slate-300 bg-slate-50 px-2 py-1 rounded-sm text-slate-800"}>
      {icon && <img alt={name} src={icon} className={"w-4 h-4"}></img>}
      <span>{name}</span>
    </div>
  )
};

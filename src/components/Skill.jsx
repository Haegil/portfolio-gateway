import {skillIcons} from "../utils/icons.js";

export default function Skill({name}) {
  const path = `../assets/images/skills/${name}.svg`;
  const icon = skillIcons[path]?.default;

  return (
    <div className={"flex items-center justify-center box-border p-1 rounded-lg border-emerald-300 bg-emerald-100"}>
      {icon && <img alt={name} src={icon} className={"w-4 h-4"}></img>}
      <span className={"ml-1"}>{name}</span>
    </div>
  )
};
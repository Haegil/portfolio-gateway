import clip from "../assets/images/icons/clip.svg"

export default function SectionName({children, inverted = false}) {
  return (
    <div className={"flex justify-center items-center m-16"}>
      <img src={clip} alt="clip" className={`w-8 ${inverted ? "brightness-0 invert" : ""}`}/>
      <h3
        className={`text-3xl font-extrabold border-b-4 border-b-sky-700 ${inverted ? "text-slate-50" : "text-slate-900"}`}>
        {children}</h3>
    </div>
  )
};

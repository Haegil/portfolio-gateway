import link from "../assets/images/icons/link.svg";

export default function LinkCard({img}) {
  return (
    <article className={
      "flex flex-col justify-center items-center border border-slate-300 rounded-sm w-4/5 p-4 md:w-lg bg-white" +
      " hover:-translate-y-1 duration-150 ease-out shadow-sm hover:shadow-xl"
    }>
      <div className={"flex justify-center items-center"}>
        <img src={img} alt={"links"} width={128}/>
        <h1 className={"font-extrabold text-4xl"}>GITHUB</h1>
      </div>
      <nav className={"hover:text-sky-500"}>
        <img className={"inline mr-1"} src={link} alt={"URL: "} width={16}/>
        <a href={"https://github.com/Haegil"} className={"underline"}>https://github.com/Haegil</a>
      </nav>
    </article>
  )
};

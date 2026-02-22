import link from "../assets/images/icons/link.svg";

export default function LinkCard({img}) {
  return (
    <article className={
      "flex flex-col justify-center items-center border-2 border-gray-700 rounded-2xl w-4/5 p-4 md:w-lg bg-gray-50" +
      " hover:scale-105 duration-100 ease-out"
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
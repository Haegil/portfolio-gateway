import menu from "../assets/images/icons/hamburgerButton.svg";
import {useEffect, useRef, useState} from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);

  const menuRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <header
      className={`flex flex-col p-4 border-b-sky-600 border-b-2 
       fixed top-0 z-50 w-full
       ${isScrolled || isOpen ? "bg-sky-400" : "bg-sky-400/65"} 
       duration-400 ease-in-out overflow-hidden transition-all`}
      style={{height: isOpen ? 64 + menuHeight : 64}}>
      <div className={
        `w-full flex items-center justify-between`
      }>
        <h1 className={"font-extrabold text-2xl text-black hover:cursor-pointer hover:text-gray-100"}
            onClick={scrollToTop}
        >HAEGIL's Portfolio</h1>
        <nav className={"hover:cursor-pointer block md:hidden"}
             onClick={() => setIsOpen(!isOpen)}>
          <img src={menu} alt="hamburger" width={32}/>
        </nav>
        <nav className={"hover:cursor-pointer hidden md:block"}>
          <ul className={"flex items-center justify-evenly gap-2"}>
            <li className={"hover:text-gray-100"}>
              <a href={"#about-me-section"}>ABOUT ME</a>
            </li>
            <li>
              <a href={"#skills-section"}>SKILLS</a>
            </li>
            <li className={"hover:text-gray-100"}>
              <a href={"#projects-section"}>PROJECTS</a>
            </li>
            <li className={"hover:text-gray-100"}>
              <a href={"#links-section"}>LINKS</a>
            </li>
          </ul>
        </nav>
      </div>
      <ul ref={menuRef} className={`${isOpen ? "opacity-100" : "opacity-0"} 
      text-xl font-bold flex flex-col gap-1`}>
        <li>
          <hr/>
        </li>
        <li><a href={"#about-me-section"} onClick={() => setIsOpen(false)}>ABOUT ME</a></li>
        <li><a href={"#skills-section"} onClick={() => setIsOpen(false)}>SKILLS</a></li>
        <li><a href={"#projects-section"} onClick={() => setIsOpen(false)}>PROJECTS</a></li>
        <li><a href={"#links-section"} onClick={() => setIsOpen(false)}>LINKS</a></li>
      </ul>
    </header>
  )
}
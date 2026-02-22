import language from "../assets/images/icons/language.svg";
import frontend from "../assets/images/icons/frontend.svg";
import backend from "../assets/images/icons/backend.svg";

export const skills = [
  {
    id: 1,
    title: "Language",
    content: [
      "Javascript", "Java", "Python"
    ],
    img: language,
    alt: "language",
  }, {
    id: 2,
    title: "Frontend",
    content: [
      "React", "Vue", "Redux-toolkit", "TailwindCSS", "Vite", "Motion", "Pinia", "React-router", "React-hook-form"
    ],
    img: frontend,
    alt: "frontend"
  }, {
    id: 3,
    title: "Backend",
    content: [
      "Spring", "Express.js", "Firebase", "Gradle"
    ],
    img: backend,
    alt: "backend"
  }
];
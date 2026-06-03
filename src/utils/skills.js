import language from "../assets/images/icons/language.svg";
import frontend from "../assets/images/icons/frontend.svg";
import backend from "../assets/images/icons/backend.svg";
import devops from "../assets/images/icons/devops.svg";

export const skills = [
  {
    id: 1,
    title: "Language",
    content: ["JavaScript", "Java"],
    img: language,
    alt: "language",
  },
  {
    id: 2,
    title: "Frontend",
    content: [
      "React",
      "Vite",
      "React-Router",
      "Redux",
      "Redux-Toolkit",
      "Tailwindcss",
      "Vue",
      "Motion",
      "Pinia",
      "React-hook-form",
    ],
    img: frontend,
    alt: "frontend",
  },
  {
    id: 3,
    title: "Backend",
    content: ["Spring", "Express", "Firebase", "Supabase", "Gradle"],
    img: backend,
    alt: "backend",
  },
  {
    id: 4,
    title: "DevOps",
    content: ["Vercel", "Github-actions", "Render"],
    img: devops,
    alt: "devops",
  },
];

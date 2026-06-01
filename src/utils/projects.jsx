/*
  객체 template

  {
    id: ,
    name: "",
    imgUrl:
      "#",
    alt: "",
    skills: [],
    description: [
      "",
    ],
    url: "",
    createAt: "",
  },
 */

export const projects = [
  {
    id: 1,
    name: "모니터 방향 전환 앱",
    imgUrl:
      "https://portfolio-dev-storage-syd.s3.ap-southeast-2.amazonaws.com/test/display-toggler.ico",
    alt: "display-toggler",
    skills: ["Java"],
    description: [
      "서브모니터를 가로 또는 세로로 돌려서 쓸 때가 자주 있다보니 만들게 된 앱",
      "jna를 통해 java로 windows의 구조체를 정의 및 사용",
    ],
    url: "https://github.com/Haegil/display-toggle.git",
    createAt: "2026-02-20",
  },
  {
    id: 2,
    name: "개인 기록용 블로그",
    imgUrl:
      "#",
    alt: "my-blog",
    skills: ["React", "Vite", "React-Router", "Redux", "Tailwindcss", "Express", "Vercel", "Github-actions", "Vercel", "Render", "Supabase"],
    description: [
      "공부한 기록을 남기기 위해 만들어진 개인 블로그",
      "마크다운 에디터를 구현했으며 작성 도중 미리보기를 통해 어떻게 적용되었는지 알 수 있습니다."
    ],
    url: "https://my-blog-liart-sigma-49.vercel.app",
    createAt: "2026-05-26",
  },
  {
    id: 3,
    name: "2차 전지 MES",
    imgUrl:
      "#",
    alt: "secondary_cell_mes",
    skills: ["React", "Vite", "Express", "Tailwindcss", "Redux-Toolkit", "React-Router", "Firebase"],
    description: [
      "2차 전지 공정 과정을 통제 할 수 있는 MES 시스템",
      "홈/대시보드 페이지의 상단에 있는 \"시뮬레이터 시작\"을 클릭하여 더미데이터를 이용한 데모를 경험해볼 수 있습니다.",
    ],
    url: "https://battery-mes.web.app/",
    createAt: "2026-05-29",
  },
];

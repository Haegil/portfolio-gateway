# Gateway: 개인 포트폴리오 및 프로젝트 허브

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## 📖 프로젝트 개요

**Gateway**는 저의 개발 역량을 보여주고, 앞으로 진행할 다양한 프로젝트들을 한 곳에서 쉽게 접근할 수 있도록 만들어진 개인용 포트폴리오 웹사이트입니다. 단순한 링크 모음을 넘어, 저라는 개발자를 소개하고
기술적인 성장을 기록하는 허브 역할을 하도록 설계되었습니다.

채용 담당자 및 협업을 희망하는 분들이 저의 기술 스택, 프로젝트 경험, 그리고 개발에 대한 가치관을 쉽고 명확하게 파악할 수 있도록 하는 데에 중점을 두었습니다.

---

## 🛠️ 기술 스택

이 프로젝트는 다음과 같은 기술들을 기반으로 구축되었습니다.

| 구분             | 기술             | 이유                                                                            |
|----------------|----------------|-------------------------------------------------------------------------------|
| **Framework**  | `React`        | 컴포넌트 기반 아키텍처를 통해 재사용성과 유지보수성을 높이고, 풍부한 생태계를 활용하여 신속하게 UI를 개발하기 위해 선택했습니다.     |
| **Build Tool** | `Vite`         | 빠른 개발 서버 구동과 HMR(Hot Module Replacement)을 통해 개발 생산성을 극대화합니다.                  |
| **Styling**    | `Tailwind CSS` | Utility-First 접근법을 사용하여 CSS 코드의 중복을 최소화하고, 일관된 디자인 시스템을 효율적으로 적용하기 위해 도입했습니다. |
| **Language**   | `JavaScript`   | 웹 프론트엔드 개발의 표준 언어로서, React와의 높은 호환성과 넓은 범용성을 고려하여 사용했습니다.                     |

---

## ✨ 주요 기능

- **자기소개 (About Me)**: 저의 기본 정보, 가치관, 연락처 등을 포함하여 개발자로서의 저를 소개합니다.
- **기술 스택 (Skills)**: 제가 다룰 수 있는 프로그래밍 언어, 프레임워크, 도구들을 시각적으로 보여줍니다.
- **프로젝트 허브 (Projects)**: 제가 진행했거나 참여한 프로젝트들의 요약 정보와 함께 GitHub 저장소, 배포된 서비스로 바로 이동할 수 있는 링크를 제공합니다.
- **반응형 디자인**: 데스크톱, 태블릿, 모바일 등 다양한 디바이스에서 최적화된 화면을 제공합니다.

---

## 🌐 배포 (Deployment)

이 프로젝트는 [Vercel](https://vercel.com)을 통해 배포될 예정입니다. Vercel의 강력한 CI/CD 기능과 빠른 글로벌 CDN을 활용하여 사용자에게 안정적이고 빠른 서비스를 제공할 것입니다.

**배포된 서비스 URL**: https://portfolio-gateway-haegils-projects.vercel.app/

---

## 🚀 시작하기

### 1. 프로젝트 클론

```bash
git clone https://github.com/Haegil/portfolio-gateway.git
cd gateway
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

서버가 실행되면 `http://localhost:5173` (또는 다른 포트)에서 웹사이트를 확인할 수 있습니다.

---

## 🎯 프로젝트를 통해 배운 점 및 향후 계획

이 프로젝트를 진행하며 React와 Vite, Tailwind CSS를 사용한 최신 프론트엔드 개발 환경을 깊이 있게 경험할 수 있었습니다. 특히 컴포넌트 설계와 상태 관리의 중요성을 다시 한번 깨닫고,
Utility-First CSS 방법론의 장점을 체감했습니다.

**향후 계획**

- **블로그 연동**: 개발 과정에서 얻은 지식과 경험을 기록하는 기술 블로그 섹션을 추가하여 연동할 예정입니다.
- **CI/CD 파이프라인 구축**: GitHub Actions를 활용하여 코드 변경 시 자동으로 빌드 및 배포가 이루어지는 파이프라인을 구축하여 개발 효율성을 높이고자 합니다.
- **Vercel 배포 자동화**: Vercel을 통한 지속적인 배포(Continuous Deployment)를 설정하여, GitHub 저장소에 변경 사항이 푸시될 때마다 자동으로 업데이트되도록 할 예정입니다.
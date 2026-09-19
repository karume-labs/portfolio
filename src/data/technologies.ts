import type { Route } from "next";

export interface Technology {
  badgeUrl: string;
  href: Route;
  label: string;
}

export const TECHNOLOGIES: Technology[] = [
  // Web Development (Core Frontend)
  {
    href: "https://developer.mozilla.org/docs/Web/HTML",
    badgeUrl: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    label: "HTML",
  },
  {
    href: "https://developer.mozilla.org/docs/Web/CSS",
    badgeUrl: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    label: "CSS",
  },
  {
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
    badgeUrl: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    label: "JavaScript",
  },
  {
    href: "https://www.typescriptlang.org/",
    badgeUrl: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
    label: "TypeScript",
  },
  {
    href: "https://react.dev/",
    badgeUrl: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    label: "React.js",
  },
  {
    href: "https://nextjs.org/",
    badgeUrl: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
    label: "Next.js",
  },
  {
    href: "https://next-auth.js.org/",
    badgeUrl: "https://img.shields.io/badge/NextAuth-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
    label: "NextAuth",
  },
  {
    href: "https://tailwindcss.com/",
    badgeUrl: "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
    label: "Tailwind CSS",
  },
  {
    href: "https://mantine.dev/",
    badgeUrl: "https://img.shields.io/badge/Mantine-339AF0?style=for-the-badge&logo=mantine&logoColor=white",
    label: "Mantine UI",
  },
  {
    href: "https://ui.shadcn.com/",
    badgeUrl: "https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white",
    label: "shadcn/ui",
  },
  {
    href: "https://ui.ahmedbna.com/",
    badgeUrl: "https://img.shields.io/badge/BNA_UI-000000?style=for-the-badge",
    label: "BNA UI",
  },
  {
    href: "https://zustand-demo.pmnd.rs/",
    badgeUrl: "https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zustand&logoColor=white",
    label: "Zustand",
  },
  {
    href: "https://zod.dev/",
    badgeUrl: "https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white",
    label: "Zod",
  },

  // Mobile Development
  {
    href: "https://expo.dev/",
    badgeUrl: "https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white",
    label: "Expo",
  },
  {
    href: "https://reactnativereusables.com/",
    badgeUrl: "https://img.shields.io/badge/RN_Reusables-000000?style=for-the-badge&logo=react&logoColor=white",
    label: "React Native Reusables",
  },

  // Backend & Frameworks
  {
    href: "https://nodejs.org/",
    badgeUrl: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
    label: "Node.js",
  },
  {
    href: "https://expressjs.com/",
    badgeUrl: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
    label: "Express.js",
  },
  {
    href: "https://nestjs.com/",
    badgeUrl: "https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
    label: "NestJS",
  },
  {
    href: "https://www.djangoproject.com/",
    badgeUrl: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
    label: "Django",
  },
  {
    href: "https://www.django-rest-framework.org/",
    badgeUrl: "https://img.shields.io/badge/DRF-092E20?style=for-the-badge&logo=django&logoColor=white",
    label: "Django REST Framework",
  },
  {
    href: "https://orpc.unnoq.com/",
    badgeUrl: "https://img.shields.io/badge/ORPC-000000?style=for-the-badge&logo=typescript&logoColor=white",
    label: "ORPC",
  },

  // Databases & ORM
  {
    href: "https://www.postgresql.org/",
    badgeUrl: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white",
    label: "PostgreSQL",
  },
  {
    href: "https://www.mysql.com/",
    badgeUrl: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
    label: "MySQL",
  },
  {
    href: "https://orm.drizzle.team/",
    badgeUrl: "https://img.shields.io/badge/Drizzle-C5F744?style=for-the-badge&logo=drizzle&logoColor=black",
    label: "Drizzle ORM",
  },
  {
    href: "https://www.prisma.io/",
    badgeUrl: "https://img.shields.io/badge/Prisma-2D3E50?style=for-the-badge&logo=prisma&logoColor=white",
    label: "Prisma",
  },

  // Authentication
  {
    href: "https://www.better-auth.com/",
    badgeUrl: "https://img.shields.io/badge/Better_Auth-000000?style=for-the-badge&logo=auth0&logoColor=white",
    label: "Better Auth",
  },

  // Tooling & Package Managers
  {
    href: "https://www.npmjs.com/",
    badgeUrl: "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white",
    label: "npm",
  },
  {
    href: "https://bun.sh/",
    badgeUrl: "https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white",
    label: "Bun",
  },
  {
    href: "https://git-scm.com/",
    badgeUrl: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
    label: "Git",
  },
  {
    href: "https://github.com/",
    badgeUrl: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
    label: "GitHub",
  },
  {
    href: "https://github.com/features/actions",
    badgeUrl: "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white",
    label: "GitHub Actions",
  },
  {
    href: "https://www.docker.com/",
    badgeUrl: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
    label: "Docker",
  },
  {
    href: "https://nginx.org/",
    badgeUrl: "https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white",
    label: "Nginx",
  },
  {
    href: "https://www.postman.com/",
    badgeUrl: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
    label: "Postman",
  },

  // Code Quality / Formatting
  {
    href: "https://biomejs.dev/",
    badgeUrl: "https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white",
    label: "Biome",
  },
  {
    href: "https://eslint.org/",
    badgeUrl: "https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white",
    label: "ESLint",
  },
  {
    href: "https://prettier.io/",
    badgeUrl: "https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white",
    label: "Prettier",
  },

  // Blockchain & Web3
  {
    href: "https://stellar.org/",
    badgeUrl: "https://img.shields.io/badge/Stellar-000000?style=for-the-badge&logo=stellar&logoColor=white",
    label: "Stellar",
  },
  {
    href: "https://soliditylang.org/",
    badgeUrl: "https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white",
    label: "Solidity",
  },
  {
    href: "https://hardhat.org/",
    badgeUrl: "https://img.shields.io/badge/Hardhat-F8E031?style=for-the-badge&logo=hardhat&logoColor=black",
    label: "Hardhat.js",
  },

  // OS, Scripting & Programming Languages
  {
    href: "https://archlinux.org/",
    badgeUrl: "https://img.shields.io/badge/i_use_arch_btw-1793D1?style=for-the-badge&logo=archlinux&logoColor=white",
    label: "i use arch btw",
  },
  {
    href: "https://hyprland.org/",
    badgeUrl: "https://img.shields.io/badge/Hyprland-00C2FF?style=for-the-badge&logo=hyprland&logoColor=white",
    label: "Hyprland",
  },
  {
    href: "https://www.gnu.org/software/bash/",
    badgeUrl: "https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white",
    label: "Bash Scripting",
  },
  {
    href: "https://www.python.org/",
    badgeUrl: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    label: "Python",
  },

  // Project Management
  {
    href: "https://www.atlassian.com/software/jira",
    badgeUrl: "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white",
    label: "Jira",
  },
  {
    href: "https://trello.com/",
    badgeUrl: "https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white",
    label: "Trello",
  },
];

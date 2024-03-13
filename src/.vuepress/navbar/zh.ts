import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/about",
  {
    text: "博文",
    icon: "pen-to-square",
    link: "/zh/articles/",
  },
]);

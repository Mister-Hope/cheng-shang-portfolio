import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/about",
  {
    text: "Posts",
    icon: "pen-to-square",
    link: "/article/",
  },
]);

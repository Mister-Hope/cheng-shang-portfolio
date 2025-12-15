import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Cheng Shang",
      description: "Cheng Shang Portfolio",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "尚程",
      description: "尚程介绍",
    },
  },

  theme: hopeTheme({
    hostname: "https://cheng-shang.me/",
    favicon: "/favicon.ico",

    author: {
      name: "Cheng Shang",
      url: "https://cheng-shang.me/",
    },

    sidebar: false,

    displayFooter: true,
    contributors: false,
    editLink: false,

    // blog: {
    //   medias: {
    //     Gmail: "mailto:c-shang@iis.u-tokyo.ac.jp",
    //     Email: "mailto:cheng.shang@riken.jp",
    //   },
    // },

    locales: {
      "/": {
        navbar: [
          "/",
          {
            text: "About me",
            icon: "circle-info",
            link: "/#profile",
          },
        ],
      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        author: {
          name: "尚程",
          url: "https://cheng-shang.me/",
        },

        navbar: [
          "/zh/",
          {
            text: "个人介绍",
            icon: "circle-info",
            link: "/zh/#个人简介",
          },
        ],
      },
    },

    markdown: {
      align: true,
      hint: false,
    },

    plugins: {
      icon: {
        assets: "fontawesome-with-brands",
      },
      photoSwipe: false,
    },
  }),
});

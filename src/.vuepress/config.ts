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
    hostname: "https://shangcheng.me",
    favicon: "/favicon.ico",
    iconAssets: "fontawesome-with-brands",

    author: {
      name: "Cheng Shang",
      url: "https://shangcheng.me",
    },

    sidebar: false,

    displayFooter: true,
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
            link: "/#about-me",
          },
        ],

        // blog: {
        //   description: "Ph.D",
        //   intro: "/#information",
        // },
      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        author: {
          name: "尚程",
          url: "https://shangcheng.me",
        },

        navbar: [
          "/zh/",
          {
            text: "个人介绍",
            icon: "circle-info",
            link: "/zh/#个人信息",
          },
        ],

        // blog: {
        //   description: "博士",
        //   intro: "/zh/#个人信息",
        // },
      },
    },

    plugins: {
      mdEnhance: {
        align: true,
        hint: false,
      },
      photoSwipe: false,
      redirect: { switchLocale: "modal" },
    },
  }),
});

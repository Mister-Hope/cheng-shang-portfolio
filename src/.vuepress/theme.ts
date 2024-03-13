import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
// import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme(
  {
    hostname: "https://shangcheng.innenu.com",

    author: {
      name: "Shang Cheng",
      url: "https://shangcheng.innenu.com",
    },

    iconAssets: "fontawesome-with-brands",

    // logo: "https://theme-hope-assets.vuejs.press/logo.svg",

    // repo: "vuepress-theme-hope/vuepress-theme-hope",

    // docsDir: "src",

    locales: {
      "/": {
        // navbar
        navbar: enNavbar,

        // sidebar
        // sidebar: enSidebar,
        sidebar: false,

        footer: "Default footer",

        displayFooter: true,

        blog: {
          description: "A FrontEnd programmer",
          intro: "/intro.html",
        },

        editLink: false,
      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        // navbar
        navbar: zhNavbar,

        // sidebar
        // sidebar: zhSidebar,
        sidebar: false,

        footer: "默认页脚",

        displayFooter: true,

        blog: {
          description: "一个前端开发者",
          intro: "/zh/intro.html",
        },
        editLink: false,
      },
    },

    // enable it to preview all changes in time
    // hotReload: true,

    plugins: {
      blog: true,

      // install @waline/client before enabling it
      // WARNING: This is a test server for demo only.
      // You should create and use your own comment service in production.
      // comment: {
      //   provider: "Waline",
      //   serverURL: "https://waline-comment.vuejs.press",
      // },

      components: {
        components: ["Badge", "VPCard"],
      },

      // all features are enabled for demo, only preserve features you need here
      mdEnhance: {
        align: true,
        attrs: true,
        codetabs: true,
        component: true,
        demo: true,
        figure: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        stylize: [
          {
            matcher: "Recommended",
            replacer: ({ tag }) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommended",
                };
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,

        // install chart.js before enabling it
        // chart: true,

        // insert component easily

        // install echarts before enabling it
        // echarts: true,

        // install flowchart.ts before enabling it
        // flowchart: true,

        // gfm requires mathjax-full to provide tex support
        // gfm: true,

        // install katex before enabling it
        // katex: true,

        // install mathjax-full before enabling it
        // mathjax: true,

        // install mermaid before enabling it
        // mermaid: true,

        // playground: {
        //   presets: ["ts", "vue"],
        // },

        // install reveal.js before enabling it
        // revealJs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },

        // install @vue/repl before enabling it
        // vuePlayground: true,

        // install sandpack-vue3 before enabling it
        // sandpack: true,
      },

      // install @vuepress/plugin-pwa and uncomment these if you want a PWA
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cachePic: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },
    },
  },
  { custom: true }
);

# Cheng Shang Portfolio

This is a personal portfolio website for Cheng Shang, and can be accessed at [https://cheng-shang.me/](https://cheng-shang.me/).

The site is built with [VuePress](https://vuepress.vuejs.org/), a static site generator powered by Vue.js, using [VuePress Theme Hope](https://theme-hope.vuejs.press/) and hosted on [Netlify](https://netlify.com/).

## Preparation

Install [Node.js](https://nodejs.org) first, then run `corepack enable` as Administrator in the terminal to enable corepack.

Note: The minimal required version of Node.js is specified by `engine` field inside `package.json`, and it may increase by time, so you should try to upgrade to latest LTS version if anything goes wrong.

## Installation

Run `pnpm i` in the project folder.

Note: After applying new code changes from repo, you should always run `pnpm i` to reinstall the dependencies.

## Usage

- `pnpm dev`: start development server to preview the website
- `pnpm build`: build production website, the output file will be in `src/.vuepress/dist` folder and can be deployed to any static hosting service
- `pnpm update`: update project packages to latest version

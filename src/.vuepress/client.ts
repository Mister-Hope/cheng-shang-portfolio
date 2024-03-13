import { defineClientConfig } from "vuepress/client";
import Experiences from "./components/Experiences.vue";
import Home from "./layouts/Home.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Experiences", Experiences);
  },
  layouts: {
    Home,
  },
});

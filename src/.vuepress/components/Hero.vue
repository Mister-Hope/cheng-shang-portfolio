<script setup lang="ts">
import { isString } from "@vuepress/helper/client";
import { computed } from "vue";
import { usePageFrontmatter, withBase } from "vuepress/client";

import { useAuthorInfo } from "../composables/index.js";

interface HomeFrontmatter {
  title?: string;
  tagline?: string;
  bgImage?: string | false;
  bgImageDark?: string | false;
  bgImageStyle?: Record<string, string> | string;
}

const authorInfo = useAuthorInfo();
const frontmatter = usePageFrontmatter<HomeFrontmatter>();

const title = computed(
  () => frontmatter.value.title ?? `👋, Hi I am ${authorInfo.value.name}!`
);

const bgInfo = computed(() => {
  const { bgImage, bgImageDark, bgImageStyle } = frontmatter.value;

  return {
    image: isString(bgImage) ? withBase(bgImage) : null,
    imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
    bgStyle: bgImageStyle,
  };
});
</script>

<template>
  <div class="vp-hero">
    <div
      class="vp-hero-mask"
      :style="{
        background: `url(${bgInfo.image}) center/cover no-repeat`,
      }"
    ></div>
    <h1>{{ title }}</h1>
    <p v-if="frontmatter.tagline">{{ frontmatter.tagline }}</p>
  </div>
</template>
<style lang="scss">
.vp-hero {
  width: 100%;
  height: 100vh;
}
</style>

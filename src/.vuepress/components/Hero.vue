<script setup lang="ts">
import { isString } from "@vuepress/helper/client";
import { computed, shallowRef } from "vue";
import {
  usePageFrontmatter,
  useSiteLocaleData,
  withBase,
} from "vuepress/client";
import { DropTransition } from "vuepress-theme-hope/components/transitions/DropTransition.js";
import SlideDownIcon from "./icons/SlideDownIcon.vue";

import { useAuthorInfo } from "../composables/index.js";

interface HomeFrontmatter {
  heroText?: string;
  tagline?: string;
  heroImage: string | null;
  heroImageDark: string | null;
  heroImageStyle: string | Record<string, string> | undefined;
  heroAlt: string;
  bgImage?: string | false;
  bgImageDark?: string | false;
  bgImageStyle?: Record<string, string> | string;
  heroFullScreen?: boolean;
}

const authorInfo = useAuthorInfo();
const frontmatter = usePageFrontmatter<HomeFrontmatter>();
const siteLocale = useSiteLocaleData();

const hero = shallowRef<HTMLElement>();

const isFullScreen = computed(() => frontmatter.value.heroFullScreen ?? false);

const heroInfo = computed(() => {
  const {
    heroText,
    heroImage,
    heroImageDark,
    heroAlt,
    heroImageStyle,
    tagline,
  } = frontmatter.value;

  return {
    text:
      heroText ?? authorInfo.value
        ? `👋Hi, I am ${authorInfo.value.name}!`
        : siteLocale.value.title ?? "Hello",
    image: heroImage ? withBase(heroImage) : null,
    imageDark: heroImageDark ? withBase(heroImageDark) : null,
    style: heroImageStyle,
    alt: heroAlt || heroText || "",
    tagline: tagline ?? "",
    isFullScreen: isFullScreen.value,
  };
});

const bgInfo = computed(() => {
  const { bgImage, bgImageDark, bgImageStyle } = frontmatter.value;

  return {
    image: isString(bgImage) ? withBase(bgImage) : null,
    imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
    style: bgImageStyle,
    isFullScreen: isFullScreen.value,
  };
});

const scrollToContent = () => {
  window.scrollTo({
    top: hero.value.clientHeight,
    behavior: "smooth",
  });
};
</script>

<template>
  <div
    :class="['vp2-hero', { bg: bgInfo.image, fullscreen: isFullScreen }]"
    ref="hero"
  >
    <slot name="hero-bg" v-bind="bgInfo">
      <div
        v-if="bgInfo.image"
        :class="['vp2-hero-mask', { light: bgInfo.imageDark }]"
        :style="[
          { background: `url(${bgInfo.image}) center/cover no-repeat` },
          bgInfo.style,
        ]"
      />
      <div
        v-if="bgInfo.imageDark"
        class="vp2-hero-mask dark"
        :style="[
          { background: `url(${bgInfo.imageDark}) center/cover no-repeat` },
          bgInfo.style,
        ]"
      />
    </slot>
    <slot name="hero" v-bind="heroInfo">
      <DropTransition :delay="0.04">
        <img
          key="light"
          :class="['vp2-hero-image', { light: heroInfo.imageDark }]"
          :style="heroInfo.style"
          :src="heroInfo.image"
          :alt="heroInfo.alt"
        />
        <img
          key="dark"
          v-if="heroInfo.imageDark"
          class="vp2-hero-image dark"
          :style="heroInfo.style"
          :src="heroInfo.imageDark"
          :alt="heroInfo.alt"
        />
      </DropTransition>
      <DropTransition :delay="0.08">
        <h1 class="vp2-hero-title">{{ heroInfo.text }}</h1>
      </DropTransition>
      <DropTransition :delay="0.08">
        <p
          v-if="heroInfo.tagline"
          class="vp2-hero-tagline"
          v-html="heroInfo.tagline"
        />
      </DropTransition>
    </slot>

    <button type="button" class="slide-down-button" @click="scrollToContent">
      <SlideDownIcon />
      <SlideDownIcon />
    </button>
  </div>
</template>
<style lang="scss">
@use "vuepress-shared/styles/reset";

.vp2-hero {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 450px;

  color: var(--text-color);
  text-align: left;

  font-family: var(--font-family-heading);

  @media (max-width: hope-config.$tablet) {
    height: 350px;
    justify-content: start;
  }

  @media (max-width: hope-config.$mobile) {
    margin: 0 0 1rem;
  }

  &.fullscreen {
    height: 100vh !important;

    .slide-down-button {
      display: block;
    }
  }

  &.bg {
    color: #eee;
  }

  > :not(.vp2-hero-mask, .vp2-hero-image) {
    position: relative;
    z-index: 2;
  }

  .slide-down-button {
    @include reset.button;
    position: absolute;
    bottom: 0;
    left: calc(50vw - 30px);

    display: none;

    width: 60px;
    height: 60px;
    padding: 10px;

    .icon {
      width: 30px;
      margin: -15px 0;

      animation-name: bounce-down;
      animation-duration: 1.5s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;

      &:first-child {
        color: rgb(255 255 255 / 15%);
      }

      &:last-child {
        color: rgb(255 255 255 / 50%);
      }
    }
  }
}

.vp2-hero-mask {
  position: absolute;
  inset: 0;

  &::after {
    content: " ";

    position: absolute;
    inset: 0;
    z-index: 1;

    display: block;

    background: var(--light-grey);

    opacity: 0.2;
  }

  &.light {
    display: block;

    #{hope-config.$dark-selector} & {
      display: none;
    }
  }

  &.dark {
    display: none;

    #{hope-config.$dark-selector} & {
      display: block;
    }
  }
}

.vp2-hero-image {
  display: block;
  position: absolute !important;
  bottom: 0;
  inset-inline-end: 0;
  max-height: 80vh;

  &.light {
    display: block;

    #{hope-config.$dark-selector} & {
      display: none;
    }
  }

  &.dark {
    display: none;

    #{hope-config.$dark-selector} & {
      display: block;
    }
  }

  + .vp2-blog-hero-title {
    margin: 0 auto;
  }
}

.vp2-hero-title {
  margin: 0.5rem 10%;
  font-weight: bold;
  font-size: 3rem;

  @media (max-width: hope-config.$tablet) {
    margin-top: 2rem;
  }

  @media (min-width: hope-config.$pc) {
    font-size: 4rem;
  }

  @media (max-width: hope-config.$tablet) {
    font-size: 1.75rem;
  }
}

.vp2-hero-tagline {
  margin: 0.5rem 10%;
  font-size: 2.5rem;

  @media (max-width: hope-config.$tablet) {
    font-size: 1.25rem;
  }
}

@keyframes bounce-down {
  from {
    transform: translateY(-5px);
  }

  to {
    transform: translateY(5px);
  }
}
</style>

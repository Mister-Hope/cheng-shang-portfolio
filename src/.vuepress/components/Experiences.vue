<script setup lang="ts">
import { computed } from "vue";
import type { ExperienceItem } from "./Experience.vue";
import Experience from "./Experience.vue";

const props = defineProps<{
  items?: ExperienceItem[];
  // TODO: Support it
  name?: string;
}>();

const experiences = computed(() => props.items ?? []);
</script>

<template>
  <div class="vp-experiences">
    <Experience v-for="item in experiences" :key="item.name" :item="item" />
  </div>
</template>

<style lang="scss">
.vp-experiences {
  display: flex;
  flex-wrap: wrap;
}
</style>

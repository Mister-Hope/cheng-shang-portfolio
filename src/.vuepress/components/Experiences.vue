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
    <Experience v-for="item in experiences" :item="item" />
  </div>
</template>

<style lang="scss">
.vp-experiences {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  justify-items: stretch;
  gap: 16px;
  align-self: stretch;

  @media (max-width: hope-config.$tablet) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
}
</style>

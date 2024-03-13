<script setup lang="ts">
import { computed } from "vue";
import StudyIcon from "./icons/StudyIcon.vue";
import WorkIcon from "./icons/WorkIcon.vue";
export interface ExperienceItem {
  place?: string;
  title?: string;
  time: string;
  type?: "study" | "work";
  logo?: string;
  description?: string;
  content?: string;
}

defineProps<{ item: ExperienceItem }>();
</script>

<template>
  <div class="vp-experience-wrapper">
    <div class="vp-experience">
      <div class="vp-experience-header">
        <img
          v-if="item.logo"
          class="vp-experience-logo"
          :src="item.logo"
          alt=""
        />
        <div class="vp-experience-badge">
          <div v-if="item.type === 'study'" class="vp-experience-badge-icon">
            <StudyIcon />
          </div>
          <div
            v-else-if="item.type === 'work'"
            class="vp-experience-badge-icon"
          >
            <WorkIcon />
          </div>
          <div class="vp-experience-badge-body">
            {{ item.time }}
          </div>
        </div>
      </div>
      <h5 v-if="item.place" class="vp-experience-item">{{ item.place }}</h5>
      <h5 v-if="item.title" class="vp-experience-item">{{ item.title }}</h5>
      <p v-if="item.description">{{ item.description }}</p>
      <div v-else v-html="item.content" />
    </div>
  </div>
</template>

<style lang="scss">
.vp-experience-wrapper {
  padding: 15px;
  box-sizing: border-box;

  @media (min-width: hope-config.$tablet) {
    flex: 0 0 50%;
  }
}

.vp-experience {
  position: relative;
  top: 0;
  padding: 30px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-color);
  transition: ease all 0.35s;

  &:hover {
    box-shadow: 0 4px 10px 0 var(--card-shadow);
    top: -2px;
  }
}

.vp-experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.vp-experience-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0.25rem;
}

.vp-experience-badge {
  display: flex;
  align-items: center;
}

.vp-experience-badge-icon {
  background: var(--theme-color);
  color: var(--white);
  width: 42px;
  height: 42px;
  text-align: center;
  border-radius: 50%;
  font-weight: 600;
  line-height: 42px;
  font-size: 21px;

  .icon {
    width: 1em;
    height: 1em;
  }
}

.vp-experience-badge-body {
  flex: 1;
  background: var(--theme-color);
  color: var(--white);
  padding: 4px 10px 4px 15px;
  font-size: 12px;
  margin: 0 0 0 -10px;
}

.vp-experience-item {
  font-weight: 600;
  font-size: 16px;
  margin: 0 0 15px;
}
</style>

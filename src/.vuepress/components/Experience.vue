<script setup lang="ts">
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
        <div v-else-if="item.type === 'work'" class="vp-experience-badge-icon">
          <WorkIcon />
        </div>
        <div class="vp-experience-badge-body">
          {{ item.time }}
        </div>
      </div>
    </div>
    <h5 v-if="item.place" class="vp-experience-item" v-html="item.place" />
    <h5 v-if="item.title" class="vp-experience-item" v-html="item.title" />
    <p v-if="item.description" class="vp-experience-description">
      {{ item.description }}
    </p>
    <div v-else class="vp-experience-description" v-html="item.content" />
  </div>
</template>

<style lang="scss">
.vp-experience {
  position: relative;
  top: 0;
  padding: 30px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg);
  transition: ease all 0.35s;

  &:hover {
    box-shadow: 0 4px 10px 0 var(--vp-c-shadow);
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
  background: var(--vp-c-accent);
  color: var(--vp-c-white);
  width: 22px;
  height: 22px;
  padding: 10px;
  text-align: center;
  border-radius: 50%;
  font-weight: 600;

  .icon {
    width: 22px;
    height: 22px;
  }
}

.vp-experience-badge-body {
  flex: 1;
  background: var(--vp-c-accent);
  color: var(--vp-c-white);
  padding: 6px 12px 6px 16px;
  font-size: 12px;
  margin: 0 0 0 -10px;
  border-radius: 0 8px 8px 0;
}

.vp-experience-item {
  font-weight: 600;
  font-size: 16px;
  margin: 0 0 15px;
}

.vp-experience-description {
  font-style: italic;
  font-size: 15px;
}
</style>

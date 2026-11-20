<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '../data/resume'

const base = import.meta.env.BASE_URL

/** 前兩個專案佔半寬當主打，其餘三欄排列 */
function span(index: number) {
  return index < 2 ? 's6' : 's4'
}

/**
 * 圖檔可能還沒放進 public/projects/（例如桌面應用要等使用者補截圖），
 * 載入失敗就把該專案的圖隱藏，卡片退回純文字版。
 */
const missing = ref<Record<string, boolean>>({})
function onImageError(name: string) {
  missing.value = { ...missing.value, [name]: true }
}
</script>

<template>
  <section id="projects" class="section">
    <div class="wide">
      <div class="section-head">
        <h2 class="section-title">專案實績</h2>
        <p class="section-intro">{{ projects.intro }}</p>
      </div>
      <div class="bento">
        <article
          v-for="(project, index) in projects.items"
          :key="project.name"
          v-reveal
          class="tile project hoverable"
          :class="span(index)"
        >
          <a
            v-if="project.image && !missing[project.name]"
            :href="project.url"
            :target="project.url ? '_blank' : undefined"
            :rel="project.url ? 'noopener' : undefined"
            class="shot"
            :class="{ static: !project.url }"
            :aria-label="project.url ? `開啟 ${project.name} 網站` : `${project.name} 畫面`"
          >
            <img
              :src="`${base}projects/${project.image}`"
              :alt="`${project.name} 畫面截圖`"
              loading="lazy"
              width="1024"
              height="640"
              @error="onImageError(project.name)"
            />
          </a>

          <header class="project-head">
            <div class="project-titles">
              <h3 class="project-name">{{ project.name }}</h3>
              <p class="project-subtitle">{{ project.subtitle }}</p>
            </div>
            <a v-if="project.url" :href="project.url" class="visit" target="_blank" rel="noopener">開啟網站 ↗</a>
            <span v-else-if="project.kind" class="kind">{{ project.kind }}</span>
          </header>

          <p class="muted project-desc">{{ project.description }}</p>
          <ul class="chips">
            <li v-for="tech in project.stack.slice(0, 6)" :key="tech" class="chip">{{ tech }}</li>
            <li v-if="project.stack.length > 6" class="chip more">+{{ project.stack.length - 6 }}</li>
          </ul>
          <details class="project-more">
            <summary>技術亮點與整合</summary>
            <div class="project-body">
              <ul class="bullets">
                <li v-for="item in project.highlights" :key="item">{{ item }}</li>
              </ul>
              <ul class="bullets soft">
                <li v-for="item in project.integrations" :key="item">{{ item }}</li>
              </ul>
            </div>
          </details>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project {
  padding-top: 0;
  overflow: hidden;
}

/* 截圖佔滿卡片上緣，寬高比固定讓同列卡片對齊 */
.shot {
  display: block;
  margin: 0 -24px 10px;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--tile-alt);
  border-bottom: 1px solid var(--border);
}

.shot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

@media (hover: hover) and (pointer: fine) {
  .shot img {
    transition: transform var(--duration-base) var(--ease-out);
  }

  .shot:not(.static):hover img {
    transform: scale(1.03);
  }
}

.project:not(:has(.shot)) {
  padding-top: 22px;
}

.project-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.project-titles {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.project-name {
  font-size: 1.2rem;
  font-weight: 700;
}

.project-subtitle {
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 500;
}

.visit {
  flex: none;
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  color: var(--text);
  font-size: 0.82rem;
  font-weight: 500;
  white-space: nowrap;
}

.visit:hover {
  text-decoration: none;
  border-color: var(--accent);
  color: var(--accent);
}

.kind {
  flex: none;
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  background: var(--tile-alt);
  color: var(--text-muted);
  font-size: 0.8rem;
  white-space: nowrap;
}

.project-desc {
  font-size: 0.93rem;
  line-height: 1.65;
}

.chip.more {
  color: var(--text-faint);
}

.project-more {
  margin-top: auto;
  padding-top: 6px;
}

.project-more summary {
  cursor: pointer;
  list-style: none;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.project-more summary::-webkit-details-marker {
  display: none;
}

.project-more summary::before {
  content: '+';
  font-weight: 700;
  width: 1em;
}

.project-more[open] summary::before {
  content: '−';
}

.project-body {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.bullets {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.bullets li {
  position: relative;
  padding-left: 14px;
  font-size: 0.9rem;
  line-height: 1.6;
}

.bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.68em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}

.bullets.soft {
  padding-top: 10px;
  border-top: 1px dashed var(--border);
}

.bullets.soft li {
  color: var(--text-muted);
}

.bullets.soft li::before {
  background: var(--border-strong);
}

@media (max-width: 600px) {
  .shot {
    margin: 0 -18px 8px;
  }

  .project-head {
    flex-direction: column;
  }
}
</style>

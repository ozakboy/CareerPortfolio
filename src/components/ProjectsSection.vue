<script setup lang="ts">
import { projects } from '../data/resume'

/** 前兩個專案佔半寬當主打，其餘三欄排列 */
function span(index: number) {
  return index < 2 ? 's6' : 's4'
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
          <header class="project-head">
            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-subtitle">{{ project.subtitle }}</p>
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
.project-head {
  display: flex;
  flex-direction: column;
  gap: 2px;
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
</style>

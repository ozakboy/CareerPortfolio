<script setup lang="ts">
import { projects } from '../data/resume'
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title">專案實績</h2>
      <p class="section-intro">{{ projects.intro }}</p>
      <div class="list">
        <article v-for="project in projects.items" :key="project.name" class="card project">
          <header class="project-head">
            <span class="project-icon" aria-hidden="true">{{ project.icon }}</span>
            <div class="project-titles">
              <h3 class="project-name">{{ project.name }}</h3>
              <p class="project-subtitle">{{ project.subtitle }}</p>
            </div>
          </header>

          <p class="project-desc">{{ project.description }}</p>

          <div class="project-body">
            <div class="block">
              <h4 class="block-title">技術棧</h4>
              <ul class="tags">
                <li v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</li>
              </ul>
            </div>

            <div class="block">
              <h4 class="block-title">外部整合 / 基礎建設</h4>
              <ul class="bullets">
                <li v-for="item in project.integrations" :key="item">{{ item }}</li>
              </ul>
            </div>

            <div class="block">
              <h4 class="block-title">技術亮點</h4>
              <ul class="bullets highlights">
                <li v-for="item in project.highlights" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.project {
  padding: 26px 28px 28px;
  transition: border-color 0.18s;
}

.project:hover {
  border-color: var(--accent);
}

.project-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
}

.project-icon {
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--accent-soft);
  font-size: 1.5rem;
  flex: none;
}

.project-name {
  font-size: 1.25rem;
}

.project-subtitle {
  color: var(--accent-strong);
  font-weight: 600;
  font-size: 0.95rem;
}

.project-desc {
  color: var(--text-muted);
  border-left: 3px solid var(--border);
  padding-left: 14px;
  margin-bottom: 18px;
}

.project-body {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.block-title {
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 8px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  white-space: normal;
}

.bullets {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.bullets li {
  position: relative;
  padding-left: 16px;
  color: var(--text-muted);
  font-size: 0.93rem;
  line-height: 1.6;
}

.bullets li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 0.65em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-faint);
}

.highlights li {
  color: var(--text);
}

.highlights li::before {
  background: var(--accent);
}

@media (max-width: 960px) {
  .project-body {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .project {
    padding: 20px 18px 22px;
  }
}
</style>

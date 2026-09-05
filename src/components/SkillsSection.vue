<script setup lang="ts">
import { skillGroups } from '../data/resume'
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title">工作技能</h2>
      <p class="section-intro">橫跨 .NET 與 Node 生態的後端、Vue / Nuxt 前端、資料庫、機器人整合到 DevOps 維運。</p>
      <div class="grid">
        <article v-for="group in skillGroups" :key="group.title" class="card skill-card">
          <header class="skill-header">
            <span class="skill-icon" aria-hidden="true">{{ group.icon }}</span>
            <h3 class="skill-title">{{ group.title }}</h3>
          </header>
          <ul class="skill-list">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
}

.skill-card {
  padding: 22px 24px;
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.skill-icon {
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--accent-soft);
  font-size: 1.1rem;
  flex: none;
}

.skill-title {
  font-size: 1.08rem;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill-list li {
  position: relative;
  padding-left: 18px;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.skill-list li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 0.72em;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>

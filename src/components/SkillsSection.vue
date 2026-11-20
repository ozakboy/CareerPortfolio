<script setup lang="ts">
import { skillGroups } from '../data/resume'
</script>

<template>
  <section id="skills" class="section">
    <div class="wide">
      <div class="section-head">
        <h2 class="section-title">工作技能</h2>
        <p class="section-intro">橫跨 .NET 與 Node 生態的後端、Vue / Nuxt 前端、資料庫、機器人整合、DevOps 維運到 AI 導入。</p>
      </div>
      <div class="bento">
        <article v-for="group in skillGroups" :key="group.title" v-reveal class="tile hoverable s4">
          <h3 class="tile-title">{{ group.title }}</h3>
          <ul class="list">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.list li {
  position: relative;
  padding-left: 14px;
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.68em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}
</style>

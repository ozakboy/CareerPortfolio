<script setup lang="ts">
import { techStack } from '../data/resume'
</script>

<template>
  <section id="stack" class="section">
    <div class="wide">
      <div class="section-head">
        <h2 class="section-title">技術棧總覽</h2>
        <p class="section-intro">依類別整理的完整技術清單。</p>
      </div>
      <div class="bento">
        <div v-for="row in techStack" :key="row.category" v-reveal class="tile stack s3">
          <p class="tile-label">{{ row.category }}</p>
          <ul class="chips">
            <li v-for="tech in row.technologies" :key="tech" class="chip">{{ tech }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack {
  padding: 18px 20px;
  gap: 10px;
}

.stack .tile-label {
  color: var(--text);
  letter-spacing: 0.06em;
  font-size: 0.85rem;
}

.chip {
  font-size: 0.8rem;
  padding: 3px 9px;
}
</style>

<script setup lang="ts">
import { values } from '../data/resume'
</script>

<template>
  <section id="values" class="section">
    <div class="container">
      <h2 class="section-title">我能為客戶做到什麼</h2>
      <p class="section-intro">{{ values.intro }}</p>
      <ul class="grid">
        <li v-for="(item, index) in values.items" :key="item.title" class="card value-card">
          <span class="index">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3 class="value-title">{{ item.title }}</h3>
          <p class="value-desc">{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 18px;
}

.value-card {
  padding: 22px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.18s, border-color 0.18s;
}

.value-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}

.index {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent);
}

.value-title {
  font-size: 1.1rem;
}

.value-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
}
</style>

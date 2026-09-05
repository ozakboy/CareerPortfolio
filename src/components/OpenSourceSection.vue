<script setup lang="ts">
import { openSource } from '../data/resume'
</script>

<template>
  <section id="opensource" class="section">
    <div class="container">
      <h2 class="section-title">開源 / 自製套件</h2>
      <p class="section-intro">{{ openSource.intro }}</p>
      <ul class="grid">
        <li v-for="item in openSource.items" :key="item.name" v-reveal>
          <component
            :is="item.url ? 'a' : 'div'"
            :href="item.url"
            :target="item.url ? '_blank' : undefined"
            :rel="item.url ? 'noopener' : undefined"
            class="card pkg"
          >
            <div class="pkg-head">
              <span class="pkg-icon" aria-hidden="true">📦</span>
              <h3 class="pkg-name">{{ item.name }}</h3>
              <span v-if="item.url" class="pkg-arrow" aria-hidden="true">↗</span>
            </div>
            <p class="pkg-desc">{{ item.description }}</p>
          </component>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

@media (max-width: 1100px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.pkg {
  display: block;
  height: 100%;
  padding: 20px 22px;
  color: inherit;
  transition: transform 0.18s, border-color 0.18s;
}

.pkg:hover {
  text-decoration: none;
  transform: translateY(-3px);
  border-color: var(--accent);
}

.pkg-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.pkg-icon {
  font-size: 1.1rem;
}

.pkg-name {
  font-size: 1.02rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Noto Sans TC', monospace;
  flex: 1;
  min-width: 0;
  overflow-wrap: anywhere;
}

.pkg-arrow {
  color: var(--text-faint);
}

.pkg:hover .pkg-arrow {
  color: var(--accent);
}

.pkg-desc {
  color: var(--text-muted);
  font-size: 0.93rem;
}
</style>

<script setup lang="ts">
import { openSource } from '../data/resume'
</script>

<template>
  <section id="opensource" class="section">
    <div class="wide">
      <div class="section-head">
        <h2 class="section-title">開源 / 自製套件</h2>
        <p class="section-intro">{{ openSource.intro }}</p>
      </div>
      <div class="bento">
        <div class="tile dark count s4">
          <p class="tile-label">NUGET</p>
          <p class="count-value">{{ openSource.packageCount }}</p>
          <p class="muted">個已發佈套件，交易、LINE、AI、HTTP 管線各成體系</p>
          <a href="https://www.nuget.org/profiles/ozakboy" class="count-link" target="_blank" rel="noopener">nuget.org/profiles/ozakboy ↗</a>
        </div>
        <component
          :is="item.url ? 'a' : 'div'"
          v-for="item in openSource.items"
          :key="item.name"
          :href="item.url"
          :target="item.url ? '_blank' : undefined"
          :rel="item.url ? 'noopener' : undefined"
          v-reveal
          class="tile pkg hoverable s4"
        >
          <p class="pkg-name">{{ item.name }}<span v-if="item.url" class="arrow" aria-hidden="true"> ↗</span></p>
          <p class="muted pkg-desc">{{ item.description }}</p>
        </component>
      </div>
    </div>
  </section>
</template>

<style scoped>
.count-value {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
}

.count-link {
  margin-top: auto;
  font-size: 0.85rem;
  font-family: var(--font-mono);
  color: inherit;
}

.pkg {
  color: var(--text);
  text-decoration: none;
}

.pkg:hover {
  text-decoration: none;
  color: var(--text);
}

.pkg-name {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.arrow {
  color: var(--text-faint);
  font-weight: 400;
}

a.pkg:hover .pkg-name {
  color: var(--accent);
}

.pkg-desc {
  font-size: 0.9rem;
  line-height: 1.6;
}
</style>

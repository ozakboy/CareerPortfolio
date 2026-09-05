<script setup lang="ts">
import { profile } from '../data/resume'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span>© {{ year }} {{ profile.name }}</span>
      <span class="built">Built with Vue 3 + Vite · Hosted on GitHub Pages</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 28px 0;
  color: var(--text-faint);
  font-size: 0.85rem;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}
</style>

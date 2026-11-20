<script setup lang="ts">
import { profile } from '../data/resume'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wide footer-inner">
      <span>© {{ year }} {{ profile.fullName }} · {{ profile.name }}</span>
      <span>Vue 3 + Vite · GitHub Pages</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: 20px 36px;
  color: var(--text-faint);
  font-size: 0.82rem;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 16px;
  padding-left: calc(var(--page-padding) + 6px);
}
</style>

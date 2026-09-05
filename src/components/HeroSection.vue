<script setup lang="ts">
import { profile } from '../data/resume'

const chips = ['C# / .NET 10', 'TypeScript', 'Vue 3 / Nuxt', 'PostgreSQL', 'Docker / CI-CD', 'AWS', 'AI Coding', '本地 LLM / ComfyUI']
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero-inner">
      <p class="eyebrow">個人簡歷 · Career Portfolio</p>
      <h1 class="name">{{ profile.name }}</h1>
      <p class="title">{{ profile.title }}</p>
      <p class="tagline">
        一個人扛起從商業構想到正式上線維運的完整產品開發：需求分析、系統架構、前後端開發、資料庫設計、容器化部署與雲端維運。
      </p>

      <ul class="chips" aria-label="核心技術">
        <li v-for="chip in chips" :key="chip" class="chip">{{ chip }}</li>
      </ul>

      <div class="cta">
        <a :href="`mailto:${profile.email}`" class="btn primary">✉️ 聯絡我</a>
        <a :href="profile.github" class="btn ghost" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
    <div class="hero-glow" aria-hidden="true"></div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: var(--hero-bg);
  color: var(--hero-text);
  padding: 96px 0 88px;
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.eyebrow {
  color: var(--hero-accent);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.name {
  font-size: clamp(2.6rem, 6vw, 4rem);
  letter-spacing: -0.02em;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Noto Sans TC', monospace;
}

.title {
  margin-top: 8px;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 600;
  color: var(--hero-text);
}

.tagline {
  margin-top: 20px;
  font-size: 1.05rem;
  color: var(--hero-muted);
  max-width: 62ch;
}

.chips {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  padding: 5px 13px;
  border-radius: 999px;
  border: 1px solid rgb(148 163 184 / 0.35);
  background: rgb(255 255 255 / 0.06);
  color: var(--hero-text);
  font-size: 0.875rem;
  font-weight: 500;
}

.cta {
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 11px 20px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.15s, background 0.15s, border-color 0.15s;
}

.btn:hover {
  text-decoration: none;
  transform: translateY(-1px);
}

.btn.primary {
  background: var(--hero-accent);
  color: #0b1220;
}

.btn.primary:hover {
  background: #7dd3fc;
}

.btn.ghost {
  border: 1px solid rgb(148 163 184 / 0.45);
  color: var(--hero-text);
}

.btn.ghost:hover {
  border-color: var(--hero-accent);
  color: var(--hero-accent);
}

.hero-glow {
  position: absolute;
  inset: auto -10% -40% auto;
  width: 60vw;
  max-width: 720px;
  aspect-ratio: 1;
  background: radial-gradient(circle at center, rgb(56 189 248 / 0.28), transparent 62%);
  filter: blur(20px);
  pointer-events: none;
}

@media (max-width: 640px) {
  .hero {
    padding: 64px 0 60px;
  }
}
</style>

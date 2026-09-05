<script setup lang="ts">
import { openSource, profile, projects, skillGroups } from '../data/resume'

const chips = ['C# / .NET 10', 'TypeScript', 'Vue 3 / Nuxt', 'PostgreSQL', 'Docker / CI-CD', 'AWS', 'AI Coding', '本地 LLM / ComfyUI']

const stats = [
  { value: projects.items.length, label: '完整交付專案', href: '#projects' },
  { value: openSource.items.length, label: '開源 / NuGet 套件', href: '#opensource' },
  { value: skillGroups.length, label: '技術領域', href: '#skills' },
]

const focus = ['全端開發（.NET × Vue / Nuxt）', 'AI 導入與 MCP Server', 'CRM / 預約 / 社群平台', 'Docker / CI-CD / AWS 維運']
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero-inner">
      <div class="hero-main">
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
          <a href="#projects" class="btn ghost">看專案實績</a>
          <a :href="profile.github" class="btn ghost" target="_blank" rel="noopener">GitHub ↗</a>
        </div>
      </div>

      <aside class="glance" aria-label="一眼看懂">
        <ul class="stats">
          <li v-for="stat in stats" :key="stat.label">
            <a :href="stat.href" class="stat">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </a>
          </li>
        </ul>

        <div class="glance-block">
          <h2 class="glance-title">專注領域</h2>
          <ul class="focus">
            <li v-for="item in focus" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="glance-block">
          <h2 class="glance-title">快速聯繫</h2>
          <ul class="quick">
            <li>
              <span class="quick-label">Email</span>
              <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
            </li>
            <li>
              <span class="quick-label">LINE</span>
              <a :href="profile.lineUrl" target="_blank" rel="noopener">{{ profile.lineId }}</a>
            </li>
          </ul>
        </div>
      </aside>
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
  padding: 88px 0 80px;
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(320px, 1fr);
  gap: clamp(32px, 5vw, 80px);
  align-items: center;
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
  font-size: clamp(2.6rem, 5vw, 4.2rem);
  letter-spacing: -0.02em;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Noto Sans TC', monospace;
}

.title {
  margin-top: 8px;
  font-size: clamp(1.4rem, 2.4vw, 1.9rem);
  font-weight: 600;
  color: var(--hero-text);
}

.tagline {
  margin-top: 20px;
  font-size: 1.05rem;
  color: var(--hero-muted);
  max-width: 64ch;
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

/* 右側摘要卡 */
.glance {
  border: 1px solid rgb(148 163 184 / 0.25);
  border-radius: 18px;
  background: rgb(255 255 255 / 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 14px 8px;
  border-radius: 12px;
  background: rgb(255 255 255 / 0.05);
  color: var(--hero-text);
  transition: background 0.15s, transform 0.15s;
}

.stat:hover {
  text-decoration: none;
  background: rgb(56 189 248 / 0.14);
  transform: translateY(-2px);
}

.stat-value {
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 1.1;
  color: var(--hero-accent);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}

.stat-label {
  margin-top: 6px;
  font-size: 0.78rem;
  color: var(--hero-muted);
}

.glance-block + .glance-block {
  border-top: 1px solid rgb(148 163 184 / 0.2);
  padding-top: 18px;
}

.glance-title {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--hero-accent);
  margin-bottom: 10px;
}

.focus {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.focus li {
  position: relative;
  padding-left: 16px;
  font-size: 0.93rem;
  color: var(--hero-text);
}

.focus li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.68em;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--hero-accent);
}

.quick {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.quick li {
  display: flex;
  align-items: baseline;
  gap: 12px;
  font-size: 0.93rem;
}

.quick-label {
  flex: none;
  width: 44px;
  font-size: 0.78rem;
  color: var(--hero-muted);
}

.quick a {
  color: var(--hero-text);
  overflow-wrap: anywhere;
}

.quick a:hover {
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

@media (max-width: 960px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }

  .glance {
    max-width: 560px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 56px 0 56px;
  }

  .stats {
    gap: 8px;
  }

  .stat-value {
    font-size: 1.6rem;
  }
}
</style>

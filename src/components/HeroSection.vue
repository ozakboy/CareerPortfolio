<script setup lang="ts">
import { hero, openSource, profile, projects, skillGroups } from '../data/resume'

const portraitUrl = `${import.meta.env.BASE_URL}${profile.portrait}`

const stats = [
  { value: projects.items.length, label: '完整交付專案', href: '#projects' },
  { value: openSource.items.length, label: 'NuGet 套件', href: '#opensource' },
  { value: skillGroups.length, label: '技術領域', href: '#skills' },
]
</script>

<template>
  <section id="top" class="hero section">
    <div class="wide bento">
      <figure class="tile photo s4">
        <img :src="portraitUrl" alt="蔡承訓的正面半身照" width="1408" height="1760" fetchpriority="high" />
        <figcaption class="photo-caption">
          <span class="status-dot" aria-hidden="true"></span>
          {{ hero.status }}
        </figcaption>
      </figure>

      <div class="tile intro s8">
        <p class="tile-label">全端工程師 · CAREER PORTFOLIO</p>
        <h1 class="name">{{ profile.fullName }} <span class="alias">{{ profile.name }}</span></h1>
        <p class="headline">{{ hero.headline }}</p>
        <p class="lead muted">{{ hero.lead }}</p>
        <ul class="chips" aria-label="核心技術">
          <li v-for="chip in hero.chips" :key="chip" class="chip">{{ chip }}</li>
        </ul>
        <div class="cta">
          <a href="#projects" class="btn primary">看專案實績</a>
          <a href="#contact" class="btn">聯絡我</a>
          <a :href="profile.github" class="btn" target="_blank" rel="noopener">GitHub ↗</a>
        </div>
      </div>

      <a v-for="stat in stats" :key="stat.label" :href="stat.href" class="tile stat hoverable s2">
        <span class="stat-value">{{ stat.value }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </a>

      <div class="tile now dark s4">
        <p class="tile-label">{{ hero.now.label }}</p>
        <p class="now-name">{{ hero.now.name }}</p>
        <p class="muted now-desc">{{ hero.now.description }}</p>
        <p class="now-meta">{{ hero.now.meta }}</p>
      </div>

      <div class="tile accent s4">
        <p class="tile-label">{{ hero.ai.label }}</p>
        <p class="tile-title">{{ hero.ai.title }}</p>
        <p class="muted ai-desc">{{ hero.ai.description }}</p>
      </div>

      <div class="tile contact s4">
        <p class="tile-label">快速聯繫</p>
        <ul class="contact-list">
          <li><span class="contact-key">Email</span><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></li>
          <li><span class="contact-key">LINE</span><a :href="profile.lineUrl" target="_blank" rel="noopener">{{ profile.lineId }}</a></li>
          <li><span class="contact-key">GitHub</span><a :href="profile.github" target="_blank" rel="noopener">github.com/{{ profile.name }}</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: clamp(16px, 2.5vw, 28px);
}

.s2 {
  grid-column: span 2;
}

/* 照片格 */
.photo {
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  grid-row: span 2;
  min-height: 360px;
}

.photo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.photo-caption {
  position: absolute;
  left: 14px;
  bottom: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgb(21 23 28 / 0.72);
  color: #ffffff;
  font-size: 0.8rem;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
}

/* 自介格 */
.intro {
  padding: 28px 32px 30px;
  justify-content: center;
  gap: 12px;
}

.name {
  font-size: clamp(1.9rem, 3.4vw, 2.6rem);
  font-weight: 700;
  letter-spacing: 0.02em;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4px 14px;
}

.alias {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-faint);
  font-family: var(--font-mono);
  letter-spacing: 0;
}

.headline {
  font-size: clamp(1.15rem, 1.9vw, 1.45rem);
  font-weight: 600;
  line-height: 1.4;
  text-wrap: balance;
}

.lead {
  max-width: 62ch;
}

.intro .chips {
  margin-top: 4px;
}

.cta {
  margin-top: 6px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.btn {
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  color: var(--text);
  font-weight: 500;
  font-size: 0.93rem;
  text-decoration: none;
  transition: transform var(--duration-fast) var(--ease-out), border-color var(--duration-fast) ease, background var(--duration-fast) ease, color var(--duration-fast) ease;
}

.btn:active {
  transform: scale(0.97);
}

.btn.primary {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-text-on);
}

@media (hover: hover) and (pointer: fine) {
  .btn:hover {
    border-color: var(--accent);
    color: var(--accent);
    text-decoration: none;
  }

  .btn.primary:hover {
    background: var(--accent-strong);
    border-color: var(--accent-strong);
    color: var(--accent-text-on);
  }
}

/* 數字格 */
.stat {
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
  color: var(--text);
  text-decoration: none;
}

.stat:hover {
  text-decoration: none;
  color: var(--text);
}

.stat-value {
  font-size: clamp(2rem, 3vw, 2.6rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* 現在在做 */
.now-name {
  font-size: 1.5rem;
  font-weight: 700;
}

.now-desc {
  font-size: 0.95rem;
}

.now-meta {
  margin-top: auto;
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--tile-dark-muted);
}

.ai-desc {
  font-size: 0.93rem;
}

/* 聯繫格 */
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9rem;
}

.contact-list li {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.contact-list a {
  overflow-wrap: anywhere;
  color: var(--text);
  font-weight: 500;
}

.contact-list a:hover {
  color: var(--accent);
}

.contact-key {
  font-size: 0.75rem;
  color: var(--text-faint);
}

@media (max-width: 960px) {
  .photo {
    grid-column: span 6;
    grid-row: span 1;
    aspect-ratio: 4 / 5;
    min-height: 0;
  }

  .intro {
    grid-column: span 6;
  }

  .s2 {
    grid-column: span 2;
  }
}

@media (max-width: 600px) {
  .photo {
    grid-column: span 12;
    aspect-ratio: 1 / 1;
  }

  .intro {
    grid-column: span 12;
    padding: 22px 20px 24px;
  }

  .s2 {
    grid-column: span 4;
    padding: 16px 12px;
  }

  .stat-value {
    font-size: 1.6rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }
}
</style>

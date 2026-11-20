<script setup lang="ts">
import { openSource } from '../data/resume'

/** 依體系統計，顯示在統計格裡 */
const families = Array.from(
  openSource.items.reduce((map, item) => map.set(item.family, (map.get(item.family) ?? 0) + 1), new Map<string, number>()),
)
</script>

<template>
  <section id="opensource" class="section">
    <div class="wide">
      <div class="section-head">
        <h2 class="section-title">開源 / 自製套件</h2>
        <p class="section-intro">{{ openSource.intro }}</p>
      </div>
      <div class="bento">
        <div class="tile dark count s3">
          <p class="tile-label">NUGET</p>
          <p class="count-value">{{ openSource.items.length }}</p>
          <p class="muted">個已發佈套件，每個都附 NuGet 與 GitHub 原始碼</p>
          <ul class="families">
            <li v-for="[family, count] in families" :key="family">{{ family }} <span>{{ count }}</span></li>
          </ul>
          <a href="https://www.nuget.org/profiles/ozakboy" class="count-link" target="_blank" rel="noopener">nuget.org/profiles/ozakboy ↗</a>
        </div>

        <article v-for="item in openSource.items" :key="item.name" v-reveal class="tile pkg hoverable s3">
          <div class="pkg-head">
            <span class="family">{{ item.family }}</span>
            <span class="version">v{{ item.version }}</span>
          </div>
          <!-- 在每個句點後插入零寬空白，長名稱才會在句點處換行而不是切在單字中間 -->
          <h3 class="pkg-name">{{ item.name.replace(/\./g, '.​') }}</h3>
          <p class="muted pkg-desc">{{ item.description }}</p>
          <div class="pkg-links">
            <a :href="item.nuget" target="_blank" rel="noopener">NuGet ↗</a>
            <a :href="item.github" target="_blank" rel="noopener">GitHub ↗</a>
          </div>
        </article>
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

.families {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  font-size: 0.8rem;
  color: var(--tile-dark-muted);
}

.families span {
  color: inherit;
  font-family: var(--font-mono);
}

.count-link {
  margin-top: auto;
  font-size: 0.85rem;
  font-family: var(--font-mono);
  color: inherit;
}

.pkg {
  gap: 8px;
}

.pkg-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.family {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--accent);
}

.version {
  font-size: 0.75rem;
  font-family: var(--font-mono);
  color: var(--text-faint);
}

.pkg-name {
  font-family: var(--font-mono);
  font-size: 0.92rem;
  font-weight: 600;
  overflow-wrap: break-word;
}

.pkg-desc {
  font-size: 0.88rem;
  line-height: 1.6;
}

.pkg-links {
  margin-top: auto;
  padding-top: 6px;
  display: flex;
  gap: 8px;
}

.pkg-links a {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0 11px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--tile-alt);
  color: var(--text);
  font-size: 0.8rem;
  font-weight: 500;
}

.pkg-links a:hover {
  text-decoration: none;
  border-color: var(--accent);
  color: var(--accent);
}
</style>

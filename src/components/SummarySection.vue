<script setup lang="ts">
import { summary } from '../data/resume'
</script>

<template>
  <section id="summary" class="section">
    <div class="container">
      <h2 class="section-title">職涯摘要</h2>
      <div v-reveal class="layout">
        <div class="text">
          <!-- 內容為專案內部靜態資料，包含 <strong> 強調標記，故使用 v-html -->
          <p
            v-for="(paragraph, index) in summary.paragraphs"
            :key="index"
            class="paragraph"
            v-html="paragraph"
          ></p>
        </div>
        <aside class="card highlights">
          <h3 class="highlights-title">核心能力</h3>
          <dl>
            <template v-for="item in summary.highlights" :key="item.label">
              <dt>{{ item.label }}</dt>
              <dd>{{ item.value }}</dd>
            </template>
          </dl>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.layout {
  margin-top: 24px;
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(260px, 1fr);
  gap: 32px;
  align-items: start;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.paragraph {
  color: var(--text-muted);
  font-size: 1.02rem;
}

.highlights {
  padding: 22px 24px;
  position: sticky;
  top: calc(var(--header-height) + 24px);
}

.highlights-title {
  font-size: 1rem;
  color: var(--text-faint);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 14px;
}

dl {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

dt {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent-strong);
}

dd {
  margin: 2px 0 0;
  color: var(--text);
  line-height: 1.6;
}

@media (max-width: 860px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .highlights {
    position: static;
  }
}
</style>

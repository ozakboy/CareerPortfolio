<script setup lang="ts">
import { summary } from '../data/resume'
</script>

<template>
  <section id="summary" class="section">
    <div class="wide">
      <div class="section-head">
        <h2 class="section-title">職涯摘要</h2>
      </div>
      <div class="bento">
        <div v-reveal class="tile text s8">
          <!-- 內容為專案內部靜態資料，包含 <strong> 強調標記，故使用 v-html -->
          <p
            v-for="(paragraph, index) in summary.paragraphs"
            :key="index"
            class="paragraph muted"
            v-html="paragraph"
          ></p>
        </div>
        <dl v-reveal class="tile highlights s4">
          <p class="tile-label">核心能力</p>
          <div v-for="item in summary.highlights" :key="item.label" class="highlight">
            <dt>{{ item.label }}</dt>
            <dd>{{ item.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text {
  gap: 14px;
  padding: 26px 28px;
}

.paragraph {
  font-size: 0.98rem;
}

.highlights {
  margin: 0;
  gap: 0;
}

.highlight {
  padding-block: 10px;
  border-top: 1px solid var(--border);
}

.highlight:first-of-type {
  margin-top: 4px;
}

dt {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
}

dd {
  margin: 2px 0 0;
  font-size: 0.93rem;
  line-height: 1.6;
}
</style>

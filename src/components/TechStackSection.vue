<script setup lang="ts">
import { techStack } from '../data/resume'
</script>

<template>
  <section id="stack" class="section">
    <div class="container">
      <h2 class="section-title">技術棧總覽</h2>
      <p class="section-intro">依類別整理的完整技術清單。</p>
      <div v-reveal class="card table-wrap">
        <table class="stack-table">
          <thead>
            <tr>
              <th scope="col">類別</th>
              <th scope="col">技術</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in techStack" :key="row.category">
              <th scope="row">{{ row.category }}</th>
              <td>
                <ul class="tags">
                  <li v-for="tech in row.technologies" :key="tech" class="tag">{{ tech }}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
.table-wrap {
  overflow-x: auto;
}

.stack-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 560px;
}

thead th {
  text-align: left;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-faint);
  padding: 14px 20px;
  border-bottom: 1px solid var(--border);
  background: var(--bg-muted);
}

tbody th,
tbody td {
  padding: 12px 20px;
  border-bottom: 1px solid var(--border);
  vertical-align: top;
}

tbody tr:last-child th,
tbody tr:last-child td {
  border-bottom: none;
}

tbody th {
  text-align: left;
  white-space: nowrap;
  width: 1%;
  color: var(--text);
  font-weight: 700;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  white-space: normal;
}
</style>

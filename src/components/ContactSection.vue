<script setup lang="ts">
import { profile } from '../data/resume'
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">聯繫方式</h2>
      <p class="section-intro">歡迎洽談專案合作、系統開發或技術顧問，我會盡快回覆。</p>
      <ul class="cards">
        <li>
          <a :href="`mailto:${profile.email}`" v-reveal class="card contact-card">
            <span class="contact-icon" aria-hidden="true">✉️</span>
            <span class="contact-body">
              <span class="contact-label">信箱</span>
              <span class="contact-value">{{ profile.email }}</span>
            </span>
          </a>
        </li>
        <li>
          <a :href="profile.lineUrl" v-reveal class="card contact-card" target="_blank" rel="noopener">
            <span class="contact-icon line" aria-hidden="true">LINE</span>
            <span class="contact-body">
              <span class="contact-label">LINE ID</span>
              <span class="contact-value">{{ profile.lineId }}</span>
            </span>
          </a>
        </li>
        <li>
          <a :href="profile.github" v-reveal class="card contact-card" target="_blank" rel="noopener">
            <span class="contact-icon" aria-hidden="true">🐙</span>
            <span class="contact-body">
              <span class="contact-label">GitHub</span>
              <span class="contact-value">github.com/{{ profile.name }}</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
  padding: 18px 22px;
  color: inherit;
  transition: transform 0.18s, border-color 0.18s;
}

.contact-card:hover {
  text-decoration: none;
  transform: translateY(-2px);
  border-color: var(--accent);
}

.contact-icon {
  display: inline-grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--accent-soft);
  font-size: 1.3rem;
  flex: none;
}

.contact-icon.line {
  background: #06c755;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.contact-body {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.contact-label {
  font-size: 0.8rem;
  color: var(--text-faint);
  letter-spacing: 0.06em;
}

.contact-value {
  font-weight: 600;
  color: var(--text);
  overflow-wrap: anywhere;
}
</style>

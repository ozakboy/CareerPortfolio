<script setup lang="ts">
import { profile } from '../data/resume'
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">聯繫方式</h2>
      <p class="section-intro">歡迎洽談專案合作、系統開發或技術顧問，我會盡快回覆。</p>
      <div class="layout">
        <div class="cards">
          <a :href="`mailto:${profile.email}`" class="card contact-card">
            <span class="contact-icon" aria-hidden="true">✉️</span>
            <span class="contact-body">
              <span class="contact-label">信箱</span>
              <span class="contact-value">{{ profile.email }}</span>
            </span>
          </a>
          <a :href="profile.github" class="card contact-card" target="_blank" rel="noopener">
            <span class="contact-icon" aria-hidden="true">🐙</span>
            <span class="contact-body">
              <span class="contact-label">GitHub</span>
              <span class="contact-value">github.com/{{ profile.name }}</span>
            </span>
          </a>
        </div>
        <figure class="card qr">
          <img :src="profile.telegramQr" width="300" height="300" alt="Telegram QR Code" loading="lazy" />
          <figcaption>
            <strong>Telegram</strong>
            <span>掃描 QR Code 加我好友</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 24px;
  align-items: start;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
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

.qr {
  margin: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.qr img {
  width: 240px;
  height: 240px;
  border-radius: 10px;
  background: #fff;
}

.qr figcaption {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  color: var(--text-muted);
}

@media (max-width: 720px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .qr {
    justify-self: center;
  }
}
</style>

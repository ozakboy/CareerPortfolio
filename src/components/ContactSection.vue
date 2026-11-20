<script setup lang="ts">
import { profile } from '../data/resume'
</script>

<template>
  <section id="contact" class="section">
    <div class="wide">
      <div class="section-head">
        <h2 class="section-title">聯繫方式</h2>
        <p class="section-intro">歡迎洽談專案合作、系統開發或技術顧問，我會盡快回覆。</p>
      </div>
      <div class="bento">
        <a :href="`mailto:${profile.email}`" v-reveal class="tile contact hoverable s4">
          <span class="tile-label">EMAIL</span>
          <span class="contact-value">{{ profile.email }}</span>
          <span class="muted contact-hint">合作、報價、技術顧問</span>
        </a>
        <a :href="profile.lineUrl" v-reveal class="tile contact hoverable s4" target="_blank" rel="noopener">
          <span class="tile-label">LINE</span>
          <span class="contact-value">{{ profile.lineId }}</span>
          <span class="muted contact-hint">即時討論、加好友</span>
        </a>
        <a :href="profile.github" v-reveal class="tile contact hoverable s4" target="_blank" rel="noopener">
          <span class="tile-label">GITHUB</span>
          <span class="contact-value">github.com/{{ profile.name }}</span>
          <span class="muted contact-hint">開源套件與原始碼</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  color: var(--text);
  text-decoration: none;
}

.contact:hover {
  text-decoration: none;
  color: var(--text);
}

.contact-value {
  font-size: 1.1rem;
  font-weight: 600;
  overflow-wrap: anywhere;
}

a.contact:hover .contact-value {
  color: var(--accent);
}

.contact-hint {
  font-size: 0.85rem;
}
</style>

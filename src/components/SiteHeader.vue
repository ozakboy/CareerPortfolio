<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { navItems, profile } from '../data/resume'
import { useTheme } from '../composables/useTheme'
import { useScrollSpy } from '../composables/useScrollSpy'

const { theme, cycle } = useTheme()
const { activeId } = useScrollSpy(navItems.map((item) => item.id))
const menuOpen = ref(false)
const scrolled = ref(false)

const themeLabel: Record<string, string> = {
  system: '跟隨系統',
  light: '淺色',
  dark: '深色',
}

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ scrolled }">
    <div class="wide header-inner">
      <a href="#top" class="brand" @click="menuOpen = false">
        <span class="brand-name">{{ profile.fullName }}</span>
        <span class="brand-alias">{{ profile.name }}</span>
      </a>

      <nav class="nav" :class="{ open: menuOpen }" aria-label="主要導覽">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-link"
          :class="{ active: activeId === item.id }"
          :aria-current="activeId === item.id ? 'true' : undefined"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="actions">
        <button
          type="button"
          class="text-btn"
          :title="`主題：${themeLabel[theme]}（點擊切換）`"
          :aria-label="`切換主題，目前為${themeLabel[theme]}`"
          @click="cycle"
        >
          <svg v-if="theme === 'dark'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
          <svg v-else-if="theme === 'light'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>
          <span class="theme-text">{{ themeLabel[theme] }}</span>
        </button>
        <button
          type="button"
          class="text-btn menu-btn"
          :aria-expanded="menuOpen"
          aria-label="開啟選單"
          @click="menuOpen = !menuOpen"
        >
          <span v-if="menuOpen">關閉</span>
          <span v-else>選單</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--header-height);
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--duration-base) ease;
}

.header.scrolled {
  border-bottom-color: var(--border);
}

.header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand {
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
  color: var(--text);
  text-decoration: none;
}

.brand-name {
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.04em;
}

.brand-alias {
  font-size: 0.8rem;
  color: var(--text-faint);
  font-family: var(--font-mono);
}

.nav {
  display: flex;
  gap: 2px;
}

.nav-link {
  padding: 6px 12px;
  border-radius: 999px;
  color: var(--text-muted);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color var(--duration-fast) ease, background var(--duration-fast) ease;
}

.nav-link.active {
  color: var(--accent-strong);
  background: var(--accent-soft);
}

@media (hover: hover) and (pointer: fine) {
  .nav-link:hover {
    color: var(--text);
    text-decoration: none;
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.text-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 36px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--text-muted);
  font-size: 0.85rem;
  cursor: pointer;
  transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
}

@media (hover: hover) and (pointer: fine) {
  .text-btn:hover {
    color: var(--text);
    border-color: var(--border);
  }
}

.menu-btn {
  display: none;
}

@media (max-width: 860px) {
  .theme-text {
    display: none;
  }

  .menu-btn {
    display: inline-flex;
  }

  .nav {
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 8px var(--page-padding) 14px;
    background: var(--tile);
    border-bottom: 1px solid var(--border);
    display: none;
  }

  .nav.open {
    display: flex;
  }

  .nav-link {
    padding: 12px 10px;
    font-size: 1rem;
  }
}
</style>

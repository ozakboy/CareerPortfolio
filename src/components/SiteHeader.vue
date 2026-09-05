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
  light: '淺色模式',
  dark: '深色模式',
}
const themeIcon: Record<string, string> = {
  system: '🖥️',
  light: '☀️',
  dark: '🌙',
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
    <div class="container header-inner">
      <a href="#top" class="brand" @click="menuOpen = false">
        <span class="brand-mark">&lt;/&gt;</span>
        <span class="brand-name">{{ profile.name }}</span>
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
          class="icon-btn"
          :title="`主題：${themeLabel[theme]}（點擊切換）`"
          :aria-label="`切換主題，目前為${themeLabel[theme]}`"
          @click="cycle"
        >
          {{ themeIcon[theme] }}
        </button>
        <button
          type="button"
          class="icon-btn menu-btn"
          :aria-expanded="menuOpen"
          aria-label="開啟選單"
          @click="menuOpen = !menuOpen"
        >
          <span v-if="menuOpen">✕</span>
          <span v-else>☰</span>
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
  background: color-mix(in srgb, var(--bg-elevated) 82%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.header.scrolled {
  border-bottom-color: var(--border);
  box-shadow: 0 4px 20px -12px rgb(15 23 42 / 0.25);
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
  align-items: center;
  gap: 10px;
  color: var(--text);
  font-weight: 700;
  font-size: 1.05rem;
}

.brand:hover {
  text-decoration: none;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 9px;
  background: var(--hero-bg);
  color: var(--hero-accent);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.8rem;
  font-weight: 700;
}

.nav {
  display: flex;
  gap: 4px;
}

.nav-link {
  padding: 6px 12px;
  border-radius: 8px;
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 500;
  transition: background 0.15s, color 0.15s;
}

.nav-link:hover {
  background: var(--bg-muted);
  color: var(--text);
  text-decoration: none;
}

.nav-link.active {
  color: var(--accent-strong);
  background: var(--accent-soft);
}

.actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.icon-btn {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  color: var(--text);
  font-size: 1.05rem;
  cursor: pointer;
  display: inline-grid;
  place-items: center;
  transition: background 0.15s;
}

.icon-btn:hover {
  background: var(--bg-muted);
}

.menu-btn {
  display: none;
}

@media (max-width: 860px) {
  .menu-btn {
    display: inline-grid;
  }

  .nav {
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 12px 18px 18px;
    background: var(--bg-elevated);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow);
    display: none;
  }

  .nav.open {
    display: flex;
  }

  .nav-link {
    padding: 12px 14px;
    font-size: 1rem;
  }
}
</style>

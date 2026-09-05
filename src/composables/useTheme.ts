import { ref, watchEffect } from 'vue'

export type Theme = 'system' | 'light' | 'dark'

const STORAGE_KEY = 'career-portfolio-theme'
const order: Theme[] = ['system', 'light', 'dark']

function readStored(): Theme {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === 'light' || value === 'dark' || value === 'system') return value
  } catch {
    /* localStorage 不可用時忽略 */
  }
  return 'system'
}

const theme = ref<Theme>(readStored())

watchEffect(() => {
  const root = document.documentElement
  if (theme.value === 'system') {
    root.removeAttribute('data-theme')
  } else {
    root.setAttribute('data-theme', theme.value)
  }
  try {
    localStorage.setItem(STORAGE_KEY, theme.value)
  } catch {
    /* ignore */
  }
})

export function useTheme() {
  function cycle() {
    const next = order[(order.indexOf(theme.value) + 1) % order.length]
    theme.value = next
  }
  return { theme, cycle }
}

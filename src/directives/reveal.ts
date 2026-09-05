import type { Directive } from 'vue'

/**
 * v-reveal：元素進入視窗時加上 .is-visible，搭配 CSS 做淡入。
 * 使用者若偏好減少動態效果，直接顯示、不做動畫。
 */
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer: IntersectionObserver | null = null

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  )
  return observer
}

export const reveal: Directive<HTMLElement> = {
  mounted(el) {
    if (reduceMotion() || !('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    el.classList.add('reveal')
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}

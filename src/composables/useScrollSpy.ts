import { onMounted, onUnmounted, ref } from 'vue'

/** 追蹤目前捲動到哪個區塊（依 id），供導覽列高亮使用。 */
export function useScrollSpy(ids: string[]) {
  const activeId = ref<string>('')
  let observer: IntersectionObserver | null = null
  const visible = new Map<string, number>()

  onMounted(() => {
    if (!('IntersectionObserver' in window)) return
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }
        // 依畫面順序取第一個可見的區塊；若都不可見（例如在 Hero），清空
        const first = ids.find((id) => (visible.get(id) ?? 0) > 0)
        activeId.value = first ?? ''
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.01] },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onUnmounted(() => observer?.disconnect())

  return { activeId }
}

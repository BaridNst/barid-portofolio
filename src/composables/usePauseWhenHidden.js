import { onMounted, onUnmounted } from 'vue'

export function usePauseWhenHidden(rootMargin = '100px 0px') {
  let observer = null
  const animated = []

  function collect(el) {
    if (!el) return
    const all = el.querySelectorAll('*')
    ;[el, ...all].forEach(child => {
      try {
        const cs = getComputedStyle(child)
        if (cs.animationName && cs.animationName !== 'none') {
          animated.push(child)
        }
      } catch {}
    })
  }

  function setup(el) {
    if (!el) return
    collect(el)
    if (animated.length === 0) return

    observer = new IntersectionObserver(
      ([entry]) => {
        const state = entry.isIntersecting ? 'running' : 'paused'
        animated.forEach(c => (c.style.animationPlayState = state))
      },
      { rootMargin, threshold: 0 }
    )
    observer.observe(el)
  }

  onUnmounted(() => observer?.disconnect())

  return { setup }
}

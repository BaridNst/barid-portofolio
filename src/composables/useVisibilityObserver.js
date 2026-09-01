import { ref, onMounted, onUnmounted } from 'vue'

export function useVisibilityObserver(options = {}) {
  const isVisible = ref(false)
  const hasBeenVisible = ref(false)
  let observer = null

  const { rootMargin = '200px 0px', threshold = 0 } = options

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.value = entry.isIntersecting
        if (entry.isIntersecting) hasBeenVisible.value = true
      },
      { rootMargin, threshold }
    )
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  function observe(el) {
    if (el && observer) observer.observe(el)
  }

  function unobserve(el) {
    if (el && observer) observer.unobserve(el)
  }

  return { isVisible, hasBeenVisible, observe, unobserve }
}

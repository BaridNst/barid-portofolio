<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Star, GitFork, ExternalLink, Loader2, AlertCircle } from '@lucide/vue'

// Drag-to-scroll state
const scrollContainer = ref(null)
const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)
const hasDragged = ref(false)

function onMouseDown(e) {
  isDragging.value = true
  hasDragged.value = false
  startX.value = e.pageX - scrollContainer.value.offsetLeft
  scrollLeft.value = scrollContainer.value.scrollLeft
  scrollContainer.value.style.cursor = 'grabbing'
  scrollContainer.value.style.userSelect = 'none'
}

function onMouseMove(e) {
  if (!isDragging.value) return
  e.preventDefault()
  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = (x - startX.value) * 1.5
  if (Math.abs(walk) > 5) hasDragged.value = true
  scrollContainer.value.scrollLeft = scrollLeft.value - walk
}

function onMouseUp() {
  isDragging.value = false
  if (scrollContainer.value) {
    scrollContainer.value.style.cursor = 'grab'
    scrollContainer.value.style.removeProperty('user-select')
  }
}

function onClickCapture(e) {
  if (hasDragged.value) {
    e.preventDefault()
    e.stopPropagation()
  }
}

onMounted(() => {
  document.addEventListener('mouseup', onMouseUp)
  document.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  document.removeEventListener('mouseup', onMouseUp)
  document.removeEventListener('mousemove', onMouseMove)
})

const repos = ref([])
const loading = ref(true)
const error = ref(null)

const GITHUB_USERNAME = 'BaridNst'

// Language color mapping for badges
const langColors = {
  JavaScript: 'bg-yellow-400/20 text-yellow-300 border-yellow-400/30',
  TypeScript: 'bg-blue-400/20 text-blue-300 border-blue-400/30',
  PHP: 'bg-indigo-400/20 text-indigo-300 border-indigo-400/30',
  Blade: 'bg-orange-400/20 text-orange-300 border-orange-400/30',
  Python: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30',
  HTML: 'bg-red-400/20 text-red-300 border-red-400/30',
  CSS: 'bg-purple-400/20 text-purple-300 border-purple-400/30',
  Vue: 'bg-green-400/20 text-green-300 border-green-400/30',
  Go: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30',
  Java: 'bg-amber-400/20 text-amber-300 border-amber-400/30',
  Kotlin: 'bg-violet-400/20 text-violet-300 border-violet-400/30',
  null: 'bg-slate-400/20 text-slate-300 border-slate-400/30',
}

// Generate OpenGraph image URL for a repo
function getRepoOgImage(repo) {
  return `https://opengraph.githubassets.com/1/${repo.full_name}`
}

// Determine if repo is recently updated (within 30 days)
function isRecent(dateStr) {
  const updated = new Date(dateStr)
  const now = new Date()
  const diffDays = (now - updated) / (1000 * 60 * 60 * 24)
  return diffDays <= 30
}

// Format date to relative time
function timeAgo(dateStr) {
  const date = new Date(dateStr)
  const now = new Date()
  const diffMs = now - date
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 30) return `${days} days ago`
  const months = Math.floor(days / 30)
  if (months === 1) return '1 month ago'
  if (months < 12) return `${months} months ago`
  const years = Math.floor(months / 12)
  return years === 1 ? '1 year ago' : `${years} years ago`
}

// Show all repos (exclude profile README and forks)
const filteredRepos = computed(() => {
  return repos.value
    .filter((repo) => repo.name !== GITHUB_USERNAME && !repo.fork)
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
})

async function fetchRepos() {
  loading.value = true
  error.value = null
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=30`
    )
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
    repos.value = await res.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchRepos)
</script>

<template>
  <div class="w-full">
    <!-- Loading State -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-20 gap-4">
      <Loader2 class="size-10 text-violet-400 animate-spin" />
      <p class="font-jakarta text-sm text-slate-400">Memuat repositori dari GitHub...</p>
    </div>

    <!-- Error State -->
    <div
      v-else-if="error"
      class="flex flex-col items-center justify-center py-20 gap-4 text-center"
    >
      <AlertCircle class="size-10 text-red-400" />
      <p class="font-jakarta text-sm text-red-300">{{ error }}</p>
      <button
        @click="fetchRepos"
        class="px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-semibold font-jakarta hover:bg-violet-500 transition-colors"
      >
        Coba Lagi
      </button>
    </div>

    <!-- Repos Horizontal Scroll (drag to scroll) -->
    <div
      v-else
      ref="scrollContainer"
      class="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 cursor-grab"
      @mousedown="onMouseDown"
    >
      <a
        v-for="repo in filteredRepos"
        :key="repo.id"
        :href="repo.html_url"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg cv-card transition-[transform,box-shadow,border-color] duration-300 hover:border-violet-500/50 hover:shadow-[0_12px_40px_-10px_rgba(139,92,246,0.35)] hover:-translate-y-1.5 snap-start shrink-0 w-[85vw] sm:w-[380px]"
        @click.capture="onClickCapture"
      >
        <!-- Project Image -->
        <figure class="relative w-full aspect-[16/9] overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
            src="/images/baridlogo.png"
            :alt="repo.name"
            class="w-24 h-24 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            loading="lazy"
            decoding="async"
          />
          <!-- Gradient Overlay on Image -->
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"
          ></div>
        </figure>

        <!-- Card Body -->
        <div class="flex flex-1 flex-col gap-3 p-4 sm:p-5">
          <!-- Title + Badge -->
          <div class="flex items-start gap-2">
            <h3
              class="font-jakarta text-base sm:text-lg font-bold text-white leading-snug group-hover:text-violet-300 transition-colors line-clamp-1 flex-1"
            >
              {{ repo.name.replace(/-/g, ' ').replace(/_/g, ' ') }}
            </h3>
            <div
              v-if="isRecent(repo.pushed_at)"
              class="shrink-0 rounded-md bg-violet-600/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md"
            >
              NEW
            </div>
          </div>

          <!-- Description -->
          <p
            class="font-jakarta text-xs sm:text-sm leading-relaxed text-slate-400 line-clamp-2 flex-1"
          >
            {{
              repo.description ||
              `Repository ${repo.name} — proyek oleh ${GITHUB_USERNAME}`
            }}
          </p>

          <!-- Footer: Language + Stars + Fork + Updated -->
          <div class="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-800/60">
            <!-- Language Badge -->
            <span
              v-if="repo.language"
              class="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-semibold font-jakarta"
              :class="langColors[repo.language] || langColors[null]"
            >
              <span
                class="inline-block size-2 rounded-full"
                :class="
                  repo.language === 'JavaScript'
                    ? 'bg-yellow-400'
                    : repo.language === 'TypeScript'
                      ? 'bg-blue-400'
                      : repo.language === 'PHP'
                        ? 'bg-indigo-400'
                        : repo.language === 'Blade'
                          ? 'bg-orange-400'
                          : repo.language === 'Python'
                            ? 'bg-emerald-400'
                            : repo.language === 'HTML'
                              ? 'bg-red-400'
                              : 'bg-slate-400'
                "
              ></span>
              {{ repo.language }}
            </span>

            <!-- Stars -->
            <span
              v-if="repo.stargazers_count > 0"
              class="inline-flex items-center gap-1 text-[11px] font-semibold font-jakarta text-amber-300/80"
            >
              <Star class="size-3.5" />
              {{ repo.stargazers_count }}
            </span>

            <!-- Forks -->
            <span
              v-if="repo.forks_count > 0"
              class="inline-flex items-center gap-1 text-[11px] font-semibold font-jakarta text-slate-400"
            >
              <GitFork class="size-3.5" />
              {{ repo.forks_count }}
            </span>

            <!-- Spacer -->
            <span class="flex-1"></span>

            <!-- Updated date -->
            <span class="text-[10px] text-slate-500 font-jakarta whitespace-nowrap">
              {{ timeAgo(repo.pushed_at) }}
            </span>

            <!-- External Link Icon -->
            <ExternalLink
              class="size-3.5 text-slate-500 group-hover:text-violet-400 transition-colors shrink-0"
            />
          </div>
        </div>
      </a>
    </div>

    <!-- GitHub Profile Link -->
    <div class="flex justify-center mt-10">
      <a
        :href="`https://github.com/${GITHUB_USERNAME}`"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-3 rounded-full border border-violet-500/30 bg-slate-900/80 px-6 py-3 font-jakarta text-sm font-semibold text-violet-300 shadow-lg transition-[transform,background-color,border-color,box-shadow,color] duration-300 hover:bg-violet-600 hover:text-white hover:border-violet-400 hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95"
      >
        <svg class="size-5 transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        Lihat Semua di GitHub
        <ExternalLink class="size-4 opacity-60 group-hover:opacity-100 transition-opacity" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.cv-card {
  content-visibility: auto;
  contain-intrinsic-size: auto 280px;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>

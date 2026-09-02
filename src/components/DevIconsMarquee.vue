<script setup>
import { ref } from 'vue'
import { usePauseWhenHidden } from '../composables/usePauseWhenHidden'

const sectionRef = ref(null)
const { setup } = usePauseWhenHidden()

// Reduced to 8 icons each row — cuts HTTP requests from 50+ down to 16
const iconsTop = [
  { name: 'vuejs', label: 'Vue.js' },
  { name: 'javascript', label: 'JavaScript' },
  { name: 'typescript', label: 'TypeScript' },
  { name: 'react', label: 'React' },
  { name: 'tailwindcss', label: 'Tailwind CSS' },
  { name: 'nodejs', label: 'Node.js' },
  { name: 'laravel', label: 'Laravel' },
  { name: 'python', label: 'Python' },
]

const iconsBottom = [
  { name: 'git', label: 'Git' },
  { name: 'docker', label: 'Docker' },
  { name: 'mysql', label: 'MySQL' },
  { name: 'mongodb', label: 'MongoDB' },
  { name: 'figma', label: 'Figma' },
  { name: 'php', label: 'PHP' },
  { name: 'nuxtjs', label: 'Nuxt.js' },
  { name: 'java', label: 'Java' },
]

import { onMounted } from 'vue'
onMounted(() => setup(sectionRef.value))
</script>

<template>
  <section ref="sectionRef" class="relative w-full overflow-hidden py-6 sm:py-10 bg-slate-950 select-none z-20">
    <!-- Black Ribbon (Back / Top Layer) -->
    <div class="relative z-10 w-[112%] -left-[6%] transform -rotate-2 bg-[#09090b] py-3.5 sm:py-4.5 border-y border-neutral-800">
      <div class="marquee-container overflow-hidden w-full">
        <div class="marquee-track-left flex w-max items-center">
        <div
            v-for="(icon, i) in [...iconsTop, ...iconsTop]"
            :key="'top-' + i"
            class="flex items-center gap-3 shrink-0 px-4 sm:px-6"
          >
            <img
              :src="`/images/icons/${icon.name}.svg`"
              :alt="icon.label"
              width="28"
              height="28"
              class="size-6 sm:size-7 md:size-8 object-contain"
              loading="lazy"
              decoding="async"
            />
            <span class="font-extrabold tracking-wider text-xs sm:text-sm md:text-base uppercase text-white whitespace-nowrap font-jakarta">
              {{ icon.label }}
            </span>
            <span class="inline-block size-1.5 sm:size-2 rounded-full bg-violet-400/80 ml-4 sm:ml-6 shrink-0"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Purple Ribbon (Front / Bottom Layer) -->
    <div class="relative z-20 w-[112%] -left-[6%] transform rotate-2 -mt-6 sm:-mt-8 bg-gradient-to-r from-violet-700 via-purple-600 to-violet-700 py-3.5 sm:py-4.5 border-y border-purple-400/40">
      <div class="marquee-container overflow-hidden w-full">
        <div class="marquee-track-right flex w-max items-center">
          <div
            v-for="(icon, i) in [...iconsBottom, ...iconsBottom]"
            :key="'bottom-' + i"
            class="flex items-center gap-3 shrink-0 px-4 sm:px-6"
          >
            <img
              :src="`/images/icons/${icon.name}.svg`"
              :alt="icon.label"
              width="28"
              height="28"
              class="size-6 sm:size-7 md:size-8 object-contain"
              loading="lazy"
              decoding="async"
            />
            <span class="font-extrabold tracking-wider text-xs sm:text-sm md:text-base uppercase text-white whitespace-nowrap font-jakarta">
              {{ icon.label }}
            </span>
            <span class="inline-block size-1.5 sm:size-2 rounded-full bg-white/70 ml-4 sm:ml-6 shrink-0"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-container:hover .marquee-track-left,
.marquee-container:hover .marquee-track-right {
  animation-play-state: paused;
}

.marquee-track-left {
  animation: marquee-left 35s linear infinite;
  will-change: transform;
}

.marquee-track-right {
  animation: marquee-right 35s linear infinite;
  will-change: transform;
}

@keyframes marquee-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track-left,
  .marquee-track-right {
    animation: none;
  }
}

/* ═══════ Mobile perf: drop expensive GPU filters ═══════ */
@media (hover: none), (max-width: 640px) {
  .marquee-container img {
    filter: none;
  }
}
</style>

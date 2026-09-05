<script setup>
import { onMounted, onUnmounted, defineAsyncComponent } from 'vue'
import { ArrowRight } from '@lucide/vue'
import { motion } from 'motion-v'

// Lazy load all below-fold components — reduces initial JS bundle & TBT dramatically
const DevIconsMarquee = defineAsyncComponent(() =>
  import('../components/DevIconsMarquee.vue')
)
const ProfileCard = defineAsyncComponent(() =>
  import('../components/ui/ProfileCard.vue')
)
const GitHubProjects = defineAsyncComponent(() =>
  import('../components/GitHubProjects.vue')
)
const ContactSection = defineAsyncComponent(() =>
  import('../components/ContactSection.vue')
)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        } else {
          entry.target.classList.remove('is-visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  const elements = document.querySelectorAll('.scroll-reveal')
  elements.forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div class="w-full overflow-hidden">
    <section
      id="top"
      class="cv-auto relative flex items-center bg-gradient-to-b from-[#fafafa] via-[#fafafa] via-75% to-slate-950 px-6 pt-6 pb-8 sm:px-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-16"
    >
      <div class="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          class="flex flex-col items-start gap-6"
          :initial="{ opacity: 0, x: -30 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }"
        >
          <motion.h1
            class="font-danger text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.1 }"
          >
            <span class="text-violet-600">A </span><span class="text-gray-900">Barid </span><span class="text-violet-600">Dinda </span><span class="text-gray-900">Khair </span><span class="text-violet-600">Nasution</span>
          </motion.h1>

          <motion.p
            class="font-jakarta text-lg font-semibold text-violet-700 sm:text-xl"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.2 }"
          >
            Web Developer
            <span class="mx-2 font-normal text-gray-400">|</span>
            Mahasiswa Teknologi Informasi
          </motion.p>

          <motion.p
            class="font-jakarta max-w-xl text-justify text-base leading-relaxed text-gray-600 sm:text-lg"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.3 }"
          >
            "Saya merancang dan membangun aplikasi web yang modern, interaktif, dan responsif.
            Mengembangkan solusi digital yang efisien dari tampilan antarmuka hingga integrasi sistem
            menggunakan teknologi web terkini."
          </motion.p>

          <motion.div
            class="flex flex-wrap items-center gap-4"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.4 }"
          >
            <motion.a
              href="#project"
              aria-label="Lihat Proyek Portofolio"
              class="group font-jakarta inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(124,58,237,0.6)] transition-colors duration-300 hover:bg-violet-500 hover:shadow-[0_14px_35px_-10px_rgba(124,58,237,0.7)]"
              :whileHover="{ scale: 1.05 }"
              :whileTap="{ scale: 0.95 }"
            >
              Lihat Proyek
              <ArrowRight class="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#contact"
              aria-label="Hubungi Saya"
              class="font-jakarta inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/60 px-6 py-3 text-sm font-bold text-violet-700 shadow-[0_8px_24px_-12px_rgba(124,58,237,0.35)] transition-colors duration-300 hover:bg-violet-50 hover:shadow-[0_12px_28px_-12px_rgba(124,58,237,0.45)] backdrop-blur"
              :whileHover="{ scale: 1.05 }"
              :whileTap="{ scale: 0.95 }"
            >
              Hubungi Saya
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          class="relative mx-auto flex w-full items-center justify-center"
          :initial="{ opacity: 0, scale: 0.9, y: 30 }"
          :animate="{ opacity: 1, scale: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 0.25, ease: [0.25, 1, 0.5, 1] }"
        >
          <!-- Ambient Card Backglow -->
          <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 opacity-25 blur-xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-2xl"></div>

          <!-- Ultra-Cool Tech Glass Card -->
          <motion.div
            class="group relative w-full max-w-[320px] sm:max-w-[350px] overflow-hidden rounded-2xl border border-violet-500/30 bg-slate-950/90 p-3 sm:p-4 shadow-[0_20px_50px_-15px_rgba(124,58,237,0.35)] backdrop-blur-xl transition-colors duration-500 hover:border-violet-400/70 hover:shadow-[0_25px_60px_-10px_rgba(124,58,237,0.5)]"
            :whileHover="{ y: -6 }"
          >
            
            <!-- Card Header: Window Controls + Label -->
            <div class="flex items-center justify-between pb-2.5 px-1 border-b border-white/10">
              <div class="flex items-center gap-1.5">
                <span class="size-2.5 rounded-full bg-rose-500/80"></span>
                <span class="size-2.5 rounded-full bg-amber-500/80"></span>
                <span class="size-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <span class="font-jakarta text-xs font-bold text-violet-300/90 tracking-wide">
                Pace Kamba
              </span>
            </div>

            <!-- Image Frame -->
            <div class="relative mt-3 overflow-hidden rounded-xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-1 border border-white/5">
              <img
                src="/images/baridnobackround.webp"
                alt="A Barid Dinda Khair Nasution"
                width="320"
                height="460"
                class="block w-full max-h-[280px] sm:max-h-[330px] object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />

              <!-- Subtle Bottom Gradient Blend -->
              <div class="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none"></div>
            </div>

            <!-- Card Footer: Motto -->
            <div class="pt-3 pb-0.5 text-center">
              <p class="font-jakarta text-xs font-semibold italic text-violet-200/90 tracking-wide">
                "Rakus Akan Ilmu Menjadi Pilihanku"
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    <!-- Dev Icons Dual Slanted Ribbon Marquee -->
    <div class="scroll-reveal">
      <DevIconsMarquee />
    </div>

    <section
      id="about"
      class="cv-auto flex min-h-svh scroll-mt-24 items-center bg-[#fafafa] px-4 py-16 sm:px-8 relative overflow-hidden"
    >
      <div class="mx-auto w-full max-w-6xl relative z-10">
        <div class="text-center mb-6 scroll-reveal">
          <h2 class="font-jakarta text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Tentang Saya
          </h2>
          <p class="font-jakarta text-sm text-gray-500 mt-1">
            Profil & Solusi Teknologi End-to-End
          </p>
        </div>

        <div class="scroll-reveal scroll-reveal-delay-1">
          <ProfileCard />
        </div>
      </div>
    </section>

    <section
      id="project"
      class="cv-auto min-h-svh scroll-mt-24 bg-[#fafafa] px-4 pt-16 pb-8 sm:px-8 relative overflow-hidden"
    >
      <div class="mx-auto w-full max-w-6xl relative z-10">
        <div class="text-center mb-10 scroll-reveal">
          <h2 class="font-jakarta text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Proyek Saya
          </h2>
          <p class="font-jakarta text-sm text-gray-500 mt-2 max-w-lg mx-auto">
            Repositori dari GitHub — proyek yang saya bangun dengan berbagai teknologi.
          </p>
        </div>

        <div class="scroll-reveal scroll-reveal-delay-1">
          <GitHubProjects />
        </div>
      </div>
    </section>

    <section
      id="contact"
      class="cv-auto min-h-svh scroll-mt-24 bg-gradient-to-b from-[#fafafa] via-violet-50/40 to-violet-100/60 px-4 pt-8 pb-16 sm:px-8 relative overflow-hidden"
    >
      <div class="mx-auto w-full max-w-6xl relative z-10 scroll-reveal">
        <ContactSection />
      </div>
    </section>
  </div>
</template>

<style scoped>
.cv-auto {
  content-visibility: auto;
  contain-intrinsic-size: auto 1000px;
}

.cv-auto:global(.hidden),
.cv-auto[hidden] {
  display: none;
}

.fade-up {
  animation: fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.marquee-track {
  animation: marquee 40s linear infinite;
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}


</style>
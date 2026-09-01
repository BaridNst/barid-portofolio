<script setup>
import { ArrowRight } from '@lucide/vue'
import DevIconsMarquee from '../components/DevIconsMarquee.vue'
import ProfileCard from '../components/ui/ProfileCard.vue'
import GitHubProjects from '../components/GitHubProjects.vue'
import ContactSection from '../components/ContactSection.vue'

const aboutPoints = [
  'Membangun antarmuka yang responsif & interaktif dengan Vue & Tailwind',
  'Integrasi frontend–backend lewat REST API (Node.js / Express / Laravel)',
  'Gemar eksplorasi desain UI, tool baru, & selalu belajar hal baru',
]
</script>

<template>
  <div class="w-full overflow-hidden">
    <section
      id="top"
      class="cv-auto relative flex items-center bg-gradient-to-b from-[#fafafa] via-[#fafafa] via-75% to-slate-950 px-6 pt-6 pb-16 sm:px-10 sm:pt-8 sm:pb-24 lg:pt-10 lg:pb-28"
    >
      <div class="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div class="flex flex-col items-start gap-6">
          <h1
            class="fade-up font-danger text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            style="animation-delay: 0.1s"
          >
            <span class="text-violet-600">A </span><span class="text-gray-900">Barid </span><span class="text-violet-600">Dinda </span><span class="text-gray-900">Khair </span><span class="text-violet-600">Nasution</span>
          </h1>

          <p
            class="fade-up font-jakarta text-lg font-semibold text-violet-700 sm:text-xl"
            style="animation-delay: 0.2s"
          >
            Web Developer
            <span class="mx-2 font-normal text-gray-400">|</span>
            Mahasiswa Teknologi Informasi
          </p>

          <p
            class="fade-up font-jakarta max-w-xl text-justify text-base leading-relaxed text-gray-600 sm:text-lg"
            style="animation-delay: 0.3s"
          >
            "Saya merancang dan membangun aplikasi web yang modern, interaktif, dan responsif.
            Mengembangkan solusi digital yang efisien dari tampilan antarmuka hingga integrasi sistem
            menggunakan teknologi web terkini."
          </p>

          <div
            class="fade-up flex flex-wrap items-center gap-4"
            style="animation-delay: 0.4s"
          >
            <a
              href="#project"
              class="group font-jakarta inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(124,58,237,0.6)] transition-all duration-300 hover:scale-105 hover:bg-violet-500 hover:shadow-[0_14px_35px_-10px_rgba(124,58,237,0.7)] active:scale-95"
            >
              Lihat Proyek
              <ArrowRight class="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              class="font-jakarta inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/60 px-6 py-3 text-sm font-semibold text-violet-700 shadow-[0_8px_24px_-12px_rgba(124,58,237,0.35)] transition-all duration-300 hover:scale-105 hover:bg-violet-50 hover:shadow-[0_12px_28px_-12px_rgba(124,58,237,0.45)] active:scale-95 backdrop-blur"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-md lg:max-w-none flex items-center justify-center">
          <!-- DaisyUI Aura Dual + Hover 3D -->
          <div class="aura aura-dual aura-lg text-violet-500">
            <div class="hover-3d">
              <!-- Card Content -->
              <div class="hero-3d-card">
                <!-- Inner card container -->
                <div class="hero-3d-inner">
                  <div class="w-full overflow-hidden rounded-xl shadow-inner">
                    <picture>
                      <source srcset="/images/haram-malas.webp" type="image/webp" />
                      <img
                        src="/images/haram-malas.jpg"
                        alt="Rakus Akan Ilmu Menjadi Pilihanku"
                        class="block w-full rounded-xl object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <p class="pt-3 text-center font-jakarta text-sm font-medium italic text-slate-300/90 tracking-wide">
                    "Rakus Akan Ilmu Menjadi Pilihanku"
                  </p>
                </div>
              </div>
              <!-- 8 empty divs needed for the 3D effect -->
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dev Icons Dual Slanted Ribbon Marquee -->
    <DevIconsMarquee />

    <section
      id="about"
      class="cv-auto flex min-h-svh scroll-mt-24 items-center bg-[#fafafa] px-4 py-16 sm:px-8 relative overflow-hidden"
    >
      <div class="mx-auto w-full max-w-6xl relative z-10">
        <div class="text-center mb-6">
          <h2 class="font-jakarta text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Tentang Saya
          </h2>
          <p class="font-jakarta text-sm text-gray-500 mt-1">
            Profil & Solusi Teknologi End-to-End
          </p>
        </div>

        <ProfileCard />
      </div>
    </section>

    <section
      id="project"
      class="cv-auto min-h-svh scroll-mt-24 bg-[#fafafa] px-4 pt-16 pb-8 sm:px-8 relative overflow-hidden"
    >
      <div class="mx-auto w-full max-w-6xl relative z-10">
        <div class="text-center mb-10">
          <h2 class="font-jakarta text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Proyek Saya
          </h2>
          <p class="font-jakarta text-sm text-gray-500 mt-2 max-w-lg mx-auto">
            Repositori dari GitHub — proyek yang saya bangun dengan berbagai teknologi.
          </p>
        </div>

        <GitHubProjects />
      </div>
    </section>

    <section
      id="contact"
      class="cv-auto min-h-svh scroll-mt-24 bg-gradient-to-b from-[#fafafa] via-violet-50/40 to-violet-100/60 px-4 pt-8 pb-16 sm:px-8 relative overflow-hidden"
    >
      <div class="mx-auto w-full max-w-6xl relative z-10">
        <ContactSection />
      </div>
    </section>
  </div>
</template>

<style scoped>
.cv-auto {
  content-visibility: auto;
  contain-intrinsic-size: 1px 1000px;
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

/* ═══════════ Hero 3D Card Styles ═══════════ */
.hero-3d-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-box, 1rem);
  background: linear-gradient(180deg, #18181b 0%, #09090b 50%, #0c0a15 100%);
  padding: 1.25rem;
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.5),
    0 10px 30px rgba(124, 58, 237, 0.2);
}

/* Subtle purple glow inside card */
.hero-3d-card::before {
  content: '';
  pointer-events: none;
  position: absolute;
  bottom: -2.5rem;
  right: -2.5rem;
  width: 12rem;
  height: 12rem;
  border-radius: 9999px;
  background: rgba(147, 51, 234, 0.2);
  filter: blur(40px);
}

.hero-3d-card::after {
  content: '';
  pointer-events: none;
  position: absolute;
  top: -2rem;
  left: -2rem;
  width: 10rem;
  height: 10rem;
  border-radius: 9999px;
  background: rgba(139, 92, 246, 0.12);
  filter: blur(40px);
}

.hero-3d-inner {
  position: relative;
  border-radius: 0.75rem;
  background: rgba(30, 35, 48, 0.9);
  padding: 1rem;
  border: 1px solid rgba(100, 116, 139, 0.25);
  backdrop-filter: blur(4px);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
</style>
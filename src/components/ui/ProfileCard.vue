<script setup>
import { ref, onMounted } from 'vue'
import { usePauseWhenHidden } from '../../composables/usePauseWhenHidden'
import { motion } from 'motion-v'
import {
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  Wrench,
  MapPin,
  Calendar,
} from '@lucide/vue'

const props = defineProps({
  name: {
    type: String,
    default: 'A Barid Dinda Khair Nasution',
  },
  role: {
    type: String,
    default: 'Mahasiswa Teknologi Informasi & Web Developer',
  },
  bio1: {
    type: String,
    default:
      'Saya A Barid Dinda Khair Nasution, mahasiswa Teknologi Informasi yang berfokus pada pengembangan web. Saya membangun aplikasi yang halus, responsif, dan fungsional — dari tampilan antarmuka hingga integrasi sistem.',
  },
  bio2: {
    type: String,
    default:
      'Berkarya dengan Vue.js, Tailwind CSS, dan JavaScript/TypeScript di sisi frontend, serta Node.js, Express, Laravel, dan MySQL di sisi backend untuk solusi end-to-end.',
  },
  points: {
    type: Array,
    default: () => [
      'Membangun antarmuka yang responsif & interaktif dengan Vue & Tailwind',
      'Integrasi frontend–backend lewat REST API (Node.js / Express / Laravel)',
      'Gemar eksplorasi desain UI, tool baru, & selalu belajar hal baru',
    ],
  },
  educationMajor: {
    type: String,
    default: 'Teknologi Informasi',
  },
  educationCampus: {
    type: String,
    default: 'Universitas Islam Negri Ar-Raniry - 2023',
  },
  educationLogo: {
    type: String,
    default: '/images/LOGOUIN.webp',
  },
  companyName: {
    type: String,
    default: 'Ideoolog Tech',
  },
  companyLocationYear: {
    type: String,
    default: 'Banda Aceh - 2026',
  },
  companyLogo: {
    type: String,
    default: '/images/LOGOIdeolog.Tech.webp',
  },
  imageSrc: {
    type: String,
    default: '/images/baridabout.webp',
  },
  imageAlt: {
    type: String,
    default: 'A Barid Dinda Khair Nasution Profile',
  },
  imageCaption: {
    type: String,
    default: 'Rakus Akan Ilmu Menjadi Pilihanku',
  },
  imagePosition: {
    type: String,
    default: 'right',
  },
})

const skillCategories = ref([
  {
    key: 'frontend',
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'Vue.js', icon: 'vuejs' },
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Nuxt.js', icon: 'nuxtjs' },
      { name: 'Figma', icon: 'figma' },
    ],
  },
  {
    key: 'backend',
    title: 'Backend',
    icon: Database,
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'PHP', icon: 'php' },
      { name: 'Python', icon: 'python' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
  },
  {
    key: 'tools',
    title: 'Tools & Lainnya',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Java', icon: 'java' },
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'C', icon: 'c' },
      { name: 'C++', icon: 'cplusplus' },
      { name: 'Go', icon: 'go' },
    ],
  },
])

const activeTab = ref('all')

const wrapperRef = ref(null)
const { setup } = usePauseWhenHidden()
onMounted(() => setup(wrapperRef.value))
</script>

<template>
  <div ref="wrapperRef" class="profile-card-wrapper">
    <!-- Ambient Background Orbs -->
    <div class="profile-orb profile-orb--tl"></div>
    <div class="profile-orb profile-orb--br"></div>

    <!-- DaisyUI Aura Dual Wrapper -->
    <div class="aura aura-dual text-violet-500">
    <!-- Main Card using DaisyUI card -->
    <div class="card profile-main-card">
      <div class="card-body p-0">
        <!-- Top Content Grid: Text + Image -->
        <div
          class="grid gap-8 lg:gap-10 items-stretch p-6 sm:p-8 lg:p-10"
          :class="
            imagePosition === 'left'
              ? 'lg:grid-cols-[1fr_1.2fr]'
              : 'lg:grid-cols-[1.2fr_1fr]'
          "
        >
          <!-- Text Content Side -->
          <motion.div
            class="flex flex-col gap-5"
            :class="imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'"
            :initial="{ opacity: 0, y: 30 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.6, ease: 'easeOut' }"
          >
            <!-- Name & Role -->
            <div>
              <h2 class="profile-name">{{ name }}</h2>
              <p class="profile-role">{{ role }}</p>
            </div>

            <!-- Bio Paragraphs -->
            <p class="profile-bio">{{ bio1 }}</p>
            <p class="profile-bio profile-bio--secondary">{{ bio2 }}</p>

            <!-- Checklist Points -->
            <ul class="flex flex-col gap-2.5">
              <li
                v-for="(point, idx) in points"
                :key="idx"
                class="profile-point"
              >
                <div class="profile-point-icon">
                  <CheckCircle2 class="size-4" />
                </div>
                <span class="font-jakarta text-sm sm:text-[0.94rem] leading-relaxed text-gray-700">
                  {{ point }}
                </span>
              </li>
            </ul>

            <!-- Education & Company Info Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              <!-- Education -->
              <div class="card profile-info-card">
                <div class="card-body p-4 flex-row items-center gap-3">
                  <div class="profile-info-logo">
                    <picture>
                      <source srcset="/images/LOGOUIN.webp" type="image/webp" />
                      <img
                        :src="educationLogo"
                        alt="UIN Ar-Raniry Logo"
                        width="44"
                        height="44"
                        class="size-full object-contain"
                        loading="eager"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-1.5">
                      <GraduationCap class="size-3.5 text-violet-500" />
                      <span class="profile-info-label">Pendidikan</span>
                    </div>
                    <h4 class="profile-info-title">{{ educationMajor }}</h4>
                    <p class="profile-info-subtitle">{{ educationCampus }}</p>
                  </div>
                </div>
              </div>

              <!-- Company -->
              <div class="card profile-info-card">
                <div class="card-body p-4 flex-row items-center gap-3">
                  <div class="profile-info-logo">
                    <img
                      :src="companyLogo"
                      alt="Ideolog Tech Logo"
                      width="44"
                      height="44"
                      class="size-full object-contain rounded-lg"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-1.5">
                      <Briefcase class="size-3.5 text-violet-500" />
                      <span class="profile-info-label">Company</span>
                    </div>
                    <h4 class="profile-info-title">{{ companyName }}</h4>
                    <p class="profile-info-subtitle">
                      {{ companyLocationYear }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <!-- Image Side -->
          <motion.div
            class="relative flex flex-col items-center justify-center"
            :class="imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'"
            :initial="{ opacity: 0, scale: 0.95, y: 30 }"
            :whileInView="{ opacity: 1, scale: 1, y: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] }"
          >
            <div class="profile-image-wrapper">
              <!-- Glow Ring behind image -->
              <div class="profile-image-glow"></div>

              <div class="card profile-image-card">
                <figure class="profile-image-figure">
                  <img
                    :src="imageSrc"
                    :alt="imageAlt"
                    width="400"
                    height="420"
                    class="profile-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <!-- Caption Overlay -->
                  <div class="profile-image-overlay">
                    <p class="profile-image-caption">
                      "{{ imageCaption }}"
                    </p>
                  </div>
                </figure>
              </div>
            </div>
          </motion.div>
        </div>

        <!-- Divider -->
        <div class="divider mx-6 sm:mx-8 lg:mx-10 my-0 before:bg-violet-200/60 after:bg-violet-200/60"></div>

        <!-- Tech Stack Section -->
        <motion.div
          class="p-6 sm:p-8 lg:p-10 pt-2 sm:pt-4"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.1, ease: 'easeOut' }"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 class="profile-stack-title">
              <span class="profile-stack-dot"></span>
              Keahlian & Technology Stack
            </h3>

            <!-- DaisyUI Tabs for filtering -->
            <div role="tablist" class="tabs tabs-box profile-tabs">
              <button
                role="tab"
                class="tab"
                :class="{ 'tab-active': activeTab === 'all' }"
                @click="activeTab = 'all'"
              >
                Semua
              </button>
              <button
                v-for="cat in skillCategories"
                :key="cat.key"
                role="tab"
                class="tab"
                :class="{ 'tab-active': activeTab === cat.key }"
                @click="activeTab = cat.key"
              >
                <component :is="cat.icon" class="size-3.5 mr-1" />
                {{ cat.title }}
              </button>
            </div>
          </div>

          <!-- Skill Cards Grid -->
          <div class="grid gap-4 sm:gap-5 md:grid-cols-3">
            <template v-for="cat in skillCategories" :key="cat.key">
              <div
                v-if="activeTab === 'all' || activeTab === cat.key"
                class="card profile-skill-card"
              >
                <div class="card-body p-4 sm:p-5 gap-4">
                  <div class="flex items-center gap-2.5">
                    <div class="profile-skill-icon-wrap">
                      <component :is="cat.icon" class="size-4 text-white" />
                    </div>
                    <h4 class="font-jakarta text-sm font-bold uppercase tracking-wider text-gray-700">
                      {{ cat.title }}
                    </h4>
                  </div>

                  <div class="flex flex-wrap gap-2">
                    <div
                      v-for="skill in cat.skills"
                      :key="skill.name"
                      class="tooltip tooltip-top"
                      :data-tip="skill.name"
                    >
                      <div class="profile-skill-chip">
                        <img
                          :src="`/images/icons/${skill.icon}.svg`"
                          :alt="skill.name"
                          width="20"
                          height="20"
                          class="size-5 shrink-0 object-contain transition-transform duration-300 group-hover/skill:rotate-12"
                          loading="lazy"
                          decoding="async"
                        />
                        <span class="font-jakarta text-xs font-medium text-gray-600 group-hover/skill:text-violet-600">
                          {{ skill.name }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </motion.div>
      </div>
    </div>
    </div><!-- /aura -->
  </div>
</template>

<style scoped>
/* ═══════════════════════════════════════════════════
   PROFILE CARD — Light Purple / Violet Theme
   Premium glassmorphism card with DaisyUI
   ═══════════════════════════════════════════════════ */

/* Wrapper */
.profile-card-wrapper {
  position: relative;
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  padding: 0.5rem;
}

/* Ambient Orbs */
.profile-orb {
  pointer-events: none;
  position: absolute;
  border-radius: 9999px;
  filter: blur(60px);
  opacity: 0.45;
  /* Removed continuous animation — uses less GPU on initial load */
}
.profile-orb--tl {
  top: -3rem;
  left: -2rem;
  width: 20rem;
  height: 20rem;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.45) 0%, rgba(196, 181, 253, 0.2) 60%, transparent 100%);
}
.profile-orb--br {
  bottom: -3rem;
  right: -2rem;
  width: 22rem;
  height: 22rem;
  background: radial-gradient(circle, rgba(192, 132, 252, 0.4) 0%, rgba(232, 121, 249, 0.15) 60%, transparent 100%);
}

@keyframes orbPulse {
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(1.15); opacity: 0.7; }
}

/* Main Card - works inside aura wrapper */
.profile-main-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-box, 1rem);
  border: none;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.97) 0%,
    rgba(245, 243, 255, 0.93) 30%,
    rgba(237, 233, 254, 0.88) 60%,
    rgba(245, 243, 255, 0.95) 100%
  );
  /* Removed backdrop-filter blur — huge GPU savings */
  box-shadow:
    0 4px 24px -4px rgba(139, 92, 246, 0.12),
    0 12px 48px -8px rgba(139, 92, 246, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition:
    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.profile-main-card:hover {
  box-shadow:
    0 8px 32px -4px rgba(139, 92, 246, 0.18),
    0 20px 60px -8px rgba(139, 92, 246, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

/* Background Grid Pattern */
.profile-main-card::before {
  content: '';
  pointer-events: none;
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(139, 92, 246, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(139, 92, 246, 0.04) 1px, transparent 1px);
  background-size: 2rem 2rem;
  z-index: 0;
}

/* Badge */
.profile-badge {
  border: 1px solid rgba(139, 92, 246, 0.3) !important;
  background: linear-gradient(135deg, rgba(237, 233, 254, 0.9), rgba(221, 214, 254, 0.8)) !important;
  color: #6d28d9 !important;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-weight: 700;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  backdrop-filter: blur(8px);
  padding: 0 0.875rem;
  height: 1.75rem;
}

.profile-sparkle {
  color: #8b5cf6;
  /* Removed continuous spin animation — saves CPU */
}

/* Name */
.profile-name {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.2;
  background: linear-gradient(135deg, #6d28d9 0%, #8b5cf6 40%, #a78bfa 70%, #7c3aed 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Role */
.profile-role {
  margin-top: 0.375rem;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #7c3aed;
  opacity: 0.85;
}

/* Bio */
.profile-bio {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.875rem;
  line-height: 1.7;
  color: #4b5563;
  text-align: justify;
}
.profile-bio--secondary {
  color: #6b7280;
}

/* Points */
.profile-point {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  transition: transform 0.3s;
}
.profile-point:hover {
  transform: translateX(4px);
}
.profile-point-icon {
  flex-shrink: 0;
  margin-top: 0.125rem;
  padding: 0.25rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(237, 233, 254, 0.9), rgba(221, 214, 254, 0.7));
  color: #7c3aed;
  transition: all 0.3s;
}
.profile-point:hover .profile-point-icon {
  background: linear-gradient(135deg, #c4b5fd, #a78bfa);
  color: white;
  transform: scale(1.1);
}

/* Info Cards (Education & Company) */
.profile-info-card {
  border-radius: 1rem !important;
  border: 1px solid rgba(167, 139, 250, 0.2) !important;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.85),
    rgba(245, 243, 255, 0.7)
  ) !important;
  /* Removed backdrop-filter — GPU savings */
  box-shadow: 0 2px 12px -2px rgba(139, 92, 246, 0.08);
  transition:
    transform 0.3s,
    box-shadow 0.3s,
    border-color 0.3s;
  overflow: hidden;
  position: relative;
}
.profile-info-card::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, #a78bfa, #c084fc, #e879f9);
  border-radius: 0 0.5rem 0.5rem 0;
}
.profile-info-card:hover {
  border-color: rgba(139, 92, 246, 0.35) !important;
  box-shadow: 0 4px 20px -4px rgba(139, 92, 246, 0.15);
  transform: translateY(-2px);
}
.profile-info-logo {
  flex-shrink: 0;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(167, 139, 250, 0.2);
  background: white;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px -2px rgba(139, 92, 246, 0.1);
}
.profile-info-label {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #8b5cf6;
}
.profile-info-title {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.3;
}
.profile-info-subtitle {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.7rem;
  color: #9ca3af;
  margin-top: 0.125rem;
}

/* ═══════════ IMAGE SECTION ═══════════ */
.profile-image-wrapper {
  position: relative;
  width: 100%;
}
.profile-image-glow {
  position: absolute;
  inset: -0.75rem;
  border-radius: 2rem;
  background: linear-gradient(135deg,
    rgba(167, 139, 250, 0.35),
    rgba(192, 132, 252, 0.25),
    rgba(232, 121, 249, 0.2)
  );
  filter: blur(20px);
  opacity: 0.7;
  transition: all 0.5s;
}
.profile-image-wrapper:hover .profile-image-glow {
  opacity: 1;
  filter: blur(28px);
  transform: scale(1.05);
}
.profile-image-card {
  position: relative;
  border-radius: 1.25rem !important;
  border: 1px solid rgba(167, 139, 250, 0.3) !important;
  background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(245, 243, 255, 0.85) 100%
  ) !important;
  padding: 0.75rem !important;
  box-shadow:
    0 8px 32px -4px rgba(139, 92, 246, 0.15),
    0 2px 8px -2px rgba(0, 0, 0, 0.06);
  transition: all 0.5s;
  overflow: hidden;
}
.profile-image-wrapper:hover .profile-image-card {
  border-color: rgba(139, 92, 246, 0.45) !important;
  box-shadow:
    0 16px 48px -8px rgba(139, 92, 246, 0.22),
    0 4px 12px -2px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}
.profile-image-figure {
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  margin: 0 !important;
  aspect-ratio: 3 / 4;
  background-color: rgba(139, 92, 246, 0.05);
}
.profile-image {
  width: 100%;
  height: auto;
  max-height: 420px;
  object-fit: cover;
  object-position: center;
  border-radius: 0.75rem;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.profile-image-wrapper:hover .profile-image {
  transform: scale(1.03);
}
.profile-image-overlay {
  position: absolute;
  inset: auto 0 0 0;
  background: linear-gradient(to top,
    rgba(109, 40, 217, 0.75) 0%,
    rgba(109, 40, 217, 0.4) 50%,
    transparent 100%
  );
  padding: 1.5rem 1rem 1rem;
  text-align: center;
}
.profile-image-caption {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: white;
  font-style: italic;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
}

/* ═══════════ TECH STACK SECTION ═══════════ */
.profile-stack-title {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 1.125rem;
  font-weight: 800;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.profile-stack-dot {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: #8b5cf6;
  /* Removed continuous pulse animation — saves CPU */
}

@keyframes dotPing {
  0% { transform: scale(1); opacity: 1; }
  75%, 100% { transform: scale(2); opacity: 0; }
}

/* Tabs */
.profile-tabs {
  background: rgba(237, 233, 254, 0.6) !important;
  border-radius: 0.75rem !important;
  padding: 0.25rem !important;
  border: 1px solid rgba(167, 139, 250, 0.15);
}
.profile-tabs .tab {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  border-radius: 0.5rem !important;
  transition: all 0.3s;
  min-height: 2rem;
  height: 2rem;
}
.profile-tabs .tab-active {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed) !important;
  color: white !important;
  box-shadow: 0 2px 12px -2px rgba(139, 92, 246, 0.4);
}
.profile-tabs .tab:not(.tab-active):hover {
  color: #7c3aed;
  background: rgba(237, 233, 254, 0.6);
}

/* Skill Cards */
.profile-skill-card {
  border-radius: 1rem !important;
  border: 1px solid rgba(167, 139, 250, 0.15) !important;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.8),
    rgba(245, 243, 255, 0.6)
  ) !important;
  /* Removed backdrop-filter blur — GPU savings */
  box-shadow: 0 2px 8px -2px rgba(139, 92, 246, 0.06);
  transition: all 0.3s;
}
.profile-skill-card:hover {
  border-color: rgba(139, 92, 246, 0.3) !important;
  box-shadow: 0 4px 20px -4px rgba(139, 92, 246, 0.12);
  transform: translateY(-2px);
}
.profile-skill-icon-wrap {
  padding: 0.5rem;
  border-radius: 0.625rem;
  background: linear-gradient(135deg, #8b5cf6, #a78bfa);
  box-shadow: 0 2px 8px -2px rgba(139, 92, 246, 0.3);
}

/* Skill Chip */
.profile-skill-chip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.625rem;
  border: 1px solid rgba(167, 139, 250, 0.15);
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 1px 4px -1px rgba(139, 92, 246, 0.06);
  transition: all 0.3s;
  cursor: default;
}
.profile-skill-chip:hover {
  border-color: rgba(139, 92, 246, 0.35);
  background: rgba(237, 233, 254, 0.6);
  transform: scale(1.05) translateY(-1px);
  box-shadow: 0 4px 12px -2px rgba(139, 92, 246, 0.12);
}
.profile-skill-chip:hover span {
  color: #7c3aed;
}
.profile-skill-chip:hover img {
  transform: rotate(12deg);
}

/* ═══════════ ANIMATIONS ═══════════ */
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 640px) {
  .profile-orb {
    width: 14rem;
    height: 14rem;
  }
  .profile-tabs {
    flex-wrap: wrap;
  }
}

/* ═══════ Mobile perf: drop expensive GPU filters ═══════ */
@media (hover: none), (max-width: 640px) {
  .profile-orb {
    animation: none;
    filter: blur(24px);
    opacity: 0.35;
  }
  .profile-sparkle,
  .profile-stack-dot {
    animation: none;
  }
  .profile-main-card,
  .profile-info-card,
  .profile-skill-card {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  .profile-skill-chip {
    transition:
      transform 0.3s,
      border-color 0.3s,
      background-color 0.3s,
      box-shadow 0.3s;
  }
}
</style>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { usePauseWhenHidden } from '../composables/usePauseWhenHidden'
import {
  Send,
  Sparkles,
  ExternalLink,
  User,
  AtSign,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
} from '@lucide/vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const wrapperRef = ref(null)
const { setup } = usePauseWhenHidden()
onMounted(() => setup(wrapperRef.value))

const canSubmit = computed(() => {
  return form.value.name && form.value.email && form.value.message
})

const handleSubmit = async () => {
  if (!canSubmit.value) return
  isSubmitting.value = true

  // Simulate submit delay
  await new Promise((r) => setTimeout(r, 1500))

  // Build mailto link and open
  const subject = encodeURIComponent(form.value.subject || 'Pesan dari Portfolio')
  const body = encodeURIComponent(
    `Nama: ${form.value.name}\nEmail: ${form.value.email}\n\n${form.value.message}`
  )
  window.open(`mailto:baridnst23@gmail.com?subject=${subject}&body=${body}`, '_blank')

  isSubmitting.value = false
  isSubmitted.value = true

  // Reset after 4s
  setTimeout(() => {
    isSubmitted.value = false
    form.value = { name: '', email: '', subject: '', message: '' }
  }, 4000)
}

const contactInfo = [
  {
    label: 'Email',
    value: 'baridnst23@gmail.com',
    href: 'mailto:baridnst23@gmail.com',
    color: 'bg-[#EA4335]',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  },
  {
    label: 'WhatsApp',
    value: '+62 852-1258-3609',
    href: 'https://wa.me/6285212583609',
    color: 'bg-[#25D366]',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  },
  {
    label: 'Lokasi',
    value: 'Banda Aceh, Indonesia',
    href: null,
    color: 'bg-[#7C3AED]',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
  },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/BaridNst',
    hoverBg: '#24292e',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/a-barid-dinda-khair-nst-a0385524a/',
    hoverBg: '#0A66C2',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/a.baridnasution?igsi=bzAxaGZhZDkxYjVh',
    hoverBg: '#E1306C',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
  },
]
</script>

<template>
  <div ref="wrapperRef" class="contact-wrapper">
    <!-- Animated Background Orbs -->
    <div class="contact-orb contact-orb--1"></div>
    <div class="contact-orb contact-orb--2"></div>
    <div class="contact-orb contact-orb--3"></div>

    <!-- Section Header -->
    <div class="text-center mb-10 sm:mb-14 relative z-10">
      <div class="inline-flex items-center gap-2 rounded-full border border-violet-300/40 bg-violet-50/80 px-4 py-1.5 backdrop-blur-md mb-4">

        <span class="font-jakarta text-xs font-bold uppercase tracking-widest text-violet-600">
          Hubungi Saya
        </span>
      </div>
      <h2 class="font-jakarta text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
        Mari <span class="contact-gradient-text">Terhubung</span>
      </h2>
      <p class="font-jakarta text-sm sm:text-base text-gray-500 mt-3 max-w-md mx-auto leading-relaxed">
        Punya ide proyek atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya.
      </p>
    </div>

    <!-- Main Content Grid -->
    <div class="relative z-10 grid gap-6 lg:gap-8 lg:grid-cols-[1fr_1.3fr] items-start">

      <!-- Left Column: Info + Socials -->
      <div class="flex flex-col gap-5">

        <!-- Contact Info Cards -->
        <div class="flex flex-col gap-3">
          <div
            v-for="(info, idx) in contactInfo"
            :key="idx"
            class="contact-info-card group"
          >
            <component
              :is="info.href ? 'a' : 'div'"
              :href="info.href"
              :target="info.href ? '_blank' : undefined"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 sm:p-5"
            >
              <div class="contact-info-icon" :class="info.color">
                <span v-html="info.svg"></span>
              </div>
              <div class="flex-1 min-w-0">
                <span class="font-jakarta text-[0.65rem] font-bold uppercase tracking-widest text-violet-500 block">
                  {{ info.label }}
                </span>
                <p class="font-jakarta text-sm sm:text-base font-semibold text-gray-800 mt-0.5 truncate">
                  {{ info.value }}
                </p>
              </div>
              <ExternalLink
                v-if="info.href"
                class="size-4 text-gray-300 group-hover:text-violet-500 transition-colors shrink-0"
              />
            </component>
          </div>
        </div>

        <!-- Social Links Card -->
        <div class="aura aura-dual text-violet-400">
          <div class="contact-social-card">
            <h4 class="font-jakarta text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
              <Sparkles class="size-3.5 text-violet-400 contact-sparkle" />
              Temukan Saya
            </h4>
            <div class="flex gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.label"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="social.label"
                class="contact-social-btn"
                :style="{ '--brand-color': social.hoverBg }"
              >
                <span v-html="social.svg"></span>
              </a>
            </div>

            <!-- Fun Quote -->
            <div class="mt-5 pt-4 border-t border-violet-100/60">
              <p class="font-jakarta text-xs text-gray-400 italic leading-relaxed">
                "Code is poetry, and I write sonnets in JavaScript."
                <span class="not-italic">✨</span>
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- Right Column: Contact Form -->
      <div class="aura aura-dual aura-lg text-violet-500">
        <div class="contact-form-card">
          <!-- Form Header -->
          <div class="flex items-center gap-3 mb-6">
            <div class="contact-form-icon">
              <Send class="size-5 text-white" />
            </div>
            <div>
              <h3 class="font-jakarta text-lg font-bold text-gray-900">Kirim Pesan</h3>
              <p class="font-jakarta text-xs text-gray-400 mt-0.5">Saya akan membalas secepatnya!</p>
            </div>
          </div>

          <!-- Success State -->
          <Transition name="contact-fade">
            <div v-if="isSubmitted" class="contact-success">
              <div class="contact-success-icon">
                <CheckCircle2 class="size-8 text-emerald-500" />
              </div>
              <h4 class="font-jakarta text-lg font-bold text-gray-900 mt-3">Pesan Terkirim!</h4>
              <p class="font-jakarta text-sm text-gray-500 mt-1">Terima kasih sudah menghubungi saya.</p>
            </div>
          </Transition>

          <!-- Form -->
          <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="flex flex-col gap-4">
            <!-- Name Input -->
            <div class="contact-field">
              <label class="contact-label" for="contact-name">
                <User class="size-3.5" />
                Nama
              </label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                placeholder="Nama lengkap kamu"
                class="input contact-input"
                required
              />
            </div>

            <!-- Email Input -->
            <div class="contact-field">
              <label class="contact-label" for="contact-email">
                <AtSign class="size-3.5" />
                Email
              </label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                placeholder="email@kamu.com"
                class="input contact-input"
                required
              />
            </div>

            <!-- Subject Input -->
            <div class="contact-field">
              <label class="contact-label" for="contact-subject">
                <MessageSquare class="size-3.5" />
                Subjek
              </label>
              <input
                id="contact-subject"
                v-model="form.subject"
                type="text"
                placeholder="Subjek pesan (opsional)"
                class="input contact-input"
              />
            </div>

            <!-- Message Textarea -->
            <div class="contact-field">
              <label class="contact-label" for="contact-message">
                <Mail class="size-3.5" />
                Pesan
              </label>
              <textarea
                id="contact-message"
                v-model="form.message"
                placeholder="Tulis pesan kamu di sini..."
                rows="4"
                class="textarea contact-textarea"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="btn contact-submit-btn"
              :class="{ 'contact-submit-btn--loading': isSubmitting }"
              :disabled="!canSubmit || isSubmitting"
            >
              <span v-if="isSubmitting" class="loading loading-spinner loading-sm"></span>
              <Send v-else class="size-4" />
              {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
              <ArrowRight v-if="!isSubmitting" class="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom Decorative Wave -->
    <div class="contact-bottom-glow"></div>
  </div>
</template>

<style scoped>
/* ═══════════════════════════════════════════════════
   CONTACT SECTION — Light Purple / Violet Theme
   Premium glassmorphism with DaisyUI
   ═══════════════════════════════════════════════════ */

.contact-wrapper {
  position: relative;
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  overflow: hidden;
}

/* ═══════ Animated Background Orbs ═══════ */
.contact-orb {
  pointer-events: none;
  position: absolute;
  border-radius: 9999px;
  filter: blur(80px);
  opacity: 0.35;
}
.contact-orb--1 {
  top: -5rem;
  left: -4rem;
  width: 24rem;
  height: 24rem;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.5) 0%, transparent 70%);
  animation: contactFloat 8s ease-in-out infinite alternate;
}
.contact-orb--2 {
  bottom: -6rem;
  right: -3rem;
  width: 28rem;
  height: 28rem;
  background: radial-gradient(circle, rgba(192, 132, 252, 0.4) 0%, transparent 70%);
  animation: contactFloat 10s ease-in-out infinite alternate-reverse;
}
.contact-orb--3 {
  top: 40%;
  left: 30%;
  width: 16rem;
  height: 16rem;
  background: radial-gradient(circle, rgba(232, 121, 249, 0.25) 0%, transparent 70%);
  animation: contactFloat 12s ease-in-out infinite alternate;
}

@keyframes contactFloat {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(15px, -10px) scale(1.08); }
  100% { transform: translate(-10px, 15px) scale(1.03); }
}

/* ═══════ Gradient Text ═══════ */
.contact-gradient-text {
  background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #c084fc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ═══════ Contact Info Cards ═══════ */
.contact-info-card {
  border-radius: 1rem;
  border: 1px solid rgba(167, 139, 250, 0.15);
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.9),
    rgba(245, 243, 255, 0.75)
  );
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 12px -2px rgba(139, 92, 246, 0.06);
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;
}
.contact-info-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, #a78bfa, #c084fc, #e879f9);
  border-radius: 0.5rem 0 0 0.5rem;
  opacity: 0;
  transition: opacity 0.3s;
}
.contact-info-card:hover {
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 8px 28px -4px rgba(139, 92, 246, 0.14);
  transform: translateX(6px);
}
.contact-info-card:hover::after {
  opacity: 1;
}

.contact-info-icon {
  flex-shrink: 0;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s, box-shadow 0.3s;
}
.contact-info-card:hover .contact-info-icon {
  transform: scale(1.1) rotate(-5deg);
  box-shadow: 0 6px 16px -2px rgba(0, 0, 0, 0.2);
}

/* ═══════ Social Card ═══════ */
.contact-social-card {
  border-radius: var(--radius-box, 1rem);
  border: none;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.95),
    rgba(245, 243, 255, 0.85)
  );
  padding: 1.25rem 1.5rem;
  backdrop-filter: blur(12px);
  box-shadow:
    0 4px 20px -4px rgba(139, 92, 246, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.contact-social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.875rem;
  border: 1px solid rgba(167, 139, 250, 0.15);
  background: white;
  color: #6b7280;
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.06);
}
.contact-social-btn:hover {
  transform: translateY(-4px) scale(1.08);
  background: var(--brand-color, #7c3aed);
  border-color: transparent;
  color: white;
  box-shadow:
    0 10px 24px -4px color-mix(in srgb, var(--brand-color, #7c3aed) 40%, transparent),
    0 4px 8px -2px rgba(0, 0, 0, 0.1);
}

.contact-sparkle {
  animation: sparkSpin 8s linear infinite;
}
@keyframes sparkSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}


/* ═══════ Form Card ═══════ */
.contact-form-card {
  border-radius: var(--radius-box, 1rem);
  border: none;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.97) 0%,
    rgba(245, 243, 255, 0.93) 40%,
    rgba(237, 233, 254, 0.88) 100%
  );
  padding: 1.75rem;
  backdrop-filter: blur(20px) saturate(1.4);
  box-shadow:
    0 4px 24px -4px rgba(139, 92, 246, 0.1),
    0 12px 48px -8px rgba(139, 92, 246, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  position: relative;
  overflow: hidden;
}

/* Background subtle grid */
.contact-form-card::before {
  content: '';
  pointer-events: none;
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(139, 92, 246, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
  background-size: 2rem 2rem;
}

.contact-form-icon {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  box-shadow: 0 4px 12px -2px rgba(139, 92, 246, 0.35);
}

/* ═══════ Form Fields ═══════ */
.contact-field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.contact-label {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.contact-input {
  width: 100%;
  border-radius: 0.75rem !important;
  border: 1.5px solid rgba(167, 139, 250, 0.2) !important;
  background: rgba(255, 255, 255, 0.7) !important;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.875rem;
  color: #1f2937;
  padding: 0.625rem 0.875rem;
  transition: all 0.3s;
  outline: none !important;
  box-shadow: 0 1px 4px -1px rgba(139, 92, 246, 0.04);
  height: auto !important;
  min-height: 2.5rem;
}
.contact-input:focus {
  border-color: rgba(139, 92, 246, 0.5) !important;
  box-shadow:
    0 0 0 3px rgba(139, 92, 246, 0.1),
    0 2px 8px -2px rgba(139, 92, 246, 0.1) !important;
  background: rgba(255, 255, 255, 0.95) !important;
}
.contact-input::placeholder {
  color: #c4b5fd;
  font-size: 0.8rem;
}

.contact-textarea {
  width: 100%;
  border-radius: 0.75rem !important;
  border: 1.5px solid rgba(167, 139, 250, 0.2) !important;
  background: rgba(255, 255, 255, 0.7) !important;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.875rem;
  color: #1f2937;
  padding: 0.75rem 0.875rem;
  transition: all 0.3s;
  outline: none !important;
  box-shadow: 0 1px 4px -1px rgba(139, 92, 246, 0.04);
  resize: vertical;
  min-height: 5rem;
  field-sizing: content;
}
.contact-textarea:focus {
  border-color: rgba(139, 92, 246, 0.5) !important;
  box-shadow:
    0 0 0 3px rgba(139, 92, 246, 0.1),
    0 2px 8px -2px rgba(139, 92, 246, 0.1) !important;
  background: rgba(255, 255, 255, 0.95) !important;
}
.contact-textarea::placeholder {
  color: #c4b5fd;
  font-size: 0.8rem;
}

/* ═══════ Submit Button ═══════ */
.contact-submit-btn {
  display: flex !important;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  border: none !important;
  border-radius: 0.75rem !important;
  padding: 0.75rem 1.5rem !important;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: white !important;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed) !important;
  box-shadow:
    0 4px 16px -4px rgba(139, 92, 246, 0.45),
    0 2px 4px -1px rgba(139, 92, 246, 0.2);
  cursor: pointer;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  position: relative;
  overflow: hidden;
}
.contact-submit-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s;
}
.contact-submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow:
    0 8px 24px -4px rgba(139, 92, 246, 0.55),
    0 4px 8px -2px rgba(139, 92, 246, 0.25);
}
.contact-submit-btn:hover:not(:disabled)::before {
  opacity: 1;
}
.contact-submit-btn:active:not(:disabled) {
  transform: translateY(0) scale(0.98);
}
.contact-submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.contact-submit-btn--loading {
  pointer-events: none;
}

/* ═══════ Success State ═══════ */
.contact-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1rem;
}
.contact-success-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: successBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes successBounce {
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
}

/* ═══════ Transitions ═══════ */
.contact-fade-enter-active,
.contact-fade-leave-active {
  transition: all 0.4s ease;
}
.contact-fade-enter-from,
.contact-fade-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

/* ═══════ Bottom Glow ═══════ */
.contact-bottom-glow {
  pointer-events: none;
  position: absolute;
  bottom: -4rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 6rem;
  background: radial-gradient(ellipse, rgba(167, 139, 250, 0.15) 0%, transparent 70%);
  filter: blur(30px);
}

/* ═══════ Responsive ═══════ */
@media (max-width: 640px) {
  .contact-orb {
    width: 12rem;
    height: 12rem;
  }
  .contact-form-card {
    padding: 1.25rem;
  }
}

/* ═══════ Mobile perf: drop expensive GPU filters ═══════ */
@media (hover: none), (max-width: 640px) {
  .contact-orb {
    animation: none;
    filter: blur(30px);
    opacity: 0.2;
  }
  .contact-info-card,
  .contact-social-card,
  .contact-form-card,
  .contact-input,
  .contact-textarea {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  .contact-sparkle {
    animation: none;
  }
}
</style>

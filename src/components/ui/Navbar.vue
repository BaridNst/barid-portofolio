<script setup>
import { ref } from 'vue'
import { Menu, X } from '@lucide/vue'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const items = [
  { to: '#top', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#project', label: 'Project' },
  { to: '#contact', label: 'Contact' },
]
</script>

<template>
  <div class="flex w-full justify-center px-4 py-4 sm:py-5">
    <div
      class="relative z-10 flex w-fit items-center justify-center gap-6 rounded-full bg-white px-6 py-3 shadow-lg"
    >
      <div class="flex items-center">
        <a href="#top" class="motion-logo mr-6 flex items-center">
          <img
            src="/images/baridlogo.png"
            alt="Barid"
            class="h-14 w-14 rounded-full object-cover shadow-sm"
            style="width: 3.5rem; height: 3.5rem"
          />
        </a>
      </div>

      <nav class="hidden items-center gap-8 md:flex">
        <a
          v-for="(item, i) in items"
          :key="item.to"
          :href="item.to"
          class="fade-down rounded-full px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-300 hover:scale-110 hover:bg-violet-200 hover:text-violet-900 active:scale-90 active:bg-violet-300 active:text-violet-900"
          :style="{ animationDelay: `${i * 0.05}s` }"
        >
          {{ item.label }}
        </a>
      </nav>

      <button
        class="flex items-center md:hidden"
        @click="toggleMenu"
        aria-label="Menu"
      >
        <Menu class="h-6 w-6 text-gray-900 transition-transform active:scale-90" />
      </button>
    </div>

    <Transition name="menu-slide">
      <div v-if="isOpen" class="fixed inset-0 z-50 bg-white px-6 pt-24 md:hidden">
        <button
          class="absolute right-6 top-6 p-2"
          @click="toggleMenu"
          aria-label="Tutup"
        >
          <X class="h-6 w-6 text-gray-900 transition-transform active:scale-90" />
        </button>
        <div class="flex flex-col space-y-6">
          <a
            v-for="(item, i) in items"
            :key="item.to"
            :href="item.to"
            class="fade-in-x rounded-full px-3 py-2 text-base font-medium text-gray-900 transition-all duration-300 hover:bg-violet-200 hover:text-violet-900 active:bg-violet-300 active:text-violet-900"
            :style="{ animationDelay: `${i * 0.1 + 0.1}s` }"
            @click="toggleMenu"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.motion-logo {
  animation: logo-in 0.3s ease both;
}

@keyframes logo-in {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}

.motion-logo:hover {
  transform: rotate(10deg);
}

.motion-logo img {
  border-radius: 9999px;
}

.fade-down {
  animation: fade-down 0.3s ease both;
}

@keyframes fade-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.fade-in-x {
  animation: fade-in-x 0.3s ease both;
}

@keyframes fade-in-x {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.menu-slide-enter-active,
.menu-slide-leave-active {
  transition:
    opacity 0.25s,
    transform 0.3s cubic-bezier(0.5, 0.1, 0.3, 1.1);
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
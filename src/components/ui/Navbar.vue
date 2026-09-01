<script setup>
const items = [
  { to: '#top', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#project', label: 'Project' },
  { to: '#contact', label: 'Contact' },
]
</script>

<template>
  <div class="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4 sm:py-5">
    <div
      class="relative z-10 flex w-fit max-w-full items-center justify-center gap-3 rounded-full bg-white px-4 py-3 shadow-lg sm:gap-6 sm:px-6"
    >
      <a href="#top" class="motion-logo mr-2 flex shrink-0 items-center sm:mr-6">
        <img
          src="/images/baridlogo.png"
          alt="Barid"
          class="h-12 w-12 rounded-full object-cover shadow-sm sm:h-14 sm:w-14"
          style="width: 3rem; height: 3rem"
        />
      </a>

      <nav class="flex items-center gap-1 sm:gap-2">
        <a
          v-for="(item, i) in items"
          :key="item.to"
          :href="item.to"
          class="fade-down shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-xs font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-violet-200 hover:text-violet-900 active:scale-90 active:bg-violet-300 active:text-violet-900 sm:px-3 sm:text-sm"
          :style="{ animationDelay: `${i * 0.05}s` }"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
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
</style>
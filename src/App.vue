<script setup>
import Navbar from '@/components/ui/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <Navbar />
    <main class="pt-24 sm:pt-28">
      <Suspense>
        <RouterView />
        <template #fallback>
          <div></div>
        </template>
      </Suspense>
    </main>
  </div>
</template>
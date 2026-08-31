<script setup>
import Navbar from '@/components/ui/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <Navbar />
    <RouterView />
  </div>
</template>
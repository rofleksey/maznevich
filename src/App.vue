<template>
  <Navigation />
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Navigation from './components/Navigation.vue'

const route = useRoute()

onMounted(() => {
  if (route.path === '/') {
    // Add random glitch effect to header occasionally
    const glitchHeader = document.querySelector('.glitch')
    if (glitchHeader) {
      setInterval(() => {
        if (Math.random() > 0.7) {
          glitchHeader.classList.add('glitching')
          setTimeout(() => {
            glitchHeader.classList.remove('glitching')
          }, 300)
        }
      }, 3000)
    }
  }
})
</script>

<style scoped>
#app {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--darker) 0%, #1e1b4b 100%);
}
</style>
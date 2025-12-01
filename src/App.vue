<template>
  <div id="app">
    <Header />
    <main>
      <TournamentSection />
      <RageSection />
      <AchievementsSection />
      <DbdAcademySection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import TournamentSection from './components/TournamentSection.vue'
import RageSection from './components/RageSection.vue'
import AchievementsSection from './components/AchievementsSection.vue'
import DbdAcademySection from './components/DbdAcademySection.vue'
import Footer from './components/Footer.vue'

// Initialize glitch effect
import { onMounted } from 'vue'

onMounted(() => {
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
})
</script>

<style scoped>
#app {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--darker) 0%, #1e1b4b 100%);
}
</style>
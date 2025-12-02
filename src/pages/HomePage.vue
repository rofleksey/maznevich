<template>
  <div id="app">
    <Header />
    <main>
      <RageSection />
      <AchievementsSection />
      <DbdAcademySection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import RageSection from '../components/RageSection.vue'
import AchievementsSection from '../components/AchievementsSection.vue'
import DbdAcademySection from '../components/DbdAcademySection.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
#app {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--darker) 0%, #1e1b4b 100%);
}
</style>
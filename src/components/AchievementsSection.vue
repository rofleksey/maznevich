<template>
  <section id="achievements">
    <div class="container">
      <h2 class="section-title">UNMATCHED ACHIEVEMENTS</h2>
      <ul class="achievement-list">
        <li v-for="achievement in achievements" :key="achievement.text">
          <i :class="achievement.icon"></i>
          <span>{{ achievement.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Achievement } from '../types'

const achievements = ref<Achievement[]>([
  { icon: 'fas fa-medal', text: 'Creator of DBD Academy - The most elite training program for DBD players' },
  { icon: 'fas fa-medal', text: 'Host of 30+ 1v1 tournaments - Dominated every single one' },
  { icon: 'fas fa-medal', text: 'Top 1 ladder player consistently for 3+ years' },
  { icon: 'fas fa-medal', text: 'Over 666 students trained since 2021 - Creating the next generation of champions' }
])
</script>

<style scoped>
#achievements {
  padding: 80px 0;
}

.achievement-list {
  list-style: none;
  max-width: 800px;
  margin: 0 auto;
}

.achievement-list li {
  padding: 20px;
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 4px solid var(--secondary);
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.achievement-list li:hover {
  transform: translateX(10px);
  background: rgba(56, 189, 248, 0.1);
}

.achievement-list li i {
  color: var(--accent);
  font-size: 1.5rem;
  margin-right: 20px;
  flex-shrink: 0;
}

.achievement-list li span {
  font-size: 1.1rem;
  color: var(--light);
}
</style>
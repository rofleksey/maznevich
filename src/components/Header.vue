<template>
  <header>
    <div class="container">
      <div class="header-content">
        <h1 class="glitch" data-text="MAZNEVICH">MAZNEVICH</h1>
        <h2>Dead by Daylight Legend & Undisputed Champion</h2>

        <div class="stats-grid">
          <div
              v-for="stat in statistics"
              :key="stat.label"
              class="stat-card"
              @mouseenter="handleCardHover"
              @mouseleave="handleCardLeave"
          >
            <i :class="stat.icon"></i>
            <div class="number">{{ stat.value }}</div>
            <div class="label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Statistic } from '../types'

const statistics = ref<Statistic[]>([
  { icon: 'fas fa-trophy', value: '99+', label: 'Tournaments Won' },
  { icon: 'fas fa-clock', value: '19,000+', label: 'Hours in DBD' },
  { icon: 'fas fa-graduation-cap', value: '666+', label: 'Students Trained' },
  { icon: 'fas fa-crown', value: '#1', label: 'Top Ladder Position' }
])

const handleCardHover = (event: Event) => {
  const card = event.currentTarget as HTMLElement
  card.style.transform = 'translateY(-10px)'
}

const handleCardLeave = (event: Event) => {
  const card = event.currentTarget as HTMLElement
  card.style.transform = 'translateY(0)'
}
</script>

<style scoped>
header {
  background: linear-gradient(135deg, rgba(30, 27, 75, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%);
  padding: 100px 0 60px;
  position: relative;
  overflow: hidden;
  border-bottom: 3px solid var(--primary);
}

header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.15;
  z-index: -1;
}

.header-content {
  text-align: center;
  position: relative;
  z-index: 2;
}

.header-content h1 {
  font-family: var(--font-heading);
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 10px;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 15px rgba(167, 139, 250, 0.7);
}

.header-content h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--accent);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 50px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 25px;
  text-align: center;
  border: 1px solid rgba(167, 139, 250, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.stat-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary);
  box-shadow: 0 10px 20px rgba(167, 139, 250, 0.2);
}

.stat-card i {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 15px;
}

.stat-card .number {
  font-size: 3rem;
  font-weight: 900;
  color: var(--accent);
  font-family: var(--font-heading);
  line-height: 1;
}

.stat-card .label {
  font-size: 1.1rem;
  color: var(--light);
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .header-content h1 {
    font-size: 3rem;
  }

  .header-content h2 {
    font-size: 1.5rem;
  }
}
</style>
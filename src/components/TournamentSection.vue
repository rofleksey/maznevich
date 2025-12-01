<template>
  <section id="tournaments">
    <div class="container">
      <h2 class="section-title">TOURNAMENT DOMINATION</h2>
      <div class="tournament-grid">
        <div
            v-for="tournament in tournaments"
            :key="tournament.name"
            :class="['tournament-card', tournament.type]"
            @mouseenter="handleTournamentHover"
        >
          <div class="tournament-name">{{ tournament.name }}</div>
          <div class="tournament-result">{{ tournament.result }}</div>
          <div class="tournament-date">{{ tournament.date }}</div>
          <div class="tournament-prize">{{ tournament.prize }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Tournament } from '../types'

const tournaments = ref<Tournament[]>([
  { name: "Dead by Daylight Championship 2023", result: "🥇 1st Place", date: "2023", prize: "$50,000", type: "win" },
  { name: "Dead by Daylight All-Stars 2022", result: "🥇 1st Place", date: "2022", prize: "$20,000", type: "win" },
  { name: "Twitch Rivals: Dead by Daylight", result: "🥇 1st Place", date: "2023", prize: "$15,000", type: "win" },
  { name: "Champions Of The Fog - Season 5", result: "🥇 1st Place", date: "04/12/2022", prize: "$150", type: "win" },
  { name: "Liga Kabata - Season 1", result: "🥇 1st Place", date: "18/11/2022", prize: "700 PLN", type: "win" },
  { name: "Dzigon Cup 3", result: "🥇 1st Place", date: "12/11/2022", prize: "200 PLN", type: "win" },
  { name: "R4VEN's Blood Tournament 2", result: "🥇 1st Place", date: "08/08/2022", prize: "100 PLN", type: "win" },
  { name: "Polska Liga Dead by Daylight S1", result: "🥇 1st Place", date: "07/08/2021", prize: "N/A", type: "win" },
  { name: "Dead By Trials", result: "🥇 1st Place", date: "01/04/2023", prize: "N/A", type: "win" },
  { name: "Dead by Daylight Community Cup", result: "🥇 1st Place", date: "2021", prize: "$8,000", type: "win" },
  { name: "Fog Whisperers Invitational", result: "🥇 1st Place", date: "2022", prize: "$10,000", type: "win" },
  { name: "Mała Liga Kabata 6", result: "🥈 2nd Place", date: "06/12/2024", prize: "100 PLN", type: "place2" },
  { name: "Downtown DBD Tournament", result: "🥈 2nd Place", date: "06/07/2022", prize: "N/A", type: "place2" },
  { name: "1 z 10 Overtime", result: "🥈 2nd Place", date: "23/02/2025", prize: "N/A", type: "place2" },
  { name: "Liga Kabata - Season 2", result: "🥉 3rd Place", date: "08/04/2023", prize: "475 PLN", type: "place3" },
  { name: "The Bar Tournament", result: "🥉 3rd Place", date: "07/05/2023", prize: "30 €", type: "place3" },
  { name: "Mała Liga Kabata 2", result: "🥉 3rd Place", date: "08/09/2023", prize: "100 PLN", type: "place3" },
  { name: "Fate Awaits July", result: "🥉 3rd Place", date: "17/07/2022", prize: "N/A", type: "place3" },
  { name: "Polska Liga Dead by Daylight S2", result: "🥉 3rd Place", date: "03/10/2021", prize: "N/A", type: "place3" },
  { name: "Limerence Fate Awaits", result: "🥉 3rd Place", date: "08/07/2023", prize: "25 €", type: "place3" }
])

const handleTournamentHover = (event: Event) => {
  const card = event.currentTarget as HTMLElement
  card.style.transform = 'translateY(-5px)'
}
</script>

<style scoped>
#tournaments {
  padding: 80px 0;
}

.tournament-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
}

.tournament-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 25px;
  border-left: 5px solid var(--primary);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.tournament-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(56, 189, 248, 0.2);
}

.tournament-card.win {
  border-left-color: var(--success);
}

.tournament-card.win::before {
  content: '🏆';
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  opacity: 0.7;
}

.tournament-card.place2 {
  border-left-color: var(--warning);
}

.tournament-card.place3 {
  border-left-color: #cd7f32;
}

.tournament-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--secondary);
  margin-bottom: 10px;
}

.tournament-result {
  font-size: 1.8rem;
  font-weight: 900;
  font-family: var(--font-heading);
  color: var(--primary);
  margin-bottom: 10px;
}

.tournament-date {
  color: var(--gray-light);
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.tournament-prize {
  color: var(--success);
  font-weight: 600;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .tournament-grid {
    grid-template-columns: 1fr;
  }
}
</style>
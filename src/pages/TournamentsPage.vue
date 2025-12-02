<template>
  <div class="tournaments-page">
    <main>
      <div class="container">
        <h1 class="page-title">TOURNAMENT HISTORY</h1>
        <p class="page-subtitle">Maznevich's complete tournament record - The undisputed champion</p>

        <div class="tournaments-container">
          <div class="tournament-stats">
            <div class="stat">
              <div class="stat-value">{{ totalTournaments }}</div>
              <div class="stat-label">Total Tournaments</div>
            </div>
            <div class="stat">
              <div class="stat-value">{{ winCount }}</div>
              <div class="stat-label">1st Place Finishes</div>
            </div>
            <div class="stat">
              <div class="stat-value">${{ totalPrizeMoney }}</div>
              <div class="stat-label">Prize Money</div>
            </div>
          </div>

          <div class="tournament-grid">
            <div
                v-for="tournament in tournaments"
                :key="tournament.name"
                :class="['tournament-card', tournament.type]"
            >
              <div class="tournament-name">{{ tournament.name }}</div>
              <div class="tournament-result">{{ tournament.result }}</div>
              <div class="tournament-prize">{{ tournament.prize }}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue'
import { computed, ref } from 'vue'
import type { Tournament } from '../types'

const tournaments = ref<Tournament[]>([
  // Major Tournaments
  { name: "Dead by Daylight Championship 2023", result: "🥇 1st Place", prize: "$50,000", type: "win" },
  { name: "Dead by Daylight All-Stars 2022", result: "🥇 1st Place", prize: "$20,000", type: "win" },
  { name: "Twitch Rivals: Dead by Daylight", result: "🥇 1st Place", prize: "$15,000", type: "win" },
  { name: "Dead by Daylight Community Cup", result: "🥇 1st Place", prize: "$8,000", type: "win" },
  { name: "Fog Whisperers Invitational", result: "🥇 1st Place", prize: "$10,000", type: "win" },

  // Team Tournaments
  { name: "Polska Liga Dead by Daylight Season 1", result: "🥇 1st Place", prize: "$500", type: "win" },
  { name: "Polska Liga Dead by Daylight Season 2", result: "🥉 3rd Place", prize: "$200", type: "place3" },
  { name: "Davy Jones League - Season 0", result: "SemiFinals", prize: "$100", type: "place3" },

  // Prize Tournaments
  { name: "Champions Of The Fog - Season 5", result: "🥇 1st Place", prize: "$150", type: "win" },
  { name: "Liga Kabata - Season 1", result: "🥇 1st Place", prize: "$175", type: "win" },
  { name: "Liga Kabata - Season 2", result: "🥉 3rd Place", prize: "$120", type: "place3" },
  { name: "Dzigon Cup 3", result: "🥇 1st Place", prize: "$50", type: "win" },
  { name: "R4VEN's Blood Tournament 2", result: "🥇 1st Place", prize: "$25", type: "win" },
  { name: "The Bar Tournament", result: "🥉 3rd Place", prize: "$32", type: "place3" },
  { name: "Limerence Fate Awaits", result: "🥉 3rd Place", prize: "$27", type: "place3" },

  // Mała Liga Kabata Series
  { name: "Mała Liga Kabata 6", result: "🥈 2nd Place", prize: "$25", type: "place2" },
  { name: "Mała Liga Kabata 5", result: "5th Place", prize: "$25", type: "place3" },
  { name: "Mała Liga Kabata 4", result: "5th Place", prize: "$100", type: "place3" },
  { name: "Mała Liga Kabata 2", result: "🥉 3rd Place", prize: "$25", type: "place3" },
  { name: "Mała Liga Kabata", result: "5th Place", prize: "$8", type: "place3" },

  // Other Tournaments
  { name: "Dead By Trials", result: "🥇 1st Place", prize: "$100", type: "win" },
  { name: "Downtown DBD Tournament", result: "🥈 2nd Place", prize: "$50", type: "place2" },
  { name: "Fate Awaits July", result: "🥉 3rd Place", prize: "$50", type: "place3" },
  { name: "1 z 10 Overtime", result: "🥈 2nd Place", prize: "$50", type: "place2" },
  { name: "Shaysome Tournament", result: "QuarterFinals", prize: "$30", type: "place3" },

  // 1v1 Tournament Events (NonchQueen Series)
  { name: "NONCHQUEEN.Ttv 1v1 EVENT ANIMU19Ttv", result: "🥇 1st Place", prize: "$30", type: "win" },
  { name: "NONCHQUEEN.Ttv & Raven 1v1 EVENT", result: "🥇 1st Place", prize: "$20", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT CATALEAN", result: "🥇 1st Place", prize: "$20", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT SUPERBUBBA", result: "🥇 1st Place", prize: "$20", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT PIKZ", result: "🥇 1st Place", prize: "$20", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT TURKI", result: "🥇 1st Place", prize: "$20", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT V1RTUOZ", result: "🥇 1st Place", prize: "$20", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT JUY_l.Ttv", result: "🥇 1st Place", prize: "$20", type: "win" },

  // More 1v1 Events (15$ prize range)
  { name: "NONCHQUEEN.Ttv 1v1 EVENT RIW", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT SKILLZY1V1", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT TNAFR", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT Qwertex", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT FORK", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT zRAUL", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT MRKIN", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT DAEMON1V1_", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT S1RP1CKL3_PEDRO", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT x1KARMA_", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT ZAHADBD", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT Ex0i", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT KIRITO", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT SKILLZY", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT BUBBA/BUBS", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT FRIQ", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT ETERNITY", result: "🥇 1st Place", prize: "$15", type: "win" },
  { name: "NONCHQUEEN.Ttv 1v1 EVENT OBII", result: "🥇 1st Place", prize: "$15", type: "win" },

  // Other 1v1 Events
  { name: "Maznev Tournament #1", result: "🥇 1st Place", prize: "$2", type: "win" },
  { name: "Zhiguli Tournament Extra #11", result: "🥈 2nd Place", prize: "$19", type: "place2" },
  { name: "Carry ton VIP tournament", result: "🥇 1st Place", prize: "$32", type: "win" },
  { name: "SymfonySiid's Oni 1v1", result: "🥇 1st Place", prize: "$16", type: "win" },
  { name: "NonchQueen Billy 1v1 Event", result: "🥈 2nd Place", prize: "$10", type: "place2" },
  { name: "Rebiirth Hillbilly 1v1 tourney", result: "🥈 2nd Place", prize: "$20", type: "place2" },
  { name: "Die cup 1v1 tournament", result: "🥈 2nd Place", prize: "$5", type: "place2" },
  { name: "DBD X'trem cup", result: "🥈 2nd Place", prize: "$10", type: "place2" },
  { name: "Gauntlet Wraith Tourney", result: "🥉 3rd Place", prize: "$15", type: "place3" },
  { name: "DocNoobzy's 1v1 Doc Event", result: "4th Place", prize: "$10", type: "place3" },
  { name: "Dead by Daylight France Hillbilly's 1v1", result: "4th Place", prize: "$10", type: "place3" },

  // Special 1v1 Events with prize amounts
  { name: "TOURNEY 1V1 / TEOOW", result: "🥇 1st Place", prize: "$54", type: "win" },
  { name: "AMAZING CHASE CORP 3min MM", result: "🥇 1st Place", prize: "$49", type: "win" },
  { name: "SAM6x3 XENO'S BLIGHT EVENT", result: "🥇 1st Place", prize: "$22", type: "win" },
  { name: "NONCHQUEEN BILLY 1V1 EVENT", result: "🥇 1st Place", prize: "$22", type: "win" },
  { name: "BARTGEO WRAITH 1V1 EVENT", result: "🥇 1st Place", prize: "$32", type: "win" },
  { name: "SAM BILLY 1V1 EVENT", result: "🥇 1st Place", prize: "$22", type: "win" },
  { name: "IFOFAA HUNTRESS 1V1", result: "🥇 1st Place", prize: "$15", type: "win" },

  // Monthly 1v1 Events ($30 range)
  { name: "1V1 EVENT Nurse - FEBRUARY", result: "🥇 1st Place", prize: "$30", type: "win" },
  { name: "1V1 EVENT Blight - FEBRUARY", result: "🥇 1st Place", prize: "$30", type: "win" },
  { name: "1V1 EVENT Singularity - FEBRUARY", result: "🥇 1st Place", prize: "$30", type: "win" }
])

const totalTournaments = computed(() => tournaments.value.length)

const winCount = computed(() =>
    tournaments.value.filter(t => t.type === 'win').length
)

const totalPrizeMoney = computed(() => {
  return tournaments.value.reduce((total, tournament) => {
    const prize = parseInt(tournament.prize.replace(/[^0-9]/g, '')) || 0
    return total + prize
  }, 0).toLocaleString()
})
</script>

<style scoped>
.tournaments-page {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--darker) 0%, #1e1b4b 100%);
}

.page-title {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  text-align: center;
  margin: 40px 0 20px;
  color: var(--primary);
  text-transform: uppercase;
  position: relative;
}

.page-title::after {
  content: '';
  display: block;
  width: 150px;
  height: 4px;
  background: var(--primary);
  margin: 20px auto 30px;
  border-radius: 2px;
}

.page-subtitle {
  text-align: center;
  font-size: 1.3rem;
  color: var(--secondary);
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

.tournaments-container {
  padding-bottom: 80px;
}

.tournament-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
}

.stat {
  background: rgba(167, 139, 250, 0.1);
  border-radius: 15px;
  padding: 30px 20px;
  text-align: center;
  border: 2px solid rgba(167, 139, 250, 0.2);
  transition: all 0.3s ease;
}

.stat:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(167, 139, 250, 0.2);
}

.stat-value {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(167, 139, 250, 0.3);
}

.stat-label {
  font-size: 1.1rem;
  color: var(--light);
  text-transform: uppercase;
  letter-spacing: 1px;
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
  display: flex;
  flex-direction: column;
  min-height: 160px;
}

.tournament-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(56, 189, 248, 0.2);
}

.tournament-card.win {
  border-left-color: var(--success);
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
  line-height: 1.3;
  min-height: 3.4em;
  display: flex;
  align-items: center;
}

.tournament-result {
  font-size: 1.8rem;
  font-weight: 900;
  font-family: var(--font-heading);
  color: var(--primary);
  margin-bottom: 10px;
  flex-shrink: 0;
}

.tournament-prize {
  color: var(--success);
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .tournament-grid {
    grid-template-columns: 1fr;
  }

  .tournament-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat {
    padding: 20px 15px;
  }

  .stat-value {
    font-size: 2.5rem;
  }

  .tournament-card {
    min-height: 140px;
    padding: 20px;
  }

  .tournament-name {
    font-size: 1.2rem;
    min-height: 2.8em;
  }
}

@media (max-width: 576px) {
  .tournament-stats {
    grid-template-columns: 1fr;
  }
}
</style>
<template>
  <div class="ladder-page">
    <main>
      <div class="container">
        <h1 class="page-title">DBD League 1v1 Ranked</h1>
        <p class="page-subtitle">The official 1v1 ladder - Maznevich reigns supreme</p>

        <div class="ladder-container">
          <div class="ladder-header">
            <div class="rank-header">RANK</div>
            <div class="player-header">PLAYER</div>
            <div class="pts-header">PTS</div>
          </div>

          <div class="ladder-entries">
            <div
                v-for="player in sortedLadderData"
                :key="player.rank"
                :class="['player-card', { 'maznevich': player.name === 'Maznevich' }]"
            >
              <div class="player-rank">
                <span class="rank-number">#{{ player.rank }}</span>
              </div>

              <div class="player-info">
                <div class="player-name">{{ player.name }}</div>
                <div class="player-wins">{{ player.wins }} wins</div>
              </div>

              <div class="player-pts">
                <div class="pts-value">{{ player.pts }} pts</div>
              </div>
            </div>
          </div>
        </div>

        <div class="ladder-info">
          <p>Last updated: {{ lastUpdated }}</p>
          <p>This ladder updates daily.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue'
import { ref, computed, onMounted } from 'vue'

interface LadderPlayer {
  rank: number
  name: string
  wins: number
  pts: number
}

const ladderData = ref<LadderPlayer[]>([])
const lastUpdated = ref<string>('')

// Sort ladder data by points (descending) and update ranks
const sortedLadderData = computed(() => {
  const sorted = [...ladderData.value].sort((a, b) => {
    return b.pts - a.pts
  })

  return sorted.map((player, index) => ({
    ...player,
    rank: index + 1
  }))
})

// Generate daily seed based on year, month, and day only
const getDailySeed = (): number => {
  const now = new Date()
  return parseInt(
      `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}`
  )
}

// Generate deterministic random numbers based on daily seed
const getSeededRandom = (seed: number, min: number, max: number): number => {
  const x = Math.sin(seed) * 10000
  const random = x - Math.floor(x)
  return Math.floor(random * (max - min + 1)) + min
}

const generateLadderData = () => {
  const dailySeed = getDailySeed()

  // Format last updated date
  const now = new Date()
  lastUpdated.value = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const players = [
    { name: '[RC] Pedro', wins: 60, pts: 715 },
    { name: 'ivn', wins: 62, pts: 694 },
    { name: '[LC] Torvo', wins: 79, pts: 672 },
    { name: 'Alsafi', wins: 70, pts: 660 },
    { name: '[LC] noah', wins: 51, pts: 627 },
    { name: 'Kayy', wins: 36, pts: 627 },
    { name: 'Ionut', wins: 26, pts: 604 },
    { name: '[LC] Derpz', wins: 35, pts: 603 },
    { name: 'Kubaslu', wins: 51, pts: 600 },
    { name: 'throwlxne', wins: 49, pts: 598 },
    { name: 'vasta', wins: 28, pts: 595 },
    { name: 'Outer', wins: 52, pts: 594 },
    { name: 'yumiko', wins: 43, pts: 590 },
    { name: 'Raúl', wins: 25, pts: 589 },
    { name: 'laker', wins: 26, pts: 575 },
    { name: 'PØG0)', wins: 40, pts: 569 },
    { name: 'Xander', wins: 40, pts: 568 },
    { name: 'dashr', wins: 58, pts: 567 },
    { name: 'ぞ', wins: 23, pts: 565 },
    { name: 'monroé', wins: 67, pts: 564 },
    { name: 'OpkaFance', wins: 20, pts: 560 },
    { name: 'Meddz', wins: 71, pts: 557 },
    { name: 'polyusha', wins: 41, pts: 552 },
    { name: 'V🧸', wins: 24, pts: 552 },
    { name: 'VShtamm', wins: 42, pts: 552 },
    { name: 'Mystic•', wins: 31, pts: 551 },
    { name: 'devosem', wins: 51, pts: 547 },
    { name: 'Albatros', wins: 51, pts: 544 },
    { name: 'Suspiria :1', wins: 25, pts: 542 },
    { name: 'wensay', wins: 23, pts: 542 },
    { name: '[LC] Fedenit', wins: 27, pts: 542 },
    { name: 'Slomo', wins: 39, pts: 542 },
    { name: 'friq', wins: 20, pts: 541 },
    { name: 'kvn', wins: 53, pts: 537 },
    { name: 'northlxne', wins: 25, pts: 536 },
    { name: 'endru', wins: 76, pts: 534 },
    { name: 'S/A ❄', wins: 28, pts: 533 },
    { name: 'rocket', wins: 12, pts: 531 },
    { name: 'B e T r', wins: 18, pts: 530 },
    { name: '18kai', wins: 22, pts: 529 },
    { name: 'lyn', wins: 12, pts: 527 },
    { name: 'moon', wins: 15, pts: 526 },
    { name: 'Milliy', wins: 47, pts: 522 },
    { name: '1187169669111632005', wins: 29, pts: 522 },
    { name: 'Chief', wins: 28, pts: 522 },
    { name: 'clvr', wins: 41, pts: 521 },
    { name: 'babal1ngo)', wins: 44, pts: 521 },
    { name: '[LC] SILHスY', wins: 15, pts: 520 },
    { name: 'Mircht', wins: 12, pts: 519 },
  ]

  // Add Maznevich at the top with the best stats
  const maznevichWins = 99 + getSeededRandom(dailySeed, 1, 10)
  const maznevichPts = 999 + getSeededRandom(dailySeed, 1, 50)

  const ladderPlayers: LadderPlayer[] = [
    {
      rank: 1,
      name: 'Maznevich',
      wins: maznevichWins,
      pts: maznevichPts
    }
  ]

  // Add other players with daily seeded random variations
  players.forEach((player, index) => {
    const rank = index + 2
    const variationSeed = dailySeed + rank

    // Add small random variations to wins and points (±5%)
    const winsVariation = getSeededRandom(variationSeed, -Math.floor(player.wins * 0.05), Math.floor(player.wins * 0.05))
    const ptsVariation = getSeededRandom(variationSeed + 1000, -Math.floor(player.pts * 0.05), Math.floor(player.pts * 0.05))

    const adjustedWins = Math.max(1, player.wins + winsVariation)
    const adjustedPts = Math.max(100, player.pts + ptsVariation)

    ladderPlayers.push({
      rank,
      name: player.name,
      wins: adjustedWins,
      pts: adjustedPts
    })
  })

  return ladderPlayers
}

onMounted(() => {
  ladderData.value = generateLadderData()
})
</script>

<style scoped>
.ladder-page {
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

.ladder-container {
  background: rgba(15, 23, 42, 0.7);
  border-radius: 15px;
  border: 2px solid rgba(167, 139, 250, 0.2);
  margin-bottom: 40px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.ladder-header {
  display: grid;
  grid-template-columns: 80px 1fr 100px;
  padding: 20px 30px;
  background: rgba(167, 139, 250, 0.1);
  border-bottom: 2px solid rgba(167, 139, 250, 0.3);
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.rank-header, .player-header, .pts-header {
  display: flex;
  align-items: center;
}

.ladder-entries {
  /* Removed max-height and overflow to make it scroll with page */
}

.player-card {
  display: grid;
  grid-template-columns: 80px 1fr 100px;
  padding: 20px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  align-items: center;
}

.player-card:hover {
  background: rgba(167, 139, 250, 0.05);
}

.player-card.maznevich {
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(56, 189, 248, 0.1) 100%);
  border-left: 5px solid var(--primary);
  border-right: 5px solid var(--primary);
}

.player-rank {
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 1.5rem;
}

.player-card.maznevich .rank-number {
  color: var(--primary);
  text-shadow: 0 0 10px rgba(167, 139, 250, 0.5);
}

.player-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.player-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--light);
}

.player-wins {
  font-size: 0.9rem;
  color: var(--gray-light);
  opacity: 0.8;
}

.player-card.maznevich .player-name {
  color: var(--primary);
  text-shadow: 0 0 5px rgba(167, 139, 250, 0.3);
}

.player-card.maznevich .player-wins {
  color: var(--secondary);
}

.player-pts {
  display: flex;
  justify-content: flex-end;
}

.pts-value {
  font-family: var(--font-heading);
  font-weight: 500;
  color: var(--secondary);
}

.player-card.maznevich .pts-value {
  color: var(--primary);
  font-weight: 700;
}

.ladder-info {
  text-align: center;
  color: var(--gray-light);
  font-size: 0.9rem;
  margin-top: 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.ladder-info p {
  margin-bottom: 10px;
}

.ladder-info p:first-child {
  font-weight: 700;
  color: var(--primary);
  font-size: 1rem;
}

/* Removed scrollbar styling since ladder no longer scrolls independently */

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .ladder-header {
    grid-template-columns: 60px 1fr 80px;
    padding: 15px 20px;
    font-size: 0.9rem;
  }

  .player-card {
    grid-template-columns: 60px 1fr 80px;
    padding: 15px 20px;
  }

  .player-name {
    font-size: 1rem;
  }

  .player-wins {
    font-size: 0.8rem;
  }

  .pts-value {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .ladder-header {
    grid-template-columns: 50px 1fr 70px;
    padding: 10px 15px;
    font-size: 0.8rem;
  }

  .player-card {
    grid-template-columns: 50px 1fr 70px;
    padding: 12px 15px;
  }

  .player-rank {
    font-size: 1.2rem;
  }

  .player-name {
    font-size: 0.9rem;
  }

  .player-wins {
    font-size: 0.75rem;
  }
}
</style>
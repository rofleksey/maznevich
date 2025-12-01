<template>
  <div class="builds-page">
    <Header />
    <main>
      <div class="container">
        <h1 class="page-title">KILLER BUILDS</h1>
        <p class="page-subtitle">Maznevich's curated builds for maximum tournament performance</p>

        <div class="builds-grid">
          <div
              v-for="build in builds"
              :key="build.id"
              class="build-card"
          >
            <div class="build-header">
              <a
                  :href="build.wikiUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="build-title"
              >
                {{ build.name }}
              </a>
            </div>

            <div class="build-content">
              <div class="character-image">
                <a
                    :href="build.wikiUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img
                      :src="build.image"
                      :alt="build.name"
                      loading="lazy"
                  />
                </a>
              </div>

              <div class="build-items">
                <div class="perks-section">
                  <h3>PERKS</h3>
                  <div class="perks-grid">
                    <a
                        v-for="perk in build.perks"
                        :key="perk.name"
                        :href="perk.wikiUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="perk-item"
                        :title="perk.name"
                    >
                      <img
                          :src="perk.icon"
                          :alt="perk.name"
                          class="perk-icon"
                      />
                    </a>
                  </div>
                </div>

                <div class="addons-section">
                  <h3>ADDONS</h3>
                  <div class="addons-grid">
                    <a
                        v-for="addon in build.addons"
                        :key="addon.name"
                        :href="addon.wikiUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="addon-item"
                        :title="addon.name"
                    >
                      <img
                          :src="addon.icon"
                          :alt="addon.name"
                          class="addon-icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'
import type { Build } from '../types'

const builds = ref<Build[]>([
  {
    id: 'trapper',
    name: 'The Trapper',
    image: '/images/K01_TheTrapper_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Trapper',
    perks: [
      {
        name: "Unnerving Presence",
        icon: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia/images/b/bf/FulliconPerk_unnervingPresence.png",
        wikiUrl: "https://deadbydaylight.fandom.com/wiki/Unnerving_Presence"
      },
      {
        name: "Brutal Strength",
        icon: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia/images/e/ed/FulliconPerk_brutalStrength.png",
        wikiUrl: "https://deadbydaylight.fandom.com/wiki/Brutal_Strength"
      },
      {
        name: "Agitation",
        icon: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia/images/4/44/FulliconPerk_agitation.png",
        wikiUrl: "https://deadbydaylight.fandom.com/wiki/Agitation"
      },
      {
        name: "No One Escapes Death",
        icon: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia/images/8/8a/FulliconPerk_noOneEscapesDeath.png",
        wikiUrl: "https://deadbydaylight.fandom.com/wiki/No_One_Escapes_Death"
      }
    ],
    addons: [
      {
        name: "Trapper Bag",
        icon: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia/images/0/09/FulliconAddon_trapperBag.png",
        wikiUrl: "https://deadbydaylight.fandom.com/wiki/Trapper_Bag"
      },
      {
        name: "Coil Spring",
        icon: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia/images/4/4f/FulliconAddon_coilSpring.png",
        wikiUrl: "https://deadbydaylight.fandom.com/wiki/Coil_Spring"
      }
    ]
  }
  // Add more killers here following the same structure
])
</script>

<style scoped>
.builds-page {
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

.builds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 40px;
  padding-bottom: 80px;
}

.build-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(167, 139, 250, 0.2);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.build-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary);
  box-shadow: 0 15px 30px rgba(167, 139, 250, 0.3);
}

.build-header {
  background: rgba(167, 139, 250, 0.1);
  padding: 20px;
  border-bottom: 1px solid rgba(167, 139, 250, 0.2);
}

.build-title {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  color: var(--primary);
  text-decoration: none;
  display: block;
  text-align: center;
  transition: color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.build-title:hover {
  color: var(--secondary);
}

.build-content {
  display: flex;
  padding: 30px;
  gap: 30px;
}

.character-image {
  flex: 0 0 200px;
}

.character-image a {
  display: block;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid rgba(167, 139, 250, 0.3);
  transition: border-color 0.3s ease;
}

.character-image a:hover {
  border-color: var(--primary);
}

.character-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.character-image a:hover img {
  transform: scale(1.05);
}

.build-items {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.perks-section h3,
.addons-section h3 {
  font-family: var(--font-heading);
  color: var(--secondary);
  margin-bottom: 15px;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.perks-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.addons-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.perk-item,
.addon-item {
  display: block;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
}

.perk-item:hover,
.addon-item:hover {
  background: rgba(167, 139, 250, 0.1);
  border-color: var(--primary);
  transform: translateY(-5px);
}

.perk-icon,
.addon-icon {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .builds-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .build-content {
    flex-direction: column;
    padding: 20px;
  }

  .character-image {
    flex: 0 0 auto;
    max-width: 200px;
    margin: 0 auto;
  }

  .perks-grid,
  .addons-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
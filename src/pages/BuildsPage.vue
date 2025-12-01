<template>
  <div class="builds-page">
    <main>
      <div class="container">
        <h1 class="page-title">BUILDS</h1>
        <p class="page-subtitle">Maznevich's curated builds for maximum pub and tournament performance</p>

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

<!-- Update the builds array in the script setup section -->
<script setup lang="ts">
import Footer from '../components/Footer.vue'
import { ref } from 'vue'
import type { Build } from '../types'

const builds = ref<Build[]>([
  {
    id: 'ace',
    name: 'Ace Visconti',
    image: '/images/S07_AceVisconti_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.wiki.gg/wiki/Ace_Visconti',
    perks: [
      {
        name: "Decisive Strike",
        icon: "/images/IconPerks_decisiveStrike.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Decisive_Strike"
      },
      {
        name: "Dead Hard",
        icon: "/images/IconPerks_deadHard.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Dead_Hard"
      },
      {
        name: "Unbreakable",
        icon: "/images/IconPerks_unbreakable.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Unbreakable"
      },
      {
        name: "Shoulder the Burden",
        icon: "/images/IconPerks_shoulderTheBurden.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Shoulder_the_Burden"
      },
    ],
    addons: [
      {
        name: "Needle & Thread",
        icon: "/images/IconAddon_needleAndThread.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Needle_%26_Thread"
      },
      {
        name: "Surgical Suture",
        icon: "/images/IconAddon_surgicalSuture.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Surgical_Suture"
      }
    ]
  },
  {
    id: 'trapper',
    name: 'The Trapper',
    image: '/images/K01_TheTrapper_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Trapper',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'wraith',
    name: 'The Wraith',
    image: '/images/K02_TheWraith_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Wraith',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'hillbilly',
    name: 'The Hillbilly',
    image: '/images/K03_TheHillbilly_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Hillbilly',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'nurse',
    name: 'The Nurse',
    image: '/images/K04_TheNurse_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Nurse',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'shape',
    name: 'The Shape',
    image: '/images/K05_TheShape_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Shape',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'hag',
    name: 'The Hag',
    image: '/images/K06_TheHag_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Hag',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'doctor',
    name: 'The Doctor',
    image: '/images/K07_TheDoctor_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Doctor',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'huntress',
    name: 'The Huntress',
    image: '/images/K08_TheHuntress_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Huntress',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'cannibal',
    name: 'The Cannibal',
    image: '/images/K09_TheCannibal_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Cannibal',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'nightmare',
    name: 'The Nightmare',
    image: '/images/K10_TheNightmare_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Nightmare',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'pig',
    name: 'The Pig',
    image: '/images/K11_ThePig_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Pig',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'clown',
    name: 'The Clown',
    image: '/images/K12_TheClown_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Clown',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'spirit',
    name: 'The Spirit',
    image: '/images/K13_TheSpirit_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Spirit',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'legion',
    name: 'The Legion',
    image: '/images/K14_TheLegion_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Legion',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'plague',
    name: 'The Plague',
    image: '/images/K15_ThePlague_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Plague',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'ghostface',
    name: 'The Ghost Face',
    image: '/images/K16_TheGhostFace_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Ghost_Face',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'demogorgon',
    name: 'The Demogorgon',
    image: '/images/K17_TheDemogorgon_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Demogorgon',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'oni',
    name: 'The Oni',
    image: '/images/K18_TheOni_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Oni',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'deathslinger',
    name: 'The Deathslinger',
    image: '/images/K19_TheDeathslinger_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Deathslinger',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'executioner',
    name: 'The Executioner',
    image: '/images/K20_TheExecutioner_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Executioner',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'blight',
    name: 'The Blight',
    image: '/images/K21_TheBlight_Portrait.png',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Blight',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'twins',
    name: 'The Twins',
    image: '/images/K22_TheTwins_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Twins',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'trickster',
    name: 'The Trickster',
    image: '/images/K23_TheTrickster_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Trickster',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'nemesis',
    name: 'The Nemesis',
    image: '/images/K24_TheNemesis_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Nemesis',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'cenobite',
    name: 'The Cenobite',
    image: '/images/K25_TheCenobite_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Cenobite',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'artist',
    name: 'The Artist',
    image: '/images/K26_TheArtist_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Artist',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'onryo',
    name: 'The Onryo',
    image: '/images/K27_TheOnryo_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Onryō',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'dredge',
    name: 'The Dredge',
    image: '/images/K28_TheDredge_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Dredge',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'mastermind',
    name: 'The Mastermind',
    image: '/images/K29_TheMastermind_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Mastermind',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'knight',
    name: 'The Knight',
    image: '/images/K30_TheKnight_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Knight',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'skullmerchant',
    name: 'The Skull Merchant',
    image: '/images/K31_TheSkullMerchant_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Skull_Merchant',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'singularity',
    name: 'The Singularity',
    image: '/images/K32_TheSingularity_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Singularity',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'xenomorph',
    name: 'The Xenomorph',
    image: '/images/K33_TheXenomorph_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Xenomorph',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'goodguy',
    name: 'The Good Guy',
    image: '/images/K34_TheGoodGuy_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Good_Guy',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'unknown',
    name: 'The Unknown',
    image: '/images/K35_TheUnknown_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Unknown',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'lich',
    name: 'The Lich',
    image: '/images/K36_TheLich_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Lich',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'darklord',
    name: 'The Dark Lord',
    image: '/images/K37_TheDarkLord_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Dark_Lord',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'houndmaster',
    name: 'The Houndmaster',
    image: '/images/K38_TheHoundmaster_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Houndmaster',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'ghoul',
    name: 'The Ghoul',
    image: '/images/K39_TheGhoul_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Ghoul',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'animatronic',
    name: 'The Animatronic',
    image: '/images/K40_TheAnimatronic_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Animatronic',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  },
  {
    id: 'krasue',
    name: 'The Krasue',
    image: '/images/K41_TheKrasue_Portrait.webp',
    wikiUrl: 'https://deadbydaylight.fandom.com/wiki/The_Krasue',
    perks: [
      {
        name: "Corrupt Intervention",
        icon: "/images/IconPerks_corruptIntervention.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Corrupt_Intervention"
      },
      {
        name: "No Holds Barred (Deadlock)",
        icon: "/images/IconPerks_NoHoldsBarred.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Holds_Barred"
      },
      {
        name: "Hex: No One Escaped Death",
        icon: "/images/IconPerks_hexNoOneEscapesDeath.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Hex:_No_One_Escapes_Death"
      },
      {
        name: "No Way Out",
        icon: "/images/IconPerks_noWayOut.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/No_Way_Out"
      },
    ],
    addons: [
      {
        name: "Bloody Coil",
        icon: "/images/IconAddon_bloodyCoil.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Bloody_Coil"
      },
      {
        name: "Iridescent Stone",
        icon: "/images/IconAddon_iridescentStone.webp",
        wikiUrl: "https://deadbydaylight.wiki.gg/wiki/Iridescent_Stone"
      }
    ]
  }
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
  display: flex;
  gap: 15px;
}

.addons-grid {
  display: flex;
  gap: 15px;
}

.perk-item,
.addon-item {
  display: block;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  width: 64px;
  height: 64px;
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
  height: 100%;
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
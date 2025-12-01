<template>
  <footer>
    <div class="container">
      <div class="social-links">
        <a
            v-for="link in socialLinks"
            :key="link.platform"
            :href="link.url"
            :title="link.title"
            target="_blank"
            rel="noopener noreferrer"
        >
          <i :class="link.icon"></i>
        </a>
      </div>
      <p class="footer-text">The undisputed champion of Dead by Daylight. Trainer. Tournament dominator.</p>
      <p class="copyright">© 2025 Maznevich. All rights reserved. This is not an official Dead by Daylight website.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { SocialLink } from '../types'

const socialLinks = ref<SocialLink[]>([
  { platform: 'Steam', icon: 'fab fa-steam', url: 'https://steamcommunity.com/id/Maznevich', title: 'Steam' },
  { platform: 'Twitch', icon: 'fab fa-twitch', url: 'https://www.twitch.tv/maznevich', title: 'Twitch' },
  { platform: 'YouTube', icon: 'fab fa-youtube', url: 'https://www.youtube.com/@maznevich', title: 'YouTube' },
])
</script>

<style scoped>
footer {
  background: var(--dark);
  padding: 50px 0 30px;
  text-align: center;
  border-top: 2px solid var(--gray);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--gray);
  border-radius: 50%;
  color: white;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-links a:hover {
  background: var(--primary);
  transform: translateY(-5px);
}

.footer-text {
  color: var(--light);
  font-size: 1.1rem;
  margin-bottom: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.copyright {
  color: var(--gray-light);
  font-size: 0.9rem;
  margin-top: 20px;
}
</style>
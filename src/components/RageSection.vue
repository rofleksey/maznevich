<template>
  <section class="rage-section">
    <div class="container">
      <div class="rage-quote">
        <p>"They said I couldn't win every tournament. They said someone would eventually beat me. They were wrong. I am not just a player; I am the meta. I am the final boss of Dead by Daylight. Every 'pro' who faces me becomes just another number on my win streak."</p>
        <div class="author">- Maznevich</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.rage-section {
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(15, 23, 42, 0.95) 100%);
  padding: 80px 0;
  border-top: 3px solid var(--primary);
  border-bottom: 3px solid var(--primary);
}

.rage-quote {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--primary);
  position: relative;
}

.rage-quote::before, .rage-quote::after {
  content: '"';
  font-size: 5rem;
  color: var(--primary);
  opacity: 0.5;
  position: absolute;
}

.rage-quote::before {
  top: -10px;
  left: 20px;
}

.rage-quote::after {
  bottom: -40px;
  right: 20px;
}

.rage-quote p {
  font-size: 1.8rem;
  font-weight: 700;
  font-style: italic;
  color: var(--light);
  line-height: 1.4;
}

.rage-quote .author {
  margin-top: 30px;
  font-size: 1.5rem;
  color: var(--secondary);
  font-family: var(--font-heading);
}

@media (max-width: 768px) {
  .rage-quote p {
    font-size: 1.4rem;
  }
}
</style>
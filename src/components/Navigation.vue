<template>
  <nav class="main-nav">
    <router-link to="/" class="nav-link">
      <i class="fas fa-home"></i>
      <span>Home</span>
    </router-link>
    <router-link to="/tournaments" class="nav-link">
      <i class="fas fa-medal"></i>
      <span>Tournaments</span>
    </router-link>
    <router-link to="/ladder" class="nav-link">
      <i class="fas fa-chart-line"></i>
      <span>Ladder</span>
    </router-link>
    <router-link to="/builds" class="nav-link">
      <i class="fas fa-hammer"></i>
      <span>Builds</span>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.main-nav {
  display: flex;
  justify-content: center;
  gap: 15px; /* Reduced from 20px */
  margin: 0;
  padding: 12px 0; /* Reduced from 15px 0 */
  background: rgba(15, 23, 42, 0.95);
  border-bottom: 2px solid var(--primary);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 8px; /* Reduced from 10px */
  padding: 10px 20px; /* Reduced from 12px 24px */
  background: rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.3);
  border-radius: 6px; /* Reduced from 8px */
  color: var(--light);
  text-decoration: none;
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 0.9rem; /* Added font size reduction */
  text-transform: uppercase;
  letter-spacing: 0.5px; /* Reduced from 1px */
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(167, 139, 250, 0.2);
  border-color: var(--primary);
  transform: translateY(-2px); /* Reduced from -3px */
  box-shadow: 0 4px 12px rgba(167, 139, 250, 0.3); /* Reduced shadow */
}

.nav-link i {
  font-size: 1rem; /* Reduced from 1.1rem */
}

.nav-link.router-link-active {
  background: rgba(167, 139, 250, 0.3);
  border-color: var(--primary);
  box-shadow: 0 0 12px rgba(167, 139, 250, 0.5); /* Reduced from 15px */
}

/* Mobile styles */
@media (max-width: 768px) {
  .main-nav {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
    padding: 8px 5px; /* Reduced from 10px 5px */
  }

  .nav-link {
    width: auto;
    min-width: 45px; /* Reduced from 50px */
    height: 45px; /* Reduced from 50px */
    padding: 0;
    justify-content: center;
  }

  /* Hide text on mobile */
  .nav-link span {
    display: none;
  }

  /* Increase icon size for better touch targets */
  .nav-link i {
    font-size: 1.3rem; /* Reduced from 1.5rem */
    margin: 0;
  }

  /* Adjust gap for icon-only layout */
  .nav-link {
    gap: 0;
  }
}

/* Extra small screens optimization */
@media (max-width: 480px) {
  .nav-link {
    min-width: 40px; /* Reduced from 45px */
    height: 40px; /* Reduced from 45px */
  }

  .nav-link i {
    font-size: 1.2rem; /* Reduced from 1.3rem */
  }
}
</style>
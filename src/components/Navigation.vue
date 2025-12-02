<template>
  <nav class="main-nav">
    <router-link to="/" class="nav-link">
      <i class="fas fa-home"></i>
      <span>Home</span>
    </router-link>
    <router-link to="/tournaments" class="nav-link">
      <i class="fas fa-trophy"></i>
      <span>Tournaments</span>
    </router-link>
    <router-link to="/ladder" class="nav-link">
      <i class="fas fa-trophy"></i>
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
  gap: 20px;
  margin: 0;
  padding: 15px 0;
  background: rgba(15, 23, 42, 0.95);
  border-bottom: 2px solid var(--primary);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.3);
  border-radius: 8px;
  color: var(--light);
  text-decoration: none;
  font-family: var(--font-heading);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(167, 139, 250, 0.2);
  border-color: var(--primary);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(167, 139, 250, 0.3);
}

.nav-link i {
  font-size: 1.1rem;
}

.nav-link.router-link-active {
  background: rgba(167, 139, 250, 0.3);
  border-color: var(--primary);
  box-shadow: 0 0 15px rgba(167, 139, 250, 0.5);
}

/* Mobile styles */
@media (max-width: 768px) {
  .main-nav {
    flex-direction: row; /* Keep horizontal layout */
    justify-content: space-around; /* Distribute icons evenly */
    align-items: center;
    gap: 5px;
    padding: 10px 5px;
  }

  .nav-link {
    width: auto; /* Remove fixed width */
    min-width: 50px; /* Set minimum width for touch targets */
    height: 50px; /* Make it square */
    padding: 0; /* Remove padding */
    justify-content: center;
  }

  /* Hide text on mobile */
  .nav-link span {
    display: none;
  }

  /* Increase icon size for better touch targets */
  .nav-link i {
    font-size: 1.5rem;
    margin: 0; /* Remove any margin */
  }

  /* Adjust gap for icon-only layout */
  .nav-link {
    gap: 0;
  }
}

/* Extra small screens optimization */
@media (max-width: 480px) {
  .nav-link {
    min-width: 45px;
    height: 45px;
  }

  .nav-link i {
    font-size: 1.3rem;
  }
}
</style>
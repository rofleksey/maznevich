<template>
  <section id="dbd-academy">
    <div class="container">
      <div class="academy-content">
        <div class="academy-info">
          <h2 class="section-title">DBD ACADEMY</h2>
          <p class="academy-description">
            Founded by Maznevich himself, DBD Academy is the most elite training program in the Dead by Daylight community.
            With a proven track record of transforming aspiring players into tournament champions, our academy offers
            personalized coaching, advanced strategy sessions, and direct mentorship from the undisputed champion.
          </p>

          <div class="academy-features">
            <div class="feature">
              <i class="fas fa-user-graduate"></i>
              <h3>Personalized Training</h3>
              <p>One-on-one sessions tailored to your skill level and goals</p>
            </div>
            <div class="feature">
              <i class="fas fa-chart-line"></i>
              <h3>Advanced Analytics</h3>
              <p>In-depth gameplay analysis and performance tracking</p>
            </div>
            <div class="feature">
              <i class="fas fa-trophy"></i>
              <h3>Proven Results</h3>
              <p>666+ students trained with tournament success stories</p>
            </div>
          </div>

          <a
              href="https://academy.maznevich.pro"
              target="_blank"
              rel="noopener noreferrer"
              class="enroll-button"
          >
            <i class="fas fa-arrow-right"></i>
            Enroll in DBD Academy
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
#dbd-academy {
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(15, 23, 42, 0.95) 100%);
  border-top: 3px solid var(--secondary);
  border-bottom: 3px solid var(--secondary);
}

.academy-content {
  max-width: 1200px;
  margin: 0 auto;
}

.academy-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--light);
  margin-bottom: 50px;
  text-align: center;
  padding: 0 20px;
}

.academy-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.feature {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(167, 139, 250, 0.3);
  transition: all 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  box-shadow: 0 10px 20px rgba(167, 139, 250, 0.2);
}

.feature i {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 20px;
}

.feature h3 {
  font-size: 1.5rem;
  color: var(--secondary);
  margin-bottom: 15px;
  font-family: var(--font-heading);
}

.feature p {
  color: var(--gray-light);
  line-height: 1.6;
}

.enroll-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 18px 40px;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--light);
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 5px 15px rgba(167, 139, 250, 0.4);
  text-decoration: none;
  width: fit-content;
}

.enroll-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(167, 139, 250, 0.6);
  color: var(--light);
  text-decoration: none;
}

.enroll-button i {
  margin-right: 10px;
  transition: transform 0.3s ease;
}

.enroll-button:hover i {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .academy-features {
    grid-template-columns: 1fr;
  }

  .enroll-button {
    width: 100%;
    padding: 15px 20px;
    text-align: center;
    justify-content: center;
  }
}
</style>
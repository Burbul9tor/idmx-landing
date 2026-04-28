<template>
  <section class="solution" id="solution">
    <div class="container solution__inner">
      <div class="solution__head">
        <div class="solution__eyebrow">
          {{ t.solution.eyebrow }}
        </div>

        <h2 class="solution__title">
          {{ t.solution.title }}
        </h2>

        <p class="solution__subtitle">
          {{ t.solution.subtitle }}
        </p>
      </div>

      <div class="solution__grid">
        <article
          v-for="(item, index) in cards"
          :key="item.title"
          class="solution-card"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <div class="solution-card__icon">
            <img :src="item.icon" :alt="item.title" loading="lazy"
                decoding="async" />
          </div>

          <h3 class="solution-card__title">
            {{ item.title }}
          </h3>

          <p class="solution-card__description">
            {{ item.description }}
          </p>
        </article>
      </div>

      <div class="solution-result">
        <div class="solution-result__eyebrow">
          {{ t.solution.resultLabel }}
        </div>

        <p class="solution-result__text">
          {{ t.solution.resultText }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../../composables/useLocale'

import singleIcon from '../../assets/solution/single-system.png'
import matrixIcon from '../../assets/solution/matrix-control.png'
import autoIcon from '../../assets/solution/auto-access.png'
import auditIcon from '../../assets/solution/control.png'

const { t } = useLocale()

const icons = [singleIcon, matrixIcon, autoIcon, auditIcon]

const cards = computed(() =>
  t.value.solution.cards.map((item, index) => ({
    title: item.title,
    description: item.description,
    icon: icons[index],
  }))
)
</script>

<style scoped>
.solution {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  background: var(--background-dark);
  border-top: 1px solid rgba(0, 157, 255, 0.12);
}

.solution__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.solution__head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.solution__eyebrow {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;

  font-size: var(--font-size-eyebrow);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  color: var(--white);
}

.solution__eyebrow::after {
  content: '';
  position: absolute;
  left: 0; 
  bottom: -10px;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: var(--color-primary);
}
.solution-card__icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 90px;
  height: 90px;

  margin-bottom: 18px;
}

.solution-card__icon::after {
  content: '';
  position: absolute;

  width: 86px;
  height: 86px;

  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(1, 157, 255, 0.18),
    transparent 70%
  );

  filter: blur(18px);
  opacity: 0.7;
  z-index: 0;

  animation: solutionGlowPulse 4s ease-in-out infinite;
}

.solution-card__icon img {
  position: relative;
  z-index: 1;

  max-width: 90px;
  max-height: 90px;

  animation: solutionIconFloat 5s ease-in-out infinite;
}
.solution__title {
  margin: 0 0 18px;
  max-width: 1100px;
  color: var(--white);
  font-size: var(--font-size-title);
  font-weight: 800;
  line-height: 1.08;
}

.solution__subtitle {
  margin: 0;
  max-width: 960px;
  color: rgba(220, 236, 255, 0.72);
  font-size: var(--font-size-subtitle);
  line-height: 1.55;
}

.solution__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.solution-card {
  min-height: 240px;
  padding: 34px 36px;
  border-radius: 24px;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(220, 236, 255, 0.1);
  box-shadow: var(--shadow-card);

  opacity: 0;
  transform: translateY(22px);
  animation: solutionCardReveal 0.7s ease forwards;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.solution-card:hover {
  transform: translateY(-4px);
  border-color: rgba(1, 157, 255, 0.22);
  box-shadow: var(--shadow-card-hover);
  cursor: pointer;
}

.solution-card__title {
  margin: 0 0 14px;
  max-width: 100%;
  color: var(--white);
  font-size: var(--font-size-card-title);
  font-weight: 700;
  line-height: 1.22;
  letter-spacing: -0.01em;
}

.solution-card__description {
  margin: 0;
  max-width: 100%;
  color: rgba(220, 236, 255, 0.72);
  font-size: 15px;
  line-height: 1.55;
}

.solution-result {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  padding: 28px 32px;
  border-radius: 24px;

  background: rgba(28, 204, 108, 0.08);
  border: 1px solid rgba(28, 204, 108, 0.14);
  border-left: 4px solid var(--color-green, #22c55e);

  text-align: left;
}

.solution-result__eyebrow {
  margin: 0;
  color: var(--color-green, #22c55e);
  font-size: 13px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.solution-result__text {
  margin: 0;
  color: var(--white);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.55;
}

@keyframes solutionCardReveal {
  from {
    opacity: 0;
    transform: translateY(22px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .solution__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .solution {
    padding: 72px 0;
  }

  .solution__inner {
    gap: 32px;
  }

  .solution__eyebrow {
    margin-bottom: 18px;
    font-size: 12px;
    line-height: 1.2;
  }

  .solution__title {
    margin-bottom: 12px;
    max-width: 100%;
    font-size: 36px;
    line-height: 1.08;
    letter-spacing: -0.03em;
  }

  .solution__subtitle {
    max-width: 100%;
    font-size: 16px;
    line-height: 1.55;
  }

  .solution-card {
    min-height: auto;
    padding: 28px 24px;
    border-radius: 20px;
  }

  .solution-card__number {
    margin-bottom: 18px;
  }

  .solution-card__title {
    font-size: 22px;
    line-height: 1.25;
  }

  .solution-card__description {
    font-size: 16px;
    line-height: 1.5;
  }

  .solution-result {
    padding: 24px 20px;
    border-radius: 20px;
  }

  .solution-result__eyebrow {
    white-space: normal;
  }

  .solution-result__text {
    font-size: 16px;
    line-height: 1.5;
  }
}
</style>
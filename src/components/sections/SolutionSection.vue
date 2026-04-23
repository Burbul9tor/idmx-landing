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
          :class="item.size"
          :style="{ animationDelay: `${index * 0.08}s` }"
        > 
          <div class="solution-card__icon">
            <img :src="item.icon" :alt="item.title" />
          </div>

          <h3 class="solution-card__title">
            {{ item.title }}
          </h3>
        </article>
      </div>

      <div class="solution__result">
        <div class="solution__eyebrow solution__eyebrow--result">
          {{ t.solution.resultLabel }}
        </div>

        <p class="solution__result-text">
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

const icons = [singleIcon, matrixIcon, autoIcon, auditIcon] as const

const cards = computed(() =>
  t.value.solution.cards.map((item, index) => ({
    ...item,
    icon: icons[index],
  }))
)
</script>

<style scoped>
.solution {
  position: relative;
  padding: 60px 0;
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 20%, rgba(119, 203, 255, 0.16), transparent 34%),
    radial-gradient(circle at 80% 25%, rgba(1, 157, 255, 0.10), transparent 30%),
    radial-gradient(circle at 50% 100%, rgba(220, 241, 255, 0.55), transparent 42%),
    linear-gradient(180deg, #f7fbff 0%, #eef7ff 100%);
    border-top: 1px solid var(--color-primary);
}

.solution::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.44), transparent 35%),
    linear-gradient(315deg, rgba(255, 255, 255, 0.28), transparent 40%);
  pointer-events: none;
}

.solution__inner {
  position: relative;
  z-index: 1;
}

.solution__head {
  max-width: 1080px;
  margin: 0 auto 56px;
  text-align: center;
}

.solution__eyebrow {
  position: relative;
  display: inline-flex;
  justify-content: center;
  margin-bottom: 20px;
  color: #1c1f24;
  font-size: var(--font-size-problems-eyebrow);
  font-weight: var(--font-weight-problems-eyebrow);
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.solution__eyebrow::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 76px;
  height: 2px;
  border-radius: 999px;
  background: #019dff;
  transform: translateX(-50%);
}

.solution__title {
  margin: 0 0 18px;
  color: #1c1f24;
  font-size: var(--font-size-problems-title);
  font-weight: var(--font-weight-problems-title);
  line-height: var(--line-height-problems-title);
  letter-spacing: -0.02em;
}

.solution__subtitle {
  max-width: 1120px;
  margin: 0 auto;
  color: #4f6b85;
  font-size: var(--font-size-problems-subtitle);
  font-weight: var(--font-weight-problems-subtitle);
  line-height: var(--line-height-problems-subtitle);
}

.solution__grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
  margin-bottom: 28px;
}

.solution-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
  padding: 34px 28px 26px;
  border: 1px solid rgba(1, 157, 255, 0.08);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow:
    0 10px 30px rgba(16, 55, 92, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  text-align: center;
  opacity: 0;
  transform: translateY(22px);
  animation: solutionCardReveal 0.7s ease forwards;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.solution-card:hover {
  transform: translateY(-4px);
  border-color: rgba(1, 157, 255, 0.16);
  box-shadow:
    0 18px 40px rgba(16, 55, 92, 0.10),
    inset 0 1px 0 rgba(255, 255, 255, 0.82);
}

.solution-card--small {
  grid-column: span 4;
}

.solution-card--wide {
  grid-column: span 8;
}

.solution-card__icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 108px;
  margin-bottom: 20px;
}

.solution-card__icon::after {
  content: '';
  position: absolute;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(1, 157, 255, 0.14) 0%,
    transparent 70%
  );
  filter: blur(22px);
  opacity: 0.6;
  z-index: 0;
  animation: solutionGlowPulse 4s ease-in-out infinite;
}

.solution-card__icon img {
  position: relative;
  z-index: 1;
  display: block;
  max-width: 180px;
  max-height: 110px;
  width: auto;
  height: auto;
  object-fit: contain;
  animation: solutionIconFloat 5s ease-in-out infinite;
  will-change: transform;
}

.solution-card:nth-child(1) .solution-card__icon img {
  animation-delay: 0s;
}

.solution-card:nth-child(2) .solution-card__icon img {
  animation-delay: 0.8s;
}

.solution-card:nth-child(3) .solution-card__icon img {
  animation-delay: 0.4s;
}

.solution-card:nth-child(4) .solution-card__icon img {
  animation-delay: 1.2s;
}

.solution-card__title {
  margin: 0;
  text-align: center;
  color: #0f416a;
  font-size: var(--font-size-problems-card);
  font-weight: var(--font-weight-problems-card);
  line-height: var(--line-height-problems-card);
}

.solution__result {
  padding: 24px 28px 28px;
  border: 1px solid rgba(1, 157, 255, 0.08);
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow:
    0 10px 28px rgba(16, 55, 92, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  text-align: center;
}

.solution__eyebrow--result {
  margin-bottom: 18px;
}

.solution__result-text {
  margin: 0;
  color: #0f416a;
  font-size: var(--font-size-problems-result);
  font-weight: var(--font-weight-problems-result);
  line-height: var(--line-height-problems-result);
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

@keyframes solutionIconFloat {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-5px);
  }
}

@keyframes solutionGlowPulse {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.15);
    opacity: 0.85;
  }

  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}

@media (max-width: 1100px) {
  .solution-card--small,
  .solution-card--wide {
    grid-column: span 6;
  }
}

@media (max-width: 768px) {
  .solution {
    padding: 88px 0;
  }

  .solution__grid {
    grid-template-columns: 1fr;
  }

  .solution-card--small,
  .solution-card--wide {
    grid-column: auto;
  }

  .solution-card {
    min-height: 200px;
    padding: 28px 22px 22px;
    border-radius: 22px;
  }

  .solution__result {
    padding: 22px 20px 24px;
    border-radius: 22px;
  }

  .solution__result-text {
    font-size: var(--font-size-problems-result);
  }
}
</style>
<template>
  <section class="problems" id="problems">
    <div class="container problems__inner">
      <div class="problems__head">
        <div class="problems__eyebrow">
          {{ t.problems.eyebrow }}
        </div>

        <h2 class="problems__title">
          {{ t.problems.title }}
        </h2>

        <p class="problems__subtitle">
          {{ t.problems.subtitle }}
        </p>
      </div>

      <div class="problems__grid problems__grid--top">
        <article
          v-for="(item, index) in topCards"
          :key="item.title"
          class="problem-card problem-card--wide"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <div class="problem-card__icon problem-card__icon--large">
            <img :src="item.icon" :alt="item.title" />
          </div>

          <h3 class="problem-card__title">
            {{ item.title }}
          </h3>
        </article>
      </div>

      <div class="problems__grid problems__grid--bottom">
        <article
          v-for="(item, index) in bottomCards"
          :key="item.title"
          class="problem-card"
          :style="{ animationDelay: `${0.16 + index * 0.08}s` }"
        >
          <div class="problem-card__icon">
            <img :src="item.icon" :alt="item.title" />
          </div>

          <h3 class="problem-card__title">
            {{ item.title }}
          </h3>
        </article>
      </div>

      <div class="problems-result">
        <div class="problems-result__eyebrow">
          {{ t.problems.resultLabel }}
        </div>

        <p class="problems-result__text">
          {{ t.problems.resultText }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../../composables/useLocale'

import problemMail from '../../assets/problems/problem-mail.png'
import problemAccess from '../../assets/problems/problem-access.png'
import problemTime from '../../assets/problems/problem-time.png'
import problemAudit from '../../assets/problems/problem-audit.png'
import problemExcel from '../../assets/problems/problem-excel.png'
import problemVisibility from '../../assets/problems/problem-visibility.png'

const { t } = useLocale()

const topIcons = [problemMail, problemAccess]
const bottomIcons = [
  problemTime,
  problemAudit,
  problemExcel,
  problemVisibility,
]

const topCards = computed(() =>
  t.value.problems.topCards.map((item, index) => ({
    title: item.title,
    icon: topIcons[index],
  }))
)

const bottomCards = computed(() =>
  t.value.problems.bottomCards.map((item, index) => ({
    title: item.title,
    icon: bottomIcons[index],
  }))
)
</script>

<style scoped>
.problems {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  
  background:
    radial-gradient(
      80% 80% at 50% 20%,
      rgba(18, 44, 96, 0.28) 0%,
      rgba(10, 18, 40, 0) 60%
    );
    border-top: 1px solid var(--color-problems-accent);
    
}

.problems::before,
.problems::after {
  content: '';
  position: absolute;
  inset: auto;
  pointer-events: none;
  z-index: 0;
}

.problems::before {
  top: -140px;
  right: -120px;
  width: 620px;
  height: 620px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 98, 55, 0.26) 0%,
    rgba(255, 98, 55, 0.12) 28%,
    rgba(255, 98, 55, 0.04) 52%,
    transparent 72%
  );
  filter: blur(30px);
  opacity: 0.95;
}

.problems::after {
  left: -180px;
  bottom: -220px;
  width: 760px;
  height: 760px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(1, 157, 255, 0.22) 0%,
    rgba(1, 157, 255, 0.1) 34%,
    rgba(1, 157, 255, 0.03) 56%,
    transparent 74%
  );
  filter: blur(42px);
}

.problems__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.problems__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.problems__eyebrow,
.problems-result__eyebrow {
  position: relative;
  display: inline-flex;
  justify-content: center;
  margin-bottom: 20px;
  color: rgba(220, 236, 255, 0.72);
  font-size: var(--font-size-problems-eyebrow);
  font-weight: var(--font-weight-problems-eyebrow);
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.problems__eyebrow::after,
.problems-result__eyebrow::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -8px;
  width: 118px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255, 112, 74, 0.9), rgba(255, 82, 82, 0.9));
  transform: translateX(-50%);
}

.problems__title {
  margin: 0 0 14px;
  max-width: 980px;
  color: #f3f7ff;
  font-size: var(--font-size-problems-title);
  font-weight: var(--font-weight-problems-title);
  line-height: var(--line-height-problems-title);
  letter-spacing: -0.02em;
}

.problems__subtitle {
  margin: 0;
  max-width: 1000px;
  color: rgba(220, 236, 255, 0.72);
  font-size: var(--font-size-problems-subtitle);
  font-weight: var(--font-weight-problems-subtitle);
  line-height: var(--line-height-problems-subtitle);
}

.problems__grid {
  display: grid;
  gap: 24px;
}

.problems__grid--top {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.problems__grid--bottom {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.problem-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 196px;
  padding: 28px 24px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(12, 23, 47, 0.78) 0%, rgba(15, 29, 58, 0.66) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 48px rgba(2, 8, 23, 0.42);
  backdrop-filter: blur(18px);
  text-align: center;
  opacity: 0;
  transform: translateY(22px);
  animation: problemCardReveal 0.7s ease forwards;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.problem-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 56px rgba(5, 12, 30, 0.52);
  border-color: rgba(255, 255, 255, 0.16);
}

.problem-card--wide {
  min-height: 228px;
}

.problem-card__icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 84px;
  margin-bottom: 22px;
}

.problem-card__icon::after {
  content: '';
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    var(--color-problem-glow) 0%,
    transparent 70%
  );
  filter: blur(20px);
  opacity: 0.6;
  z-index: 0;
  animation: problemGlowPulse 4s ease-in-out infinite;
}

.problem-card__icon img {
  position: relative;
  z-index: 1;
  display: block;
  width: auto;
  height: auto;
  max-width: 96px;
  max-height: 84px;
  animation: problemIconFloat 5s ease-in-out infinite;
  will-change: transform;
}

.problem-card__icon--large {
  width: 140px;
  height: 112px;
  margin-bottom: 26px;
}

.problem-card__icon--large::after {
  width: 120px;
  height: 120px;
  filter: blur(28px);
  opacity: 0.75;
}

.problem-card__icon--large img {
  max-width: 140px;
  max-height: 112px;
}

.problems__grid--top .problem-card:nth-child(1) .problem-card__icon img {
  animation-delay: 0s;
}

.problems__grid--top .problem-card:nth-child(2) .problem-card__icon img {
  animation-delay: 0.8s;
}

.problems__grid--bottom .problem-card:nth-child(1) .problem-card__icon img {
  animation-delay: 0.2s;
}

.problems__grid--bottom .problem-card:nth-child(2) .problem-card__icon img {
  animation-delay: 1s;
}

.problems__grid--bottom .problem-card:nth-child(3) .problem-card__icon img {
  animation-delay: 0.5s;
}

.problems__grid--bottom .problem-card:nth-child(4) .problem-card__icon img {
  animation-delay: 1.3s;
}

.problem-card__title {
  margin: 0;
  max-width: 260px;
  color: #f4f7ff;
  font-size: var(--font-size-problems-card);
  font-weight: var(--font-weight-problems-card);
  line-height: var(--line-height-problems-card);
}

.problems-result {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 88px;
  padding: 24px 32px 20px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(12, 23, 47, 0.78) 0%, rgba(15, 29, 58, 0.66) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 48px rgba(2, 8, 23, 0.42);
  backdrop-filter: blur(18px);
  text-align: center;
}

.problems-result__eyebrow {
  margin-bottom: 18px;
}

.problems-result__text {
  margin: 0;
  color: rgba(240, 246, 255, 0.88);
  font-size: var(--font-size-problems-result);
  font-weight: var(--font-weight-problems-result);
  line-height: var(--line-height-problems-result);
}

.problem-card::before,
.problems-result::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0));
  opacity: 0.55;
}

.problem-card::after {
  content: '';
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: -1px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
  pointer-events: none;
}


@keyframes problemCardReveal {
  from {
    opacity: 0;
    transform: translateY(22px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes problemIconFloat {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-5px);
  }
}

@keyframes problemGlowPulse {
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

@media (max-width: 1024px) {
  .problems__grid--bottom {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .problems {
    padding: 72px 0;
  }

  .problems::before {
    top: -120px;
    right: -180px;
    width: 420px;
    height: 420px;
  }

  .problems::after {
    left: -180px;
    bottom: -160px;
    width: 460px;
    height: 460px;
  }

  .problems__grid--top,
  .problems__grid--bottom {
    grid-template-columns: 1fr;
  }

  .problem-card,
  .problem-card--wide {
    min-height: 180px;
    border-radius: 20px;
  }

  .problem-card__icon--large {
    width: 112px;
    height: 92px;
    margin-bottom: 22px;
  }

  .problem-card__icon--large img {
    max-width: 112px;
    max-height: 92px;
  }

  .problems-result {
    border-radius: 20px;
  }
}
</style>
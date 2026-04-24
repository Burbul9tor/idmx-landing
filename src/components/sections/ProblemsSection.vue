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

      <!-- TOP -->
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

          <p class="problem-card__description">
            {{ item.description }}
          </p>
        </article>
      </div>

      <!-- BOTTOM -->
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

          <p class="problem-card__description">
            {{ item.description }}
          </p>
        </article>
      </div>

      <!-- RESULT -->
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
    description: item.description,
    icon: topIcons[index],
  }))
)

const bottomCards = computed(() =>
  t.value.problems.bottomCards.map((item, index) => ({
    title: item.title,
    description: item.description,
    icon: bottomIcons[index],
  }))
)
</script>

<style scoped>
.problems {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  background: var(--background-block);
  border-top: 1px solid rgba(0, 157, 255, 0.12);
}

.problems__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.problems__eyebrow {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;

  font-size: var(--font-size-eyebrow);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  color: var(--color-text);
}

.problems__eyebrow::after {
  content: '';
  position: absolute;
  left: 0; 
  bottom: -10px;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: var(--color-red);
}
/* HEAD */
.problems__head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.problems__title {
  margin: 0 0 14px;
  max-width: 1240px;
  font-size: var(--font-size-title);
  font-weight: 800;
  color: var(--color-text);
}

.problems__subtitle {
  margin: 0;
  max-width: 1240px;
  color: var(--color-subtitle);
  font-size: var(--font-size-subtitle);
}

/* GRID */
.problems__grid {
  display: grid;
  gap: 24px;
}

.problems__grid--top {
  grid-template-columns: repeat(2, 1fr);
}

.problems__grid--bottom {
  grid-template-columns: repeat(4, 1fr);
}

/* CARD */
.problem-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start;
  text-align: left; 
  min-height: 196px;
  padding: 28px 28px;
  border-radius: 24px;
  background: var(--white);
  border: 1px solid var(--color-border);
  box-shadow:  var(--shadow-card);
  opacity: 0;
  transform: translateY(22px);
  animation: problemCardReveal 0.7s ease forwards;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.problem-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
  cursor: pointer;
}

.problem-card--wide {
  min-height: 228px;
}

/* ICON */
.problem-card__icon {
  align-self: flex-start;
  width: 90px;
  height: 90px;
  margin-bottom: 18px;
}

/* TEXT */
.problem-card__title {
  margin: 0 0 10px;
  max-width: 100%;
  color: var(--color-text);
  font-size: var(--font-size-card-title);
  font-weight: 600;
  line-height: 1.3;
}

.problem-card__description {
  margin: 0;
  max-width: 100%;
  color: var(--color-subtitle);
  font-size: 15px;
  line-height: 1.5;
}

/* RESULT */
.problems-result {
  display: flex;
  flex-direction: column; /* 🔥 ключевое */
  align-items: flex-start;
  gap: 10px;
  padding: 28px 32px;
  border-radius: 24px;
  background: var(--white);
  border: 1px solid rgba(255, 98, 55, 0.16);
  border-left: 4px solid var(--color-red);
  text-align: left;
}

.problems-result__eyebrow {
  margin: 0;
  color: var(--color-red);
  font-size: 13px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.problems-result__eyebrow::after {
  display: none;
}

.problems-result__text {
  margin: 0;
  color: var(--color-text);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.55;
}

/* ANIM */
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

/* RESPONSIVE */
@media (max-width: 1024px) {
  .problems__grid--bottom {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .problems {
    padding: 72px 0;
  }

  .problems__inner {
    gap: 24px;
  }

  .problems__eyebrow {
    margin-bottom: 18px;
    font-size: 12px;
    line-height: 1.2;
  }

  .problems__eyebrow::after {
    bottom: -8px;
    height: 2px;
  }

  .problems__title {
    margin-bottom: 12px;
    max-width: 100%;
    font-size: 36px;
    line-height: 1.08;
    letter-spacing: -0.03em;
  }

  .problems__subtitle {
    max-width: 100%;
    font-size: 16px;
    line-height: 1.55;
  }

  .problems__grid--top,
  .problems__grid--bottom {
    grid-template-columns: 1fr;
  }

  .problem-card,
  .problem-card--wide {
    min-height: auto;
    padding: 24px 20px;
    border-radius: 20px;
  }

  .problem-card__icon {
    width: 72px;
    height: 72px;
    margin-bottom: 16px;
  }

  .problem-card__title {
    font-size: 18px;
    line-height: 1.25;
  }

  .problem-card__description {
    font-size: 15px;
    line-height: 1.5;
  }

  .problems-result {
    padding: 24px 20px;
    border-radius: 20px;
  }

  .problems-result__eyebrow {
    white-space: normal;
  }

  .problems-result__text {
    font-size: 16px;
    line-height: 1.5;
  }
}
</style>
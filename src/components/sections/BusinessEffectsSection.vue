<template>
  <section class="effects" id="effects">
    <div class="container effects__inner">
      <div class="effects__head">
        <div class="effects__eyebrow">
          {{ t.businessEffects.eyebrow }}
        </div>

        <h2 class="effects__title">
          {{ t.businessEffects.title }}
        </h2>

        <p class="effects__subtitle">
          {{ t.businessEffects.subtitle }}
        </p>
      </div>

      <div class="effects__grid">
        <article class="effect-card effect-card--highlight">
          <div class="effect-card__highlight-value">
            {{ t.businessEffects.hero.value }}
          </div>

          <div class="effect-card__highlight-unit">
            млн ₸
          </div>

          <p class="effect-card__highlight-text">
            {{ t.businessEffects.hero.text }}
          </p>
        </article>

        <article
          v-for="item in t.businessEffects.items"
          :key="item.title"
          class="effect-card"
        >
          <div class="effect-card__icon">
            <img :src="getIcon(item.icon)" :alt="item.title" />
          </div>

          <h3 class="effect-card__title">
            {{ item.title }}
          </h3>

          <p class="effect-card__text">
            {{ item.text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocale } from '../../composables/useLocale'

import loadIcon from '../../assets/effects/effect-load.png'
import humanIcon from '../../assets/effects/effect-human.png'
import processIcon from '../../assets/effects/effect-process.png'
import auditIcon from '../../assets/effects/effect-audit.png'

const { t } = useLocale()

const iconMap: Record<string, string> = {
  load: loadIcon,
  human: humanIcon,
  process: processIcon,
  audit: auditIcon,
}

const getIcon = (icon: string) => iconMap[icon] || loadIcon
</script>

<style scoped>
.effects {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  background: var(--background-block);
  border-top: 1px solid rgba(0, 157, 255, 0.12);
}

.effects__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.effects__head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.effects__eyebrow {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  color: var(--color-text);
  font-size: var(--font-size-eyebrow);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.effects__eyebrow::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: var(--color-primary);
}

.effects__title {
  margin: 0 0 14px;
  max-width: 900px;
  color: var(--color-text);
  font-size: var(--font-size-title);
  font-weight: 800;
  line-height: 1.08;
}

.effects__subtitle {
  margin: 0;
  max-width: 800px;
  color: var(--color-subtitle);
  font-size: var(--font-size-subtitle);
  line-height: 1.55;
}

.effects__grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr 1fr;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;
}

.effect-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 228px;
  padding: 28px;
  border-radius: 24px;
  background: var(--white);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
  text-align: left;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.effect-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
  cursor: pointer;
}

.effect-card--highlight {
  grid-row: span 2;
  justify-content: center;
  align-items: center;
  padding: 40px 36px;
  background: linear-gradient(180deg, #1ca7e8 0%, #0785d2 100%);
  border-color: rgba(0, 157, 255, 0.16);
  color: var(--white);
  text-align: center;
}

.effect-card__highlight-value {
  margin-bottom: 28px;
  color: var(--white);
  font-size: clamp(64px, 7vw, 92px);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.06em;
}

.effect-card__highlight-unit {
  margin-bottom: 18px;
  color: var(--white);
  font-size: 28px;
  font-weight: 800;
  line-height: 1.1;
}

.effect-card__highlight-text {
  margin: 0;
  max-width: 260px;
  color: rgba(255, 255, 255, 0.88);
  font-size: 17px;
  font-weight: 600;
  line-height: 1.45;
}

.effect-card__icon {
  align-self: flex-start;
  width: 64px;
  height: 64px;
  margin-bottom: 18px;
}

.effect-card__icon img {
  display: block;
  width: auto;
  height: auto;
    max-width: 64px;
  max-height: 64px;
  object-fit: contain;
}

.effect-card__title {
  margin: 0 0 14px;
  max-width: 100%;
  color: var(--color-text);
  font-size: var(--font-size-card-title);
  font-weight: 600;
  line-height: 1.3;
}

.effect-card__text {
  margin: 0;
  max-width: 100%;
  color: var(--color-subtitle);
  font-size: 15px;
  line-height: 1.5;
}

@media (max-width: 1180px) {
  .effects__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .effect-card--highlight {
    grid-row: span 1;
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .effects {
    padding: 72px 0;
  }

  .effects__inner {
    gap: 32px;
  }

  .effects__eyebrow {
    margin-bottom: 18px;
    font-size: 12px;
    line-height: 1.2;
  }

  .effects__title {
    margin-bottom: 12px;
    max-width: 100%;
    font-size: 36px;
    line-height: 1.08;
    letter-spacing: -0.03em;
  }

  .effects__subtitle {
    max-width: 100%;
    font-size: 16px;
    line-height: 1.55;
  }

  .effects__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .effect-card,
  .effect-card--highlight {
    grid-row: auto;
    grid-column: auto;
    min-height: auto;
    padding: 24px 20px;
    border-radius: 20px;
  }

  .effect-card--highlight {
    align-items: flex-start;
    text-align: left;
  }

  .effect-card__highlight-value {
    margin-bottom: 18px;
    font-size: 64px;
  }

  .effect-card__highlight-unit {
    margin-bottom: 12px;
    font-size: 24px;
  }

  .effect-card__highlight-text {
    max-width: 100%;
    font-size: 16px;
  }

  .effect-card__icon {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }
}
</style>
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

      <div
        class="effects__hero"
        :style="{ '--effects-clouds': `url(${cloudsBg})` }"
      >
        <div class="effects__hero-inner">
          <div class="effects__hero-icon">
            <img :src="heroIcon" :alt="t.businessEffects.hero.value" />
          </div>

          <div class="effects__hero-content">
            <div class="effects__hero-value">
              {{ t.businessEffects.hero.value }}
            </div>

            <div class="effects__hero-text">
              {{ t.businessEffects.hero.text }}
            </div>
          </div>
        </div>
      </div>

      <div class="effects__grid">
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

import heroIcon from '../../assets/effects/effect-main.png'
import loadIcon from '../../assets/effects/effect-load.png'
import humanIcon from '../../assets/effects/effect-human.png'
import processIcon from '../../assets/effects/effect-process.png'
import auditIcon from '../../assets/effects/effect-audit.png'
import cloudsBg from '../../assets/business/clouds.png'

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
  padding: 120px 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(119, 203, 255, 0.16), transparent 34%),
    radial-gradient(circle at 80% 25%, rgba(1, 157, 255, 0.10), transparent 30%),
    radial-gradient(circle at 50% 100%, rgba(220, 241, 255, 0.55), transparent 42%),
    linear-gradient(180deg, #f7fbff 0%, #eef7ff 100%);
}

.effects__inner {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.effects__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.effects__eyebrow {
  position: relative;
  display: inline-flex;
  justify-content: center;
  margin-bottom: 20px;
  color: #2b2f36;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.effects__eyebrow::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -8px;
  width: 112px;
  height: 2px;
  border-radius: 999px;
  background: #2ea6ff;
  transform: translateX(-50%);
}

.effects__title {
  margin: 0 0 14px;
  max-width: 980px;
  color: #22252d;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.effects__subtitle {
  margin: 0;
  max-width: 860px;
  color: #66788a;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
}

.effects__hero {
  position: relative;
  min-height: 260px;
  border-radius: 28px;
  border: 1px solid rgba(46, 166, 255, 0.12);
  background:
    radial-gradient(circle at 18% 28%, rgba(194, 232, 255, 0.7), transparent 36%),
    radial-gradient(circle at 78% 20%, rgba(255, 255, 255, 0.92), transparent 30%),
    linear-gradient(135deg, #dff1ff 0%, #f4faff 56%, #edf7ff 100%);
  box-shadow: 0 18px 50px rgba(28, 31, 36, 0.05);
  overflow: hidden;
}

.effects__hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.18);
  pointer-events: none;
}

.effects__hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--effects-clouds) no-repeat center;
  background-size: cover;
  opacity: 0.1;
  pointer-events: none;
}

.effects__hero-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  min-height: 260px;
  padding: 40px 48px;
}

.effects__hero-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}

.effects__hero-icon img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.effects__hero-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.effects__hero-value {
  color: #22252d;
  font-size: 56px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.03em;
}

.effects__hero-text {
  color: #244b70;
  font-size: 22px;
  font-weight: 400;
  line-height: 1.35;
}

.effects__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.effect-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 24px;
  border: 1px solid rgba(46, 166, 255, 0.12);
  background: rgba(238, 247, 255, 0.85);
  box-shadow: 0 10px 30px rgba(28, 31, 36, 0.04);
  padding: 28px 22px;
  min-height: 230px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.effect-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(28, 31, 36, 0.08);
  border-color: rgba(46, 166, 255, 0.24);
}

.effect-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  margin-bottom: 18px;
}

.effect-card__icon img {
  display: block;
  max-width: 72px;
  max-height: 72px;
  width: auto;
  height: auto;
  object-fit: contain;
}

.effect-card__title {
  margin: 0 0 12px;
  color: #20476b;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.35;
}

.effect-card__text {
  margin: 0;
  color: #335a7c;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.45;
}
.effects__audience {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.effects__audience-head {
  text-align: center;
}

.effects__audience-title {
  margin: 0;
  font-size: 36px;
  font-weight: 500;
  color: #22252d;
}

.effects__audience-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  align-items: stretch;
}


@media (max-width: 1180px) {
  .effects__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .effects {
    padding: 88px 0;
  }

  .effects__title {
    font-size: 30px;
  }

  .effects__subtitle {
    font-size: 16px;
  }

  .effects__hero {
    min-height: auto;
  }

  .effects__hero-inner {
    flex-direction: column;
    text-align: center;
    min-height: auto;
    padding: 32px 20px;
    gap: 18px;
  }

  .effects__hero-value {
    font-size: 42px;
  }

  .effects__hero-text {
    font-size: 18px;
  }

  .effects__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .effect-card {
    min-height: auto;
    padding: 24px 18px;
  }
  
}
</style>
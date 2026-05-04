<template>
  <section class="compliance" id="compliance">
    <div class="container compliance__inner">

      <div class="compliance__head">
        <div class="compliance__eyebrow">
          {{ t.compliance.eyebrow }}
        </div>

        <h2 class="compliance__title">
          {{ t.compliance.title }}
        </h2>

        <p class="compliance__subtitle">
          {{ t.compliance.subtitle }}
        </p>
      </div>

      <div class="compliance__grid">

        <!-- ISO -->
        <article class="compliance-card">
          <div class="compliance-card__icon">
            <img :src="isoIcon" alt="ISO certification" />
          </div>

          <div class="compliance-card__content">
            <div class="compliance-card__label">
              {{ t.compliance.certLabel }}
            </div>

            <h3 class="compliance-card__title">
              {{ t.compliance.certTitle }}
            </h3>

            <p class="compliance-card__text">
              {{ t.compliance.certText }}
            </p>
          </div>
        </article>

        <!-- ASTANA -->
        <article class="compliance-card">
          <div class="compliance-card__icon">
            <img :src="hubIcon" alt="Astana Hub" />
          </div>

          <div class="compliance-card__content">
            <div class="compliance-card__label">
              {{ t.compliance.hubLabel }}
            </div>

            <h3 class="compliance-card__title">
              {{ t.compliance.hubTitle }}
            </h3>

            <p class="compliance-card__text">
              {{ t.compliance.hubText }}
            </p>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'


import isoIcon from '@/assets/icons/iso.png'
import hubIcon from '@/assets/icons/astana-hub.png'

const { t } = useLocale()
</script>

<style scoped>
.compliance {
  position: relative;
  padding: 88px 0;
  overflow: hidden;
  background: var(--background-block);
  border-top: 1px solid rgba(0, 157, 255, 0.12);
}

.compliance__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.compliance__head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.compliance__eyebrow {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  color: var(--color-text);
  font-size: var(--font-size-eyebrow);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.compliance__eyebrow::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: var(--color-primary);
}

.compliance__title {
  margin: 0 0 14px;
  max-width: 1020px;
  color: var(--color-text);
  font-size: var(--font-size-title);
  font-weight: 800;
}

.compliance__subtitle {
  margin: 0;
  max-width: 1020px;
  color: var(--color-subtitle);
  font-size: var(--font-size-subtitle);
}

.compliance__grid {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 24px;
}

.compliance-card {
  display: flex;
  gap: 24px;
  min-height: 190px;
  padding: 28px;
  border-radius: 24px;
  background: var(--white);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
  transition: 0.25s;
}

.compliance-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

.compliance-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 64px;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: rgba(206, 212, 239, 0.103);
}

.compliance-card__icon img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.compliance-card__label {
  margin-bottom: 12px;
  color: var(--color-primary);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.compliance-card__title {
  margin: 0 0 14px;
  color: var(--color-text);
  font-size: var(--font-size-card-title);
  font-weight: 700;
}

.compliance-card__text {
  margin: 0 0 18px;
  color: var(--color-subtitle);
  font-size: 15px;
}

.compliance-card__list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: rgba(1, 157, 255, 0.12);
  color: var(--color-primary);
  font-size: 12px;
  display: grid;
  place-items: center;
}

@media (max-width: 900px) {
  .compliance__grid {
    grid-template-columns: 1fr;
  }
}
</style>
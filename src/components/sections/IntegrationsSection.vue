<template>
  <section class="integrations" id="integrations">
    <div class="container integrations__inner">
      <div class="integrations__head">
        <div class="integrations__eyebrow">
          {{ t.integrations.eyebrow }}
        </div>

        <h2 class="integrations__title">
          {{ t.integrations.title }}
        </h2>

        <p class="integrations__subtitle">
          {{ t.integrations.subtitle }}
        </p>
      </div>

      <div class="integrations__body">
        <article class="integrations__hub">
          <div class="integrations__hub-logo">
            <img :src="idmxLogo" alt="IDMX" />
          </div>

          <h3 class="integrations__hub-title">
            {{ t.integrations.center.title }}
          </h3>

          <p class="integrations__hub-text">
            {{ t.integrations.center.text }}
          </p>

          <div class="integrations__hub-badge">
            Single point of access control
          </div>
        </article>

        <div class="integrations__list">
          <article class="integration-card">
            <div class="integration-card__icon">
              <img
                :src="adIcon"
                :alt="t.integrations.items.top.title"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div class="integration-card__content">
              <h3>{{ t.integrations.items.top.title }}</h3>
              <p>{{ t.integrations.items.top.text }}</p>
            </div>
          </article>

          <article class="integration-card">
            <div class="integration-card__icon">
              <img
                :src="hrIcon"
                :alt="t.integrations.items.left.title"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div class="integration-card__content">
              <h3>{{ t.integrations.items.left.title }}</h3>
              <p>{{ t.integrations.items.left.text }}</p>
            </div>
          </article>

          <article class="integration-card">
            <div class="integration-card__icon">
              <img
                :src="erpIcon"
                :alt="t.integrations.items.right.title"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div class="integration-card__content">
              <h3>{{ t.integrations.items.right.title }}</h3>
              <p>{{ t.integrations.items.right.text }}</p>
            </div>
          </article>

          <article class="integration-card">
            <div class="integration-card__icon">
              <img
                :src="mailIcon"
                :alt="t.integrations.items.bottomLeft.title"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div class="integration-card__content">
              <h3>{{ t.integrations.items.bottomLeft.title }}</h3>
              <p>{{ t.integrations.items.bottomLeft.text }}</p>
            </div>
          </article>

          <article class="integration-card integration-card--apps">
            <div class="integration-card__apps-image">
              <img
                :src="appsIcon"
                :alt="t.integrations.items.bottomRight.title"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h3>
              {{ t.integrations.items.bottomRight.title }}
            </h3>

            <p>
              {{ t.integrations.items.bottomRight.text }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocale } from '../../composables/useLocale'

import adIcon from '@/assets/integrations/ad.png'
import hrIcon from '@/assets/integrations/hr.png'
import erpIcon from '@/assets/integrations/erp.png'
import mailIcon from '@/assets/integrations/mail.png'
import appsIcon from '@/assets/integrations/apps.png'
import idmxLogo from '@/assets/integrations/idmx_logo.svg'

const { t } = useLocale()
</script>

<style scoped>
.integrations {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  background: var(--background-dark);
  border-top: 1px solid rgba(0, 157, 255, 0.12);
}

.integrations::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 40%, rgba(1, 157, 255, 0.16), transparent 34%),
    radial-gradient(circle at 80% 55%, rgba(119, 203, 255, 0.08), transparent 30%);
  pointer-events: none;
}

.integrations__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.integrations__head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.integrations__eyebrow {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  color: var(--white);
  font-size: var(--font-size-eyebrow);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.integrations__eyebrow::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: var(--color-primary);
}

.integrations__title {
  margin: 0 0 18px;
  max-width: 1100px;
  color: var(--white);
  font-size: var(--font-size-title);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.integrations__subtitle {
  margin: 0;
  max-width: 960px;
  color: rgba(220, 236, 255, 0.72);
  font-size: var(--font-size-subtitle);
  line-height: 1.55;
}

.integrations__body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 1.18fr) minmax(0, 1fr);
  grid-template-areas:
    "ad hub hr"
    "erp hub mail"
    "apps apps apps";
  gap: 22px;
  align-items: stretch;
}

.integrations__hub {
  grid-area: hub;
  position: relative;
  z-index: 2;
  min-height: 100%;
  padding: 44px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background:
    radial-gradient(circle at 50% 10%, rgba(1, 157, 255, 0.22), transparent 52%),
    rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(1, 157, 255, 0.22);
  box-shadow: 0 0 40px rgba(1, 157, 255, 0.12);
  cursor: pointer;
}

.integrations__hub::before {
  content: '';
  position: absolute;
  inset: -60px;
  z-index: -1;
  border-radius: 40px;
  background: radial-gradient(circle, rgba(1, 157, 255, 0.18), transparent 70%);
  filter: blur(60px);
}

.integrations__hub-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 34px;
}

.integrations__hub-logo img {
  width: 260px;
  max-width: 100%;
  max-height: 96px;
}

.integrations__hub-title {
  margin: 0 0 18px;
  max-width: 340px;
  color: var(--white);
  font-size: 34px;
  font-weight: 700;
  line-height: 1.12;
}

.integrations__hub-text {
  margin: 0;
  max-width: 350px;
  color: rgba(220, 236, 255, 0.74);
  font-size: 16px;
  line-height: 1.6;
}

.integrations__hub-badge {
  display: inline-flex;
  margin-top: 36px;
  padding: 10px 14px;
  border-radius: 999px;
  color: rgba(220, 236, 255, 0.86);
  font-size: 13px;
  font-weight: 700;
  background: rgba(1, 157, 255, 0.12);
  border: 1px solid rgba(1, 157, 255, 0.2);
}

.integrations__list {
  display: contents;
}

.integration-card:nth-child(1) {
  grid-area: ad;
}

.integration-card:nth-child(2) {
  grid-area: hr;
}

.integration-card:nth-child(3) {
  grid-area: erp;
}

.integration-card:nth-child(4) {
  grid-area: mail;
}

.integration-card {
  display: flex;
  flex-direction: column;  
  align-items: center;       
  justify-content: center;  

  text-align: center;         

  gap: 16px;

  min-height: 190px;
  padding: 28px;
  border-radius: 26px;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(220, 236, 255, 0.1);
  box-shadow: var(--shadow-card);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}

.integration-card__content {
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
}

.integration-card:hover {
  transform: translateY(-4px);
  border-color: rgba(1, 157, 255, 0.35);
  box-shadow: 0 10px 30px rgba(1, 157, 255, 0.15);
  cursor: pointer;
}

.integration-card__icon {
  position: relative;
  flex: 0 0 72px;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.integration-card__icon::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background: rgba(1, 157, 255, 0.1);
  border: 1px solid rgba(1, 157, 255, 0.14);
}

.integration-card__icon::after {
  content: '';
  position: absolute;
  inset: -10px;
  border-radius: 24px;
  background: radial-gradient(circle, rgba(1, 157, 255, 0.18), transparent 70%);
  filter: blur(14px);
  opacity: 0.7;
}

.integration-card__icon img {
  position: relative;
  z-index: 1;
  max-width: 58px;
  max-height: 58px;
}

.integration-card h3 {
  margin: 0 0 10px;
  color: var(--white);
  font-size: 20px;
  font-weight: 800;
  line-height: 1.22;
  letter-spacing: -0.03em;
}

.integration-card p {
  margin: 0;
  color: rgba(220, 236, 255, 0.72);
  font-size: 15px;
  line-height: 1.55;
}

.integration-card__apps-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 420px;
  margin-bottom: 16px;
  padding: 12px;
  border-radius: 58px;

  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.integration-card__apps-image img {
  width: 100%;
  max-width: 100%;
  height: auto;
  filter:
    grayscale(100%)
    brightness(0.85)
    contrast(1.1)
    sepia(1)
    hue-rotate(180deg)
    saturate(1.2);
  transition: all 0.3s ease;
  opacity: 0.7;
  display: block;
}

.integration-card--apps {
  grid-area: apps;
  width: 100%;
  justify-self: stretch;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  min-height: auto;
  padding: 24px 56px;

  background:
    radial-gradient(circle at 50% 0%, rgba(1, 157, 255, 0.15), transparent 60%),
    rgba(255, 255, 255, 0.05);

  border-color: rgba(1, 157, 255, 0.25);
}

.integration-card--apps:hover .integration-card__apps-image img {
  filter: none;
  opacity: 1;
  cursor: pointer;
}

.integration-card--apps h3 {
  margin-bottom: 10px;
  font-size: 28px;
}

@media (max-width: 1180px) {
  .integrations__body {
    grid-template-columns: 1fr;
    grid-template-areas:
      "hub"
      "ad"
      "hr"
      "erp"
      "mail"
      "apps";
  }

  .integrations__hub {
    min-height: auto;
  }

  .integrations__hub-title,
  .integrations__hub-text {
    max-width: 680px;
  }

  .integration-card--apps {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .integrations {
    padding: 72px 0;
  }

  .integrations__inner {
    gap: 36px;
  }

  .integrations__title {
    font-size: 36px;
    line-height: 1.08;
  }

  .integrations__subtitle {
    font-size: 16px;
  }

  .integrations__hub,
  .integration-card {
    padding: 24px;
    border-radius: 22px;
  }

  .integrations__hub-logo img {
    width: 210px;
    max-height: 82px;
  }

  .integrations__hub-title {
    font-size: 28px;
  }

  .integration-card {
    gap: 16px;
    min-height: auto;
  }

  .integration-card__icon {
    flex-basis: 60px;
    width: 60px;
    height: 60px;
  }

  .integration-card__icon img {
    max-width: 48px;
    max-height: 48px;
  }

  .integration-card h3 {
    font-size: 18px;
  }

  .integration-card--apps {
    padding: 24px;
  }
}
</style>
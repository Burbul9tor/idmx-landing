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
          <a
            href="https://idmx.kz/docs/idmx-certificate_of_conformity_ISO15408.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="compliance-card__button"
          >
            {{ t.compliance.certLink }}
          </a>
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
           <a
            href="https://astanahub.com/account/v2/company/1034/profile/activity/"
            target="_blank"
            rel="noopener noreferrer"
            class="compliance-card__button"
          >
            {{ t.compliance.hubLink }}
          </a>
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
    align-items: center;
  text-align: center;
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
  max-width: 800px;
  color: var(--color-subtitle);
  font-size: var(--font-size-subtitle);
}

.compliance__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
}

.compliance-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  min-height: 240px;
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
  margin: 0 auto 8px;
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
  max-width: 420px;
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
.compliance-card__content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.compliance-card__button {
  margin-top: auto;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 16px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: 500;

  color: var(--color-primary);
  background: rgba(1, 157, 255, 0.08);
  border: 1px solid rgba(1, 157, 255, 0.2);

  text-decoration: none;
  transition: all 0.2s ease;
}

.compliance-card__button:hover {
  background: rgba(1, 157, 255, 0.14);
  border-color: rgba(1, 157, 255, 0.4);
  transform: translateY(-1px);
}

.compliance-card__button::after {
  content: '→';
  margin-left: 6px;
  transition: transform 0.2s ease;
}

.compliance-card__button:hover::after {
  transform: translateX(3px);
}

@media (max-width: 900px) {
  .compliance {
    padding: 72px 0;
  }

  .compliance__inner {
    gap: 32px;
  }

  .compliance__title {
    max-width: 100%;
    font-size: 42px;
    line-height: 1.08;
    letter-spacing: -0.03em;
  }

  .compliance__subtitle {
    max-width: 680px;
    font-size: 18px;
    line-height: 1.45;
  }

  .compliance__grid {
    grid-template-columns: 1fr;
    max-width: 620px;
    gap: 18px;
  }

  .compliance-card {
    min-height: auto;
    padding: 26px 22px;
  }
}

@media (max-width: 768px) {
  .compliance {
    padding: 64px 0;
  }

  .compliance__eyebrow {
    margin-bottom: 18px;
    font-size: 12px;
    line-height: 1.2;
  }

  .compliance__title {
    margin-bottom: 12px;
    font-size: 36px;
    line-height: 1.08;
  }

  .compliance__subtitle {
    font-size: 16px;
    line-height: 1.5;
  }

  .compliance-card {
    padding: 24px 20px;
    border-radius: 20px;
  }

  .compliance-card__icon {
    flex-basis: 56px;
    width: 56px;
    height: 56px;
    border-radius: 18px;
  }

  .compliance-card__icon img {
    width: 32px;
    height: 32px;
  }

  .compliance-card__title {
    font-size: 20px;
    line-height: 1.25;
  }

  .compliance-card__text {
    max-width: 100%;
    font-size: 15px;
    line-height: 1.45;
  }
}

@media (max-width: 480px) {
  .compliance {
    padding: 56px 0;
  }

  .compliance__title {
    font-size: 32px;
  }

  .compliance__grid {
    gap: 14px;
  }

  .compliance-card {
    padding: 22px 18px;
  }

  .compliance-card__label {
    margin-bottom: 10px;
    font-size: 11px;
  }

  .compliance-card__title {
    font-size: 19px;
  }
}
</style>
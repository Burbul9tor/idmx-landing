<template>
  <section class="final-cta" id="demo">
    <div class="container final-cta__inner">
      <div class="final-cta__content">
        <h2 class="final-cta__title">
          {{ t.ctaFinal.title }}
        </h2>

        <p class="final-cta__subtitle">
          {{ t.ctaFinal.subtitle }}
        </p>

        <button
        type="button"
        class="final-cta__button"
        @click="emit('open-demo')"
      >
        {{ t.ctaFinal.button }}
      </button>
      </div>

      <div class="final-cta__visual">
        <video
          autoplay
          muted
          loop
          playsinline
          class="final-cta__video"
        >
          <source :src="ctaVideo" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocale } from '../../composables/useLocale'
import ctaVideo from '../../assets/cta/cta-visual.mp4'

const { t } = useLocale()
const emit = defineEmits<{
  (e: 'open-demo'): void
}>()
</script>

<style scoped>
.final-cta {
  position: relative;
  overflow: hidden;
  padding: 120px 0;
 background:
    radial-gradient(
      80% 80% at 50% 20%,
      rgba(18, 44, 96, 0.28) 0%,
      rgba(10, 18, 40, 0) 60%
    ),
    linear-gradient(
      180deg,
      var(--color-hero-bg-start) 0%,
      var(--color-hero-bg-end) 100%
    );
}

.final-cta__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(420px, 520px);
  align-items: center;
  gap: 20px;
}

.final-cta__content {
  max-width: 660px;
}

.final-cta__title {
  margin: 0 0 20px;
  color: var(--white);
  font-size: 52px;
  font-weight: 800;
  line-height: 1.09;
  letter-spacing: -0.01em;
}

.final-cta__subtitle {
  margin: 0 0 36px;
  max-width: 520px;
  color: rgba(247, 249, 252, 0.92);
  font-size: 24px;
  font-weight: 400;
  line-height: 1.45;
}

.final-cta__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 272px;
  min-height: 72px;
  padding: 0 32px;

  border-radius: 24px;

  background: var(--color-primary);
  color: white;

  border: none;
  outline: none;
  cursor: pointer;

  font-size: 18px;
  font-weight: 500;
  line-height: 1;

  text-decoration: none;

  box-shadow: 0 16px 40px rgba(10, 27, 47, 0.12);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background-color 0.25s ease;
}

.final-cta__button:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 44px rgba(10, 27, 47, 0.16);
  background: var(--color-primary-light);
}

.final-cta__visual,
.final-cta__video {
  pointer-events: none;
}

.final-cta__video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
  mix-blend-mode: screen;
}

@media (max-width: 1100px) {
  .final-cta__inner {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }

  .final-cta__content {
    max-width: none;
  }

  .final-cta__subtitle {
    margin-right: auto;
    margin-left: auto;
  }

  .final-cta__button {
    margin: 0 auto;
  }

  .final-cta__visual {
    order: -1;
  }

  .final-cta__gif {
    max-width: 420px;
  }
}

@media (max-width: 768px) {
  .final-cta {
    padding: 72px 0;
  }

  .final-cta__title {
    font-size: 38px;
    line-height: 1.12;
  }

  .final-cta__subtitle {
    margin-bottom: 28px;
    font-size: 16px;
  }

  .final-cta__button {
    width: 100%;
    min-width: 0;
    min-height: 64px;
    border-radius: 20px;
  }

  .final-cta__gif {
    max-width: 260px;
  }
}
</style>
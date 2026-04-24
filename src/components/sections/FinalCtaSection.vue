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
        <img :src="ctaGif" alt="" class="final-cta__gif" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocale } from '../../composables/useLocale'
import ctaGif from '../../assets/cta/cta-visual.gif'

const { t } = useLocale()
const emit = defineEmits(['open-demo'])
</script>

<style scoped>
.final-cta {
  position: relative;
  overflow: hidden;
  padding: 120px 0;
  background:
    radial-gradient(circle at 18% 50%, rgba(1, 157, 255, 0.32), transparent 34%),
    radial-gradient(circle at 100% 50%, rgba(220, 241, 255, 0.34), transparent 38%),
    linear-gradient(90deg, #019dff 0%, #8fd6ff 100%);
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
  font-size: var(--font-size-title);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.04em;
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

  background: #ffffff;
  color: #019dff;

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
  background: #f7f9fc;
}

.final-cta__visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.final-cta__gif {
  display: block;
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
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
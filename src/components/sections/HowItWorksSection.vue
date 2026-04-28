<template>
  <section
    ref="sectionRef"
    class="how-it-works"
    :class="{ 'how-it-works--visible': isVisible }"
    id="how"
  >
    <div class="container how-it-works__inner">
      <div class="how-it-works__head">
        <div class="how-it-works__eyebrow">
          {{ t.how.eyebrow }}
        </div>

        <h2 class="how-it-works__title">
          {{ t.how.title }}
        </h2>

        <p class="how-it-works__subtitle">
          {{ t.how.subtitle }}
        </p>
      </div>

      <div class="how-it-works__scheme">
        <div class="how-it-works__row how-it-works__row--top">
          <article
            v-for="(item, index) in topSteps"
            :key="item.title"
            class="how-card how-card--top"
            :style="{ transitionDelay: `${0.35 + index * 0.18}s` }"
          >
            <div class="how-card__icon">
              <img :src="item.icon" :alt="item.title" loading="lazy"
                decoding="async" />
            </div>

            <h3 class="how-card__title">
              {{ item.title }}
            </h3>

            <p class="how-card__text">
              {{ item.text }}
            </p>
          </article>
        </div>

        <div class="how-it-works__top-connectors" aria-hidden="true">
          <span class="how-it-works__connector how-it-works__connector--top c1"></span>
          <span class="how-it-works__connector how-it-works__connector--top c2"></span>
          <span class="how-it-works__connector how-it-works__connector--top c3"></span>
        </div>

        <div class="how-it-works__curve" aria-hidden="true"></div>
        <div class="how-it-works__curve-left-fix" aria-hidden="true"></div>

        <div class="how-it-works__divider">
          {{ t.how.extraLabel }}
        </div>

        <div class="how-it-works__row how-it-works__row--bottom">
          <article
            v-for="(item, index) in bottomSteps"
            :key="item.title"
            class="how-card how-card--bottom"
            :style="{ transitionDelay: `${1.15 + index * 0.18}s` }"
          >
            <div class="how-card__step">
              {{ item.step }}
            </div>

            <h3 class="how-card__title">
              {{ item.title }}
            </h3>

            <p class="how-card__text">
              {{ item.text }}
            </p>
          </article>
        </div>

        <div class="how-it-works__bottom-connectors" aria-hidden="true">
          <span class="how-it-works__connector how-it-works__connector--bottom c1"></span>
          <span class="how-it-works__connector how-it-works__connector--bottom c2"></span>
          <span class="how-it-works__connector how-it-works__connector--bottom c3"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useLocale } from '../../composables/useLocale'

import roleIcon from '../../assets/how/role.png'
import matrixIcon from '../../assets/how/matrix.png'
import accountIcon from '../../assets/how/account.png'
import readyIcon from '../../assets/how/ready.png'

const { t } = useLocale()

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
      }
    },
    {
      threshold: 0.22,
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

const text = computed(() => t.value)

const topIcons = [roleIcon, matrixIcon, accountIcon, readyIcon] as const

const topSteps = computed(() =>
  text.value.how.topSteps.map((item, index) => ({
    ...item,
    icon: topIcons[index],
  }))
)

const bottomSteps = computed(() => text.value.how.bottomSteps)
</script>

<style scoped>
.how-it-works {
  padding: 120px 0;
  background: var(--background-block);
}

.how-it-works__inner {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.how-it-works__head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.how-it-works__eyebrow {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;

  font-size: var(--font-size-eyebrow);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  color: var(--color-text);
}

.how-it-works__eyebrow::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: var(--color-primary);
}

.how-it-works__title {
  margin: 0 0 14px;
  max-width: 1240px;
  font-size: var(--font-size-title);
  font-weight: 800;
  color: var(--color-text);
}

.how-it-works__subtitle {
  margin: 0;
  max-width: 1240px;
  color: var(--color-subtitle);
  font-size: var(--font-size-subtitle);
}

.how-it-works__scheme {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 8px;
}

.how-it-works__row {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.how-it-works__row--top {
  margin-top: 8px;
}

.how-it-works__row--bottom {
  margin-top: 34px;
}

.how-it-works__top-connectors,
.how-it-works__bottom-connectors {
  position: absolute;
  left: -10px;
  width: 100%;
  pointer-events: none;
  z-index: 1;
}

.how-it-works__top-connectors {
  top: 134px;
}

.how-it-works__bottom-connectors {
  top: 460px;
}

.how-it-works__connector {
  position: absolute;
  display: block;
  height: 2px;
  background: var(--color-how-line);
  transform: scaleX(0);
  transform-origin: left center;
}
.how-it-works__connector--bottom {
  transform-origin: right center;
}

.how-it-works--visible .how-it-works__connector--top {
  animation: connectorDraw 0.5s ease forwards;
}
.how-it-works__connector--bottom {
  transform-origin: right center;
}

.how-it-works--visible .how-it-works__connector--bottom {
  animation: connectorDrawReverse 0.5s ease forwards;
}

.how-it-works__connector--top.c1 {
  left: 24.1%;
  width: 5.2%;
}

.how-it-works__connector--bottom.c1 {
  left: 24.1%;
  width: 5.2%;
}

.how-it-works__connector--top.c2,
.how-it-works__connector--bottom.c2 {
  left: 49.1%;
  width: 5.2%;
}

.how-it-works__connector--top.c3 {
  left: 74.1%;
  width: 5.2%;
}

.how-it-works__connector--bottom.c3 {
  left: 72.2%;
  width: 6.1%;
}

.how-it-works__curve {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.how-it-works__curve::before {
  content: '';
  position: absolute;
  top: 134px;
  right: -38px;
  width: 136px;
  height: 176px;
  border-top: 2px solid var(--color-how-line);
  border-right: 2px solid var(--color-how-line);
  border-bottom: 2px solid var(--color-how-line);
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  opacity: 0;
  clip-path: inset(0 100% 0 0);
}
.how-it-works__curve::after {
  content: '';
  position: absolute;
  left: -18px;
  top: 308px;
  width: calc(100% - 80px);
  height: 122px;
  border-top: 2px solid var(--color-how-line);
  border-left: 2px solid var(--color-how-line);
  border-top-left-radius: 60px;
  opacity: 0;
  clip-path: inset(0 0 0 100%);
}
.how-it-works__curve-left-fix {
  position: absolute;
  left: -18px;
  top: 428px;
  width: 40px;
  height: 40px;
  border-bottom: 2px solid var(--color-how-line);
  border-left: 2px solid var(--color-how-line);
  border-bottom-left-radius: 60px;
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  clip-path: inset(0 0 0 100%);
}

.how-it-works--visible .how-it-works__curve-left-fix {
  animation: curveLeftDraw 0.4s ease 1.1s forwards;
}

.how-it-works--visible .how-it-works__curve::before {
  animation: curveRightDraw 0.8s ease 0.72s forwards;
}

.how-it-works--visible .how-it-works__curve::after {
  animation: curveLeftDraw 0.9s ease 0.8s forwards;
}


.how-it-works__divider {
  position: relative;
  z-index: 2;
  align-self: center;
  margin: 6px 0 4px;
  padding: 6px 18px;
  background: var(--color-primary);
  border-radius: 99px;
  color: var(--white);
  font-size: var(--font-size-how-divider);
  font-weight: var(--font-weight-how-divider);
  line-height: 1.2;
  text-transform: uppercase;
}

.how-card {
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  border-radius: 24px;
  background: var(--white);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);

  opacity: 0;
  transform: translateY(22px);

  transition:
    opacity 0.65s ease,
    transform 0.65s ease,
    box-shadow 0.25s ease;
}

.how-it-works--visible .how-card {
  opacity: 1;
  transform: translateY(0);
}


.how-card--top {
  min-height: 260px;
  padding: 28px 24px;
}

.how-card--bottom {
  min-height: 164px;
  padding: 18px 20px 24px;
}

.how-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 86px;
  margin-bottom: 20px;
}

.how-card__icon img {
  display: block;
  width: auto;
  height: auto;
  max-width: 88px;
  max-height: 86px;
}

.how-card__step {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  margin-bottom: 16px;
  border-radius: 999px;
  background: var(--color-how-step-bg);
  color: var(--color-how-step-text);
  font-size: var(--font-size-how-step);
  font-weight: var(--font-weight-how-step);
  line-height: 1;
}

.how-card__title {
  margin: 0 0 12px;
  color: var(--color-how-card-title);
  font-size: var(--font-size-card-title);
  font-weight: 600;
  line-height: var(--line-height-how-card-title);
}

.how-card__text {
  margin: 0;
  color: var(--color-subtitle);
  font-size: var(--font-size-how-card-text);
  font-weight: var(--font-weight-how-card-text);
  line-height: var(--line-height-how-card-text);
}

@keyframes connectorDraw {
  to {
    transform: scaleX(1);
  }
}
@keyframes connectorDrawReverse {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes curveRightDraw {
  0% {
    opacity: 1;
    clip-path: inset(0 100% 0 0);
  }
  100% {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
}


@keyframes curveLeftDraw {
  0% {
    opacity: 1;
    clip-path: inset(0 0 0 100%);
  }

  100% {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
}

@media (max-width: 1100px) {
  .how-it-works__row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .how-it-works__top-connectors,
  .how-it-works__bottom-connectors,
  .how-it-works__curve,
  .how-it-works__curve-left-fix
   {
    display: none;
  }
  .how-it-works__divider {
    display: block;
    align-self: center;
    margin: 32px 0 4px;
    padding: 0;
    background: transparent;
    text-align: center;
    color: var(--color-text);
  }
}

@media (max-width: 768px) {
  .how-it-works__title {
    margin-bottom: 12px;
    max-width: 100%;
    font-size: 36px;
    line-height: 1.08;
    letter-spacing: -0.03em;
  }
  .how-it-works__subtitle {
    max-width: 100%;
    font-size: 16px;
    line-height: 1.55;
  }
  .how-it-works {
    padding: 88px 0;
  }

  .how-it-works__row {
    grid-template-columns: 1fr;
  }

  .how-it-works__row--top,
  .how-it-works__row--bottom {
    margin-top: 0;
  }

  .how-card--top,
  .how-card--bottom {
    min-height: auto;
  }
}
</style>
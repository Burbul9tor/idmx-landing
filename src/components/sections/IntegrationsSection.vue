<template>
  <section
    ref="sectionRef"
    class="integrations"
    :class="{ 'integrations--visible': isVisible }"
    id="integrations"
  >
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

      <div class="integrations__scheme">
        <svg
          class="integrations__lines"
          viewBox="0 0 1200 760"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M600 390 L600 125" class="integrations__line integrations__line--top" />
          <path d="M600 390 L170 335"  class="integrations__line integrations__line--left" />
          <path d="M600 390 L1000 335" class="integrations__line integrations__line--right" />
          <path d="M560 390 L120 710" class="integrations__line integrations__line--bottom-left" />
          <path d="M640 390 L970 630" class="integrations__line integrations__line--bottom-right" />
          
        </svg>

        <svg
          class="integrations__dots-layer"
          viewBox="0 0 1200 760"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <image
            :href="dotIcon"
            x="580"
            y="170"
            width="42"
            height="42"
            class="integrations__dot integrations__dot--top"
          />
          <image
            :href="dotIcon"
            x="296"
            y="335"
            width="42"
            height="42"
            class="integrations__dot integrations__dot--left"
          />
          <image
            :href="dotIcon"
            x="860"
            y="333"
            width="42"
            height="42"
            class="integrations__dot integrations__dot--right"
          />
          <image
            :href="dotIcon"
            x="248"
            y="585"
            width="42"
            height="42"
            class="integrations__dot integrations__dot--bottom-left"
          />
          <image
            :href="dotIcon"
            x="910"
            y="585"
            width="42"
            height="42"
            class="integrations__dot integrations__dot--bottom-right"
          />
        </svg>

        <article class="integration-card integration-card--top">
          <div class="integration-card__icon">
            <img :src="adIcon" :alt="t.integrations.items.top.title" />
          </div>
          <h3 class="integration-card__title">
            {{ t.integrations.items.top.title }}
          </h3>
          <p class="integration-card__text">
            {{ t.integrations.items.top.text }}
          </p>
        </article>

        <article class="integration-card integration-card--left">
          <div class="integration-card__icon">
            <img :src="hrIcon" :alt="t.integrations.items.left.title" />
          </div>
          <h3 class="integration-card__title">
            {{ t.integrations.items.left.title }}
          </h3>
          <p class="integration-card__text">
            {{ t.integrations.items.left.text }}
          </p>
        </article>

        <article class="integration-card integration-card--right">
          <div class="integration-card__icon">
            <img :src="erpIcon" :alt="t.integrations.items.right.title" />
          </div>
          <h3 class="integration-card__title">
            {{ t.integrations.items.right.title }}
          </h3>
          <p class="integration-card__text">
            {{ t.integrations.items.right.text }}
          </p>
        </article>

        <article class="integration-card integration-card--bottom-left">
          <div class="integration-card__icon">
            <img :src="mailIcon" :alt="t.integrations.items.bottomLeft.title" />
          </div>
          <h3 class="integration-card__title">
            {{ t.integrations.items.bottomLeft.title }}
          </h3>
          <p class="integration-card__text">
            {{ t.integrations.items.bottomLeft.text }}
          </p>
        </article>

        <article class="integration-card integration-card--bottom-right">
          <div class="integration-card__icon">
            <img :src="appsIcon" :alt="t.integrations.items.bottomRight.title" />
          </div>
          <h3 class="integration-card__title">
            {{ t.integrations.items.bottomRight.title }}
          </h3>
          <p class="integration-card__text">
            {{ t.integrations.items.bottomRight.text }}
          </p>
        </article>

        <article class="integration-card integration-card--center integration-card--featured">
          <div class="integration-card__icon integration-card__icon--center">
            <img :src="idmxLogo" alt="IDMX" />
          </div>

          <h3 class="integration-card__title integration-card__title--center">
            {{ t.integrations.center.title }}
          </h3>

          <p class="integration-card__text integration-card__text--center">
            {{ t.integrations.center.text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useLocale } from '../../composables/useLocale'
import adIcon from '../../assets/integrations/ad.png'
import hrIcon from '../../assets/integrations/hr.png'
import erpIcon from '../../assets/integrations/erp.png'
import mailIcon from '../../assets/integrations/mail.png'
import appsIcon from '../../assets/integrations/apps.png'
import idmxLogo from '../../assets/integrations/idmx_logo.svg'
import dotIcon from '../../assets/integrations/dot.svg'

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
    { threshold: 0.2 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

const text = computed(() => t.value)
void text
</script>

<style scoped>
.integrations {
  padding: 120px 0;
  background: var(--background-block);
}

.integrations__inner {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.integrations__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.integrations__eyebrow {
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

.integrations__eyebrow::after {
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

.integrations__title {
  margin: 0 0 14px;
  max-width: 980px;
  color: #22252d;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.integrations__subtitle {
  margin: 0;
  max-width: 860px;
  color: #66788a;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
}

.integrations__scheme {
  position: relative;
  min-height: 820px;
}

.integrations__lines,
.integrations__dots-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}

.integrations__lines {
  z-index: 1;
}

.integrations__dots-layer {
  z-index: 4;
}

.integrations__line {
  fill: none;
  stroke: rgba(46, 166, 255, 0.22);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
}

.integrations--visible .integrations__line {
  animation: drawLine 1s ease forwards;
}

.integrations--visible .integrations__line--top {
  animation-delay: 0.15s;
}

.integrations--visible .integrations__line--left {
  animation-delay: 0.28s;
}

.integrations--visible .integrations__line--right {
  animation-delay: 0.4s;
}

.integrations--visible .integrations__line--bottom-left {
  animation-delay: 0.52s;
}

.integrations--visible .integrations__line--bottom-right {
  animation-delay: 0.64s;
}

.integrations__dot {
  fill: #2ea6ff;
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  filter: drop-shadow(0 0 0 rgba(46, 166, 255, 0.3))
    drop-shadow(0 6px 14px rgba(46, 166, 255, 0.1));
}

.integrations--visible .integrations__dot {
  animation: dotReveal 0.4s ease forwards;
}

.integrations--visible .integrations__dot--top {
  animation-delay: 0.25s;
}

.integrations--visible .integrations__dot--left {
  animation-delay: 0.38s;
}

.integrations--visible .integrations__dot--right {
  animation-delay: 0.5s;
}

.integrations--visible .integrations__dot--bottom-left {
  animation-delay: 0.62s;
}

.integrations--visible .integrations__dot--bottom-right {
  animation-delay: 0.74s;
}

.integration-card {
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 22px;
  border: 1px solid rgba(46, 166, 255, 0.12);
  background: #eef7ff;
  box-shadow: 0 10px 30px rgba(28, 31, 36, 0.04);
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.65s ease,
    transform 0.65s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.integrations--visible .integration-card {
  opacity: 1;
  transform: translateY(0);
}

.integration-card:hover {
  box-shadow: 0 18px 38px rgba(28, 31, 36, 0.08);
  border-color: rgba(46, 166, 255, 0.24);
}

.integration-card--top {
  top: 0px;
  left: 50%;
  width: 300px;
  min-height: 200px;
  padding: 24px 20px;
  transform: translateX(-50%) translateY(24px);
}

.integrations--visible .integration-card--top {
  transform: translateX(-50%) translateY(0);
}

.integration-card--left {
  top: 280px;
  left: 20px;
  width: 300px;
  min-height: 200px;
  padding: 24px 20px;
}

.integration-card--right {
  top: 288px;
  right: 20px;
  width: 300px;
  min-height: 20px;
  padding: 24px 20px;
}

.integration-card--bottom-left {
  bottom: -40px;
  left: 120px;
  width: 300px;
  min-height: 210px;
   max-height: 210px;
  padding: 24px 20px;
}

.integration-card--bottom-right {
  bottom: -40px;
  right: 120px;
  width: 300px;
  min-height: 210px;
  max-height: 210px;
  padding: 24px 20px;
}

.integration-card--center {
  top: 300px;
  left: 50%;
  width: 384px;
  min-height: 262px;
  padding: 16px 16px 16px;
  transform: translateX(-50%) translateY(24px);
}

.integrations--visible .integration-card--center {
  transform: translateX(-50%) translateY(0);
}

.integration-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  margin-bottom: 8px;
}

.integration-card__icon img {
  display: block;
  max-width: 56px;
  max-height: 56px;
  width: auto;
  height: auto;
}

/* Центр: твой логотип / твоя иконка */
.integration-card__icon--center {
  height: 88px;
  margin-bottom: 0px;
}

.integration-card__icon--center img {
  max-width: 180px;
  max-height: 80px;
}

.integration-card__title {
  margin: 0 0 12px;
  color: #22252d;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
}

.integration-card__title--center {
  font-size: 18px;
}

.integration-card__text {
  margin: 0;
  color: #335a7c;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
}

.integration-card__text--center {
  max-width: 260px;
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes dotReveal {
  from {
    opacity: 0;
    transform: scale(0.6);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 1180px) {
  .integrations__scheme {
    min-height: auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
      min-height: 920px;
  }

  .integrations__lines,
  .integrations__dots-layer {
    display: none;
  }

  .integration-card {
    position: relative;
    inset: auto;
    width: 100%;
    min-height: auto;
    transform: none;
  }

  .integrations--visible .integration-card,
  .integrations--visible .integration-card--top,
  .integrations--visible .integration-card--center {
    transform: none;
  }

  .integration-card--center {
    order: 1;
    grid-column: 1 / -1;
  }

  .integration-card--top {
    order: 2;
    grid-column: 1 / -1;
    justify-self: center;
    max-width: 360px;
  }

  .integration-card--left {
    order: 3;
  }

  .integration-card--right {
    order: 4;
  }

  .integration-card--bottom-left {
    order: 5;
  }

  .integration-card--bottom-right {
    order: 6;
    
    
  }
}

@media (max-width: 768px) {
  .integrations {
    padding: 88px 0;
  }

  .integrations__title {
    font-size: 30px;
  }

  .integrations__subtitle {
    font-size: 16px;
  }

  .integrations__scheme {
    grid-template-columns: 1fr;
  }

  .integration-card--top,
  .integration-card--center {
    max-width: none;
  }

  .integration-card__title--center {
    font-size: 22px;
  }

  .integration-card__icon--center img {
    max-width: 160px;
    max-height: 72px;
  }
}
</style>
<template>
  <div class="hero-scroll" @click="scrollToNext">
  <div class="hero-scroll__mouse">
    <div class="hero-scroll__dot"></div>
  </div>
</div>
  <section class="hero">
    <div class="hero__bg">
      <div class="hero__aurora hero__aurora--one"></div>
      <div class="hero__aurora hero__aurora--two"></div>
      <div class="hero__aurora hero__aurora--three"></div>
      <div class="hero__light-lines"></div>
      <div class="hero__noise"></div>
    </div>

    <div class="container hero__inner">
      <div class="hero__content">
        <div class="hero__text-block hero__text-block--enter">
          <h1 class="hero__title">
            <img
              src="../../assets/hero/idmx_white.svg"
              alt="IDMX"
              class="hero__title-logo"
            />
            <span class="hero__title-text">
              {{ t.hero.title }}
            </span>
          </h1>

          <p class="hero__subtitle">
            {{ t.hero.subtitle }}
          </p>
        </div>

        <div class="hero-cta">
       <!-- <button
          class="hero-btn hero-btn--enter"
          @click="emit('open-demo')"
        >
          {{ t.hero.primaryCta }}
        </button> 

          <div class="hero-cta-note hero-cta-note--enter">
            <span class="hero-cta-note__dot"></span>

            <div class="hero-cta-note__text">
              <strong>{{ t.hero.noteTitle }}</strong>
              <span>{{ t.hero.noteText }}</span>
            </div>
          </div>-->
        </div>
        <div class="hero-stats hero-stats--enter">
  <div
    v-for="(item, index) in t.hero.stats"
    :key="item.value"
    class="hero-stat"
  >
   <div class="hero-stat__value">
  {{ computedStats[index].displayValue }}
</div>

    <div class="hero-stat__text">
      {{ item.text }}
    </div>
  </div>
  
</div>
      </div>
    </div>
   
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useLocale } from '../../composables/useLocale'

const { t } = useLocale()
const emit = defineEmits(['open-demo'])

const statsProgress = ref<number[]>([])

const parseStatValue = (value: string) => {
  const number = Number(value.replace(/[^\d]/g, ''))
  const prefix = value.match(/^[^\d]+/)?.[0] || ''
  const suffix = value.match(/[^\d]+$/)?.[0] || ''

  return {
    number: Number.isNaN(number) ? 0 : number,
    prefix,
    suffix,
  }
}

const computedStats = computed(() =>
  t.value.hero.stats.map((item, index) => {
    const parsed = parseStatValue(item.value)
    const currentValue = statsProgress.value[index] ?? 0

    return {
      ...item,
      displayValue: `${parsed.prefix}${currentValue}${parsed.suffix}`,
    }
  })
)

const animateStats = () => {
  const stats = t.value.hero.stats.map((item) => parseStatValue(item.value))

  const delay = 300 // 

  setTimeout(() => {
    stats.forEach((stat, index) => {
      const duration = 1400
      const startTime = performance.now()

      const tick = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)

        statsProgress.value[index] = Math.round(stat.number * easedProgress)

        if (progress < 1) {
          requestAnimationFrame(tick)
        }
      }

      requestAnimationFrame(tick)
    })
  }, delay)
}

onMounted(() => {
  statsProgress.value = t.value.hero.stats.map(() => 0)

  const statsBlock = document.querySelector('.hero-stats')

  if (!statsBlock) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animateStats()
        observer.disconnect()
      }
    },
    {
      threshold: 0.35,
    }
    
  )


  observer.observe(statsBlock)
})
const scrollToNext = () => {
  const next = document.querySelector('#solution')
  next?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: max(120px, 100svh);
  padding: 40px 0 100px;
  animation: heroFadeIn 0.6s ease;
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
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(6, 14, 32, 0.6) 0%,
    rgba(6, 14, 32, 0.2) 20%,
    transparent 60%
  );
  pointer-events: none;
  z-index: 0;
}

.hero__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.hero__aurora {
  position: absolute;
  border-radius: 999px;
  filter: blur(90px);
  opacity: 0.72;
  mix-blend-mode: screen;
}

.hero__aurora--one {
  top: 18%;
  left: -80px;
  width: 520px;
  height: 520px;
  background: radial-gradient(
    circle,
    rgba(0, 157, 255, 0.28) 0%,
    rgba(0, 157, 255, 0.1) 42%,
    transparent 72%
  );
  animation: auroraFloatOne 12s ease-in-out infinite;
}

.hero__aurora--two {
  top: 12%;
  right: 8%;
  width: 460px;
  height: 460px;
  background: radial-gradient(
    circle,
    rgba(56, 132, 255, 0.18) 0%,
    rgba(56, 132, 255, 0.07) 46%,
    transparent 74%
  );
  animation: auroraFloatTwo 15s ease-in-out infinite;
}

.hero__aurora--three {
  left: 50%;
  bottom: -240px;
  width: 620px;
  height: 620px;
  transform: translateX(-50%);
  background: radial-gradient(
    circle,
    rgba(1, 157, 255, 0.14) 0%,
    rgba(1, 157, 255, 0.05) 40%,
    transparent 72%
  );
  animation: auroraFloatThree 18s ease-in-out infinite;
}

.hero__light-lines {
  position: absolute;
  inset: -10%;
  opacity: 0.32;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.03) 48%,
      transparent 50%
    ),
    repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 58px,
      rgba(80, 150, 255, 0.045) 59px,
      transparent 60px
    );
  transform: skewX(-12deg);
  animation: lightLinesMove 18s linear infinite;
}

.hero__noise {
  position: absolute;
  inset: 0;
  opacity: 0.06;
  background-image:
    radial-gradient(rgba(255, 255, 255, 0.22) 0.6px, transparent 0.6px);
  background-size: 18px 18px;
  mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
}

.hero__inner {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 100%;
}

.hero__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 820px;
  text-align: center;
}

.hero__content::before {
  content: '';
  position: absolute;
  top: 44%;
  left: 50%;
  z-index: -1;
  width: 680px;
  height: 680px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.035) 0%,
    rgba(255, 255, 255, 0.01) 32%,
    transparent 68%
  );
  pointer-events: none;
}

.hero__text-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__text-block--enter {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(22px);
  animation: heroTextBlockEnter 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
}

.hero__title {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin: 0 0 22px;
  color: var(--color-hero-title);
  font-size: 58px;
  font-weight: 800;
  line-height: 68px;
  max-width: 1060px;
  
}

.hero__title-logo {
  display: block;
  flex: 0 0 auto;
  width: auto;
  height: 100px;
}

.hero__title-text {
  display: inline;
}

.hero__subtitle {
  max-width: 760px;
  margin: 0 0 28px;
  color: var(--color-hero-subtitle);
  font-size: var(--font-size-hero-subtitle);
  font-weight: var(--font-weight-hero-subtitle);
  line-height: var(--line-height-hero-subtitle);
}


.hero-btn {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 50px;
  padding: 20px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  color: var(--color-hero-button-text);
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-button);
  line-height: var(--line-height-button);
  letter-spacing: -0.01em;
  background: linear-gradient(
    135deg,
    var(--color-hero-button-bg-start) 0%,
    var(--color-hero-button-bg-middle) 50%,
    var(--color-hero-button-bg-end) 100%
  );
  box-shadow:
    0 0 0 1px var(--color-hero-button-border) inset,
    0 18px 40px var(--color-hero-button-shadow),
    0 0 38px var(--color-hero-button-glow),
    0 0 90px var(--color-hero-button-glow-soft);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    filter 0.2s ease;
}
.hero-btn {
  background-size: 200% 200%;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    filter 0.2s ease,
    background-position 0.4s ease;
}

.hero-btn:hover {
  filter: brightness(1.05);
  border-radius: 17px;
  background-position: 100% 50%;
    box-shadow:
    0 0 0 1px var(--color-hero-button-border) inset,
    0 24px 50px var(--color-hero-button-shadow-hover),
    0 0 60px var(--color-hero-button-glow-hover),
    0 0 120px var(--color-hero-button-glow-soft-hover);
     
}

.hero-btn--enter {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(20px) scale(0.98);
  animation: heroButtonEnter 0.95s cubic-bezier(0.22, 1, 0.36, 1) 0.85s forwards;
}



.hero-cta-note {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  min-height: 50px;
  padding: 16px;
  border-radius: 22px;
  border: 1px solid var(--color-hero-note-border);
  background: var(--color-hero-note-bg);
  box-shadow:
    inset 0 1px 0 var(--color-hero-note-inner-shadow),
    0 12px 32px var(--color-hero-note-shadow);
  backdrop-filter: blur(14px);
}

.hero-cta-note--enter {
  opacity: 0;
  filter: blur(6px);
  transform: translateY(18px) scale(0.96);
  animation: heroNoteEnter 1.1s cubic-bezier(0.22, 1, 0.36, 1) 1.15s forwards;
}

.hero-cta-note__dot {
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: var(--color-hero-note-dot);
  box-shadow: 0 0 0 6px var(--color-hero-note-dot-ring);
  animation: pulseDot 2s ease-in-out infinite;
}

.hero-cta-note__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
  text-align: center;
}

.hero-cta-note__text strong {
  margin-bottom: 4px;
  color: var(--color-hero-note-title);
  font-size: var(--font-size-note-title);
  font-weight: var(--font-weight-note-title);
}

.hero-cta-note__text span {
  color: var(--color-hero-note-text);
  font-size: var(--font-size-note-text);
  font-weight: var(--font-weight-note-text);
}
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  width: 100%;
  max-width: 640px;
  margin-top: 8px;
  padding: 20px 24px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(220, 236, 255, 0.12);
  box-shadow: 0 20px 60px rgba(1, 157, 255, 0.08);
  backdrop-filter: blur(14px);
}

.hero-stat {
  position: relative;
  padding: 0 20px;
  text-align: center;
}

.hero-stat:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 26%;
  width: 1px;
  height: 48%;
  background: rgba(119, 203, 255, 0.18);
}

.hero-stat__value {
  margin-bottom: 8px;
  color: var(--color-primary-light);
  font-size: 34px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
}

.hero-stat__text {
  color: rgba(220, 236, 255, 0.72);
  font-size: 14px;
  line-height: 1.55;
}

.hero-stats--enter {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(22px);
  animation: heroStatsEnter 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.75s forwards;
}
.hero-scroll {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  animation: heroScrollFadeIn 1s ease 1.6s forwards;
}

.hero-scroll__mouse {
  width: 26px;
  height: 44px;
  border-radius: 20px;
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: center;
  padding-top: 8px;
  backdrop-filter: blur(6px);
}

.hero-scroll__dot {
  width: 4px;
  height: 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.6);
  animation: scrollDot 2s ease-in-out infinite;
}

@keyframes scrollDot {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  50% {
    transform: translateY(10px);
    opacity: 0.4;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes heroScrollFadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, 10px);
  }

  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes heroStatsEnter {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translateY(22px);
  }

  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}

@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroTextBlockEnter {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translateY(22px);
  }
  60% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(-2px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}

@keyframes heroButtonEnter {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translateY(20px) scale(0.98);
  }
  60% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(-2px) scale(1.01);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
  }
}

@keyframes heroNoteEnter {
  0% {
    opacity: 0;
    filter: blur(6px);
    transform: translateY(18px) scale(0.96);
  }
  60% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(-2px) scale(1.01);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
  }
}

@keyframes auroraFloatOne {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  25% {
    transform: translate3d(70px, -30px, 0) scale(1.08) rotate(2deg);
  }
  50% {
    transform: translate3d(120px, 20px, 0) scale(1.16) rotate(4deg);
  }
  75% {
    transform: translate3d(60px, 50px, 0) scale(1.08) rotate(2deg);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
  }
}

@keyframes auroraFloatTwo {
  0% {
    transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
  }
  25% {
    transform: translate3d(-40px, 24px, 0) scale(1.04) rotate(-2deg);
  }
  50% {
    transform: translate3d(-80px, 55px, 0) scale(1.1) rotate(-4deg);
  }
  75% {
    transform: translate3d(-30px, 18px, 0) scale(1.05) rotate(-2deg);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
  }
}

@keyframes auroraFloatThree {
  0% {
    transform: translateX(-50%) translateY(0) scale(1);
  }
  25% {
    transform: translateX(-46%) translateY(-18px) scale(1.03);
  }
  50% {
    transform: translateX(-54%) translateY(-42px) scale(1.08);
  }
  75% {
    transform: translateX(-48%) translateY(-20px) scale(1.04);
  }
  100% {
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

@keyframes lightLinesMove {
  0% {
    transform: skewX(-12deg) translateX(-2%);
  }
  50% {
    transform: skewX(-12deg) translateX(2%);
  }
  100% {
    transform: skewX(-12deg) translateX(-2%);
  }
}

@keyframes pulseDot {
  0%,
  100% {
    box-shadow: 0 0 0 0 var(--color-hero-note-dot-pulse-start);
    opacity: 1;
  }
  50% {
    box-shadow: 0 0 0 9px var(--color-hero-note-dot-pulse-end);
    opacity: 0.9;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 100svh;
    padding: 96px 24px 72px;
  }

  .hero__aurora--one {
    top: 26%;
    left: -80px;
    width: 320px;
    height: 320px;
  }

  .hero__aurora--two {
    top: 16%;
    right: -40px;
    width: 260px;
    height: 260px;
  }

  .hero__aurora--three {
    bottom: -140px;
    width: 360px;
    height: 360px;
  }

  .hero__light-lines {
    opacity: 0.2;
  }

  .hero__content::before {
    width: 420px;
    height: 420px;
  }

  .hero__title {
    gap: 10px;
     font-size: var(--font-size-hero-title);
  font-weight: 800;
  line-height: 38px;
  max-width: 560px;
  }

  .hero__title-logo {
    color: var(--color-hero-title);
 ;
  }

  .hero__subtitle {
    font-size: 16px;
  }

  .hero-cta {
    max-width: 100%;
  }

  .hero-btn {
    width: 100%;
    max-width: 420px;
  }

  .hero-cta-note {
    max-width: 420px;
  }
  .hero-stats {
  grid-template-columns: 1fr;
  max-width: 420px;
  margin-top: 32px;
  padding: 24px;
}

.hero-stat {
  padding: 20px 0;
}

.hero-stat:not(:last-child)::after {
  right: auto;
  top: auto;
  left: 50%;
  bottom: 0;
  width: 64px;
  height: 1px;
  transform: translateX(-50%);
}

.hero-stat__value {
  font-size: 40px;
}

.hero-stat__text {
  font-size: 15px;
}
}
</style>
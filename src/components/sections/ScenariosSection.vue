<template>
  <section class="scenarios" id="scenarios">
    <div class="container scenarios__inner">
      <div class="scenarios__head">
        <div class="scenarios__eyebrow">
          {{ t.scenariosSection.eyebrow }}
        </div>

        <h2 class="scenarios__title">
          {{ t.scenariosSection.title }}
        </h2>

        <p v-if="t.scenariosSection.subtitle" class="scenarios__subtitle">
          {{ t.scenariosSection.subtitle }}
        </p>
      </div>

      <div class="scenarios__layout">
        <div class="scenarios__list">
          <button
            v-for="(item, index) in scenarios"
            :key="item.title"
            type="button"
            class="scenario-card"
            :class="{ 'scenario-card--active': activeIndex === index }"
            @click="setActive(index)"
          >
            <div class="scenario-card__icon">
              <img :src="item.icon" :alt="item.title" loading="lazy"
                decoding="async" />
            </div>

            <div class="scenario-card__body">
              <h3 class="scenario-card__title">
                {{ item.title }}
              </h3>
            </div>
          </button>
        </div>

        <div class="scenarios__preview">
          <transition name="scenario-fade" mode="out-in">
            <div :key="activeScenario.title" class="scenario-preview">
              <div class="scenario-preview__screen">
                <h3 class="scenario-preview__title">
                  {{ activeScenario.previewTitle }}
                </h3>

                <p class="scenario-preview__text">
                  {{ activeScenario.previewText }}
                </p>

                <div class="scenario-preview__flow">
                  <div
                    v-for="(step, index) in activeScenario.steps"
                    :key="step.title"
                    class="scenario-step"
                  >
                    <div class="scenario-step__dot">
                      <span class="scenario-step__number">
                        {{ index + 1 }}
                      </span>
                    </div>

                    <div class="scenario-step__content">
                      <div class="scenario-step__title">
                        {{ step.title }}
                      </div>

                      <div class="scenario-step__text">
                        {{ step.text }}
                      </div>
                    </div>

                    <div
                      v-if="index !== activeScenario.steps.length - 1"
                      class="scenario-step__line"
                    ></div>
                  </div>
                </div>

                <div class="scenario-preview__footer">
                  <div class="scenario-preview__metric">
                    <div class="scenario-preview__metric-value">
                      {{ activeScenario.metric.value }}
                    </div>

                    <div class="scenario-preview__metric-text">
                      {{ activeScenario.metric.text }}
                    </div>
                  </div>
                </div>

                <div
                  v-if="activeScenario.extra.effect || activeScenario.extra.application"
                  class="scenario-preview__extra"
                >
                  <div
                    v-if="activeScenario.extra.effect"
                    class="scenario-preview__extra-item"
                  >
                    <div class="scenario-preview__extra-label">
                      {{ t.scenariosSection.labels.effect }}
                    </div>

                    <div class="scenario-preview__extra-value">
                      {{ activeScenario.extra.effect }}
                    </div>
                  </div>

                  <div
                    v-if="activeScenario.extra.application"
                    class="scenario-preview__extra-item"
                  >
                    <div class="scenario-preview__extra-label">
                      {{ t.scenariosSection.labels.application }}
                    </div>

                    <div class="scenario-preview__extra-value scenario-preview__extra-value--small">
                      {{ activeScenario.extra.application }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocale } from '../../composables/useLocale'

import onboardingIcon from '../../assets/scenarios/scenario-onboarding.png'
import hrChangesIcon from '../../assets/scenarios/scenario-hr.png'
import contractorsIcon from '../../assets/scenarios/scenario-contractors.png'
import auditIcon from '../../assets/scenarios/scenario-audit.png'
import criticalIcon from '../../assets/scenarios/scenario-critical.png'

type ScenarioStep = {
  title: string
  text: string
}

type ScenarioExtra = {
  effect: string
  application: string
}

type Scenario = {
  title: string
  text: string
  previewTitle: string
  previewText: string
  metric: {
    value: string
    text: string
  }
  extra: ScenarioExtra
  steps: ScenarioStep[]
  icon: string
}

type LocaleScenarioItem = {
  title: string
  text: string
  previewTitle: string
  previewText: string
  metric: {
    value: string
    text: string
  }
  extra?: {
    effect?: string
    application?: string
  }
  steps?: ScenarioStep[]
}

type LocaleValue = {
  scenariosSection?: {
    labels?: {
      effect?: string
      application?: string
    }
    items?: LocaleScenarioItem[]
  }
}

const { t } = useLocale()
const activeIndex = ref(0)

const scenarioIcons = [
  onboardingIcon,
  hrChangesIcon,
  contractorsIcon,
  auditIcon,
  criticalIcon,
] as const

const fallbackScenario: Scenario = {
  title: '',
  text: '',
  previewTitle: '',
  previewText: '',
  metric: {
    value: '',
    text: '',
  },
  extra: {
    effect: '',
    application: '',
  },
  steps: [],
  icon: scenarioIcons[0],
}

const localeScenarios = computed(() => {
  const localeValue = t.value as unknown as LocaleValue
  return localeValue.scenariosSection?.items ?? []
})

const scenarios = computed(() => {
  return localeScenarios.value.map((item, index): Scenario => ({
    title: item.title,
    text: item.text,
    previewTitle: item.previewTitle,
    previewText: item.previewText,
    metric: {
      value: item.metric.value,
      text: item.metric.text,
    },
    extra: {
      effect: item.extra?.effect ?? '',
      application: item.extra?.application ?? '',
    },
    steps: item.steps ?? [],
    icon: scenarioIcons[index] ?? scenarioIcons[0],
  }))
})

const activeScenario = computed((): Scenario => {
  return scenarios.value[activeIndex.value] ?? scenarios.value[0] ?? fallbackScenario
})

const setActive = (index: number) => {
  activeIndex.value = index
}
</script>

<style scoped>
.scenarios {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  background: var(--background-block);
}

.scenarios__inner {
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.scenarios__head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.scenarios__eyebrow {
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

.scenarios__eyebrow::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: var(--color-primary);
}

.scenarios__title {
  margin: 0 0 18px;
  max-width: 1100px;
  color: var(--color-text);
  font-size: var(--font-size-title);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.scenarios__subtitle {
  margin: 0;
  max-width: 960px;
  color: var(--color-subtitle);
  font-size: var(--font-size-subtitle);
  line-height: 1.55;
}

.scenarios__layout {
  display: grid;
  grid-template-columns: 420px minmax(0, 1fr);
  gap: 24px;
  align-items: stretch;
}

.scenarios__list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.scenario-card {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 22px;
  border: 1px solid var(--color-border);
  border-radius: 24px;
  background: var(--white);
  box-shadow: var(--shadow-card);
  text-align: left;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;
}

.scenario-card:hover {
  transform: translateY(-4px);
  border-color: rgba(1, 157, 255, 0.25);
  box-shadow: var(--shadow-card-hover);
}

.scenario-card--active {
  border-color: rgba(1, 157, 255, 0.38);
  background:
    linear-gradient(90deg, rgba(1, 157, 255, 0.12), rgba(255, 255, 255, 0.96) 42%),
    var(--white);
  box-shadow: 0 18px 44px rgba(1, 157, 255, 0.16);
}

.scenario-card--active .scenario-card__icon {
  background: rgba(1, 157, 255, 0.14);
  border-color: rgba(1, 157, 255, 0.28);
}

.scenario-card--active .scenario-card__title {
  color: var(--color-primary);
}

.scenario-card__icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(1, 157, 255, 0.08);
  border: 1px solid rgba(1, 157, 255, 0.12);
}

.scenario-card__icon::after {
  content: '';
  position: absolute;
  inset: -10px;
  border-radius: 24px;
  background: radial-gradient(circle, rgba(1, 157, 255, 0.14), transparent 70%);
  filter: blur(14px);
  opacity: 0.75;
  z-index: 0;
}

.scenario-card__icon img {
  position: relative;
  z-index: 1;
  display: block;
  max-width: 40px;
  max-height: 40px;
  object-fit: contain;
}

.scenario-card__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.scenario-card__title {
  margin: 0;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.02em;
}

.scenarios__preview {
  min-width: 0;
}

.scenario-preview {
  display: block;
  height: 100%;
}

.scenario-preview__screen {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 32px;
  border: 1px solid var(--color-border);
  border-radius: 28px;
  background: var(--white);
  box-shadow: var(--shadow-card);
  overflow: hidden;
}

.scenario-preview__screen::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 0% 0%, rgba(1, 157, 255, 0.1), transparent 36%),
    radial-gradient(circle at 100% 100%, rgba(119, 203, 255, 0.08), transparent 34%);
  pointer-events: none;
}

.scenario-preview__title,
.scenario-preview__text,
.scenario-preview__flow,
.scenario-preview__footer,
.scenario-preview__extra {
  position: relative;
  z-index: 1;
}

.scenario-preview__title {
  margin: 0 0 12px;
  color: var(--color-text);
  font-size: 28px;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.scenario-preview__text {
  margin: 0 0 28px;
  max-width: 720px;
  color: var(--color-subtitle);
  font-size: 16px;
  line-height: 1.55;
}

.scenario-preview__flow {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 28px;
}

.scenario-step {
  position: relative;
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.scenario-step__dot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 50%;
  background: rgba(1, 157, 255, 0.08);
  border: 1px solid rgba(1, 157, 255, 0.18);
}

.scenario-step__number {
  color: var(--color-primary);
  font-size: 20px;
  font-weight: 800;
  line-height: 1;
}

.scenario-step__content {
  padding-top: 4px;
}

.scenario-step__title {
  margin-bottom: 6px;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 800;
  line-height: 1.35;
  letter-spacing: -0.02em;
}

.scenario-step__text {
  color: var(--color-subtitle);
  font-size: 14px;
  line-height: 1.5;
}

.scenario-step__line {
  position: absolute;
  left: 26px;
  top: 58px;
  bottom: -18px;
  width: 2px;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(1, 157, 255, 0.28),
    rgba(1, 157, 255, 0.06)
  );
}

.scenario-preview__footer {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.scenario-preview__metric {
  position: relative;
  padding: 20px;
  border: 1px solid rgba(1, 157, 255, 0.14);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.72);
  overflow: hidden;
}

.scenario-preview__metric::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 20% 30%,
    rgba(1, 157, 255, 0.16),
    transparent 60%
  );
  pointer-events: none;
}

.scenario-preview__metric-value,
.scenario-preview__metric-text {
  position: relative;
  z-index: 1;
}

.scenario-preview__metric-value {
  margin-bottom: 8px;
  font-size: 32px;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(135deg, #019dff, #36b1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
}

.scenario-preview__metric-text {
  color: var(--color-subtitle);
  font-size: 14px;
  line-height: 1.45;
}

.scenario-preview__extra {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 18px;
}

.scenario-preview__extra-item {
  padding: 16px;
  border: 1px solid rgba(1, 157, 255, 0.12);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.68);
}

.scenario-preview__extra-label {
  margin-bottom: 6px;
  color: var(--color-subtitle);
  font-size: 12px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.scenario-preview__extra-value {
  color: var(--color-text);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.45;
}

.scenario-preview__extra-value--small {
  font-size: 14px;
  font-weight: 600;
}

.scenario-fade-enter-active,
.scenario-fade-leave-active {
  transition: opacity 0.28s ease, transform 0.28s ease;
}

.scenario-fade-enter-from,
.scenario-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 1180px) {
  .scenarios__layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .scenarios {
    padding: 72px 0;
  }

  .scenarios__inner {
    gap: 36px;
  }

  .scenarios__eyebrow {
    margin-bottom: 18px;
    font-size: 12px;
    line-height: 1.2;
  }

  .scenarios__title {
    margin-bottom: 12px;
    max-width: 100%;
    font-size: 36px;
    line-height: 1.08;
    letter-spacing: -0.03em;
  }

  .scenarios__subtitle {
    max-width: 100%;
    font-size: 16px;
    line-height: 1.55;
  }

  .scenarios__layout {
    gap: 24px;
  }

  .scenarios__list {
    display: flex;
    flex-direction: row;
    gap: 12px;
    overflow-x: auto;
    padding: 4px 0 12px;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }

  .scenarios__list::-webkit-scrollbar {
    display: none;
  }

  .scenario-card {
    flex: 0 0 240px;
    scroll-snap-align: start;
    padding: 16px;
    border-radius: 20px;
  }

  .scenario-card__icon {
    width: 52px;
    height: 52px;
  }

  .scenario-card__title {
    font-size: 15px;
  }

  .scenario-preview__screen {
    padding: 24px 18px;
    border-radius: 24px;
  }

  .scenario-preview__title {
    font-size: 22px;
  }

  .scenario-preview__text {
    margin-bottom: 22px;
    font-size: 15px;
  }

  .scenario-preview__extra {
    grid-template-columns: 1fr;
  }

  .scenario-step__dot {
    width: 46px;
    height: 46px;
  }

  .scenario-step__number {
    font-size: 16px;
  }

  .scenario-step__line {
    left: 22px;
    top: 50px;
  }
}
</style>
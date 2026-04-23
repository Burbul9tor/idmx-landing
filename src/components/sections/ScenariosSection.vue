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
            <div class="scenario-card__top">
            <div class="scenario-card__icon">
                <img :src="item.icon" :alt="item.title" />
            </div>
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
                      <img :src="getStepIcon(step.icon)" :alt="step.title" />
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

import createIcon from '../../assets/scenarios/step-create.png'
import rulesIcon from '../../assets/scenarios/step-rules.png'
import approveIcon from '../../assets/scenarios/step-approve.png'
import accessIcon from '../../assets/scenarios/step-access.png'
import syncIcon from '../../assets/scenarios/step-sync.png'
import controlIcon from '../../assets/scenarios/step-control.png'

type ScenarioStep = {
  icon: string
  title: string
  text: string
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
  extra: {
    effect: string
    application: string
  }
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

const stepIconMap: Record<string, string> = {
  create: createIcon,
  rules: rulesIcon,
  approve: approveIcon,
  access: accessIcon,
  sync: syncIcon,
  control: controlIcon,
}

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

const getStepIcon = (icon: string) => stepIconMap[icon] || createIcon

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
  padding: 120px 0;
  background: var(--color-how-bg);
}

.scenarios__inner {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.scenarios__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.scenarios__eyebrow {
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

.scenarios__eyebrow::after {
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

.scenarios__title {
  margin: 0 0 14px;
  max-width: 980px;
  color: #22252d;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.scenarios__subtitle {
  margin: 0;
  max-width: 860px;
  color: #66788a;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
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
  gap: 14px;
  width: 100%;
  padding: 22px;
  border: 1px solid rgba(46, 166, 255, 0.12);
  border-radius: 24px;
  background: var(--white);
  box-shadow: 0 10px 30px rgba(28, 31, 36, 0.04);
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
  border-color: rgba(46, 166, 255, 0.24);
  box-shadow: 0 18px 38px rgba(28, 31, 36, 0.08);
}

.scenario-card--active {
  border-color: rgba(46, 166, 255, 0.28);
  background: linear-gradient(
    180deg,
    rgba(235, 246, 255, 0.98),
    rgba(227, 242, 255, 0.92)
  );
  box-shadow: 0 18px 40px rgba(46, 166, 255, 0.12);
}

.scenario-card__top {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
}

.scenario-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.85);
}

.scenario-card__icon img {
  display: block;
  max-width: 36px;
  max-height: 36px;
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
  color: #20476b;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.4;
}

.scenarios__preview {
  min-width: 0;
}

.scenario-preview {
  display: block;
  height: auto;
}

.scenario-preview__screen {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: unset;
  padding: 32px;
  border: 1px solid rgba(46, 166, 255, 0.14);
  border-radius: 28px;
  background: var(--white);
  overflow: hidden;
}

.scenario-preview__title {
  margin: 0 0 12px;
  color: #22252d;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.scenario-preview__text {
  margin: 0 0 28px;
  max-width: 720px;
  color: #5e7388;
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
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 10px 24px rgba(46, 166, 255, 0.12);
}

.scenario-step__dot img {
  display: block;
  max-width: 26px;
  max-height: 26px;
  object-fit: contain;
}

.scenario-step__content {
  padding-top: 4px;
}

.scenario-step__title {
  margin-bottom: 6px;
  color: #20476b;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.35;
}

.scenario-step__text {
  color: #4f6477;
  font-size: 14px;
  line-height: 1.5;
}

.scenario-step__line {
  position: absolute;
  left: 25px;
  top: 56px;
  bottom: -18px;
  width: 2px;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(46, 166, 255, 0.3),
    rgba(46, 166, 255, 0.08)
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
  border: 1px solid rgba(46, 166, 255, 0.12);
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
    rgba(34, 157, 255, 0.18),
    transparent 60%
  );
  pointer-events: none;
}

.scenario-preview__metric-value {
  margin-bottom: 8px;
  font-size: 32px;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(135deg, #019DFF, #4899cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
}

.scenario-preview__metric-text {
  color: #4f6477;
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
  border: 1px solid rgba(46, 166, 255, 0.12);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.6);
}

.scenario-preview__extra-label {
  margin-bottom: 6px;
  color: #7a8ea3;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.scenario-preview__extra-value {
  color: #20476b;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.45;
}

.scenario-preview__extra-value--small {
  font-size: 14px;
  font-weight: 500;
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
    padding: 88px 0;
  }

  .scenarios__title {
    font-size: 30px;
  }

  .scenarios__subtitle {
    font-size: 16px;
  }

  .scenario-card {
    padding: 18px;
    border-radius: 20px;
  }

  .scenario-card__icon {
    width: 56px;
    height: 56px;
  }

  .scenario-card__title {
    font-size: 16px;
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

  .scenario-step__line {
    left: 22px;
    top: 50px;
  }
}
</style>
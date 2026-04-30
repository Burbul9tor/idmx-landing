<template>
  <section class="modules" id="modules">
    <div class="container modules__inner">
      <div class="modules__head">
        <div class="modules__eyebrow">
          {{ t.modulesSection.eyebrow }}
        </div>

        <h2 class="modules__title">
          {{ t.modulesSection.title }}
        </h2>

        <p
          v-if="t.modulesSection.description"
          class="modules__description"
        >
          {{ t.modulesSection.description }}
        </p>
      </div>

      <div
  ref="tabsRef"
  class="modules__tabs"
  role="tablist"
  aria-label="Modules navigation"
>
  <button
    v-for="(item, index) in modules"
    :key="item.title"
    :ref="(el) => setTabRef(el, index)"
    type="button"
    class="modules__tab"
    :class="{ 'modules__tab--active': activeIndex === index }"
    :aria-selected="activeIndex === index"
    :tabindex="activeIndex === index ? 0 : -1"
    @click="setActive(index)"
  >
    {{ item.title }}
  </button>
</div>

      <div class="modules__content">
        <div class="modules__info">
          <div
            v-if="activeModule.subtitle"
            class="modules__module-eyebrow"
          >
            {{ activeModule.subtitle }}
          </div>

          <h3 class="modules__module-title">
            {{ activeModule.title }}
          </h3>

          <ul
            v-if="activeModule.features?.length"
            class="modules__features"
          >
            <li
              v-for="feature in activeModule.features"
              :key="feature"
              class="modules__feature"
            >
              <span class="modules__feature-icon">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>

        <div class="modules__stage">
          <div class="modules__screen-shell">
            <div class="modules__screen-main">
              <div class="modules__screen-topbar">
                <div class="modules__screen-headings">
                  <div class="modules__screen-title">
                    IDMX
                  </div>

                  <div class="modules__screen-breadcrumbs">
                    / {{ activeModule.title }}
                  </div>
                </div>
              </div>

              <div class="modules__screen-preview">
                <img
                  :key="activeModule.image"
                  :src="activeModule.image"
                  :alt="activeModule.title"
                  loading="eager"
                  decoding="async"
                  class="modules__screen-image"
                  @click="isPreviewOpen = true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="isPreviewOpen"
        class="modules__lightbox"
        @click="isPreviewOpen = false"
      >
        <button
          type="button"
          class="modules__lightbox-close"
          aria-label="Закрыть изображение"
          @click.stop="isPreviewOpen = false"
        >
          ✕
        </button>

        <img
          :src="activeModule.image"
          :alt="activeModule.title"
          class="modules__lightbox-image"
          @click.stop
        />
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import {
  computed,
  ref,
  watch,
  onBeforeUnmount,
  onMounted,
  type ComponentPublicInstance,
} from 'vue'
import { useLocale } from '../../composables/useLocale'

import matrixScreen from '../../assets/modules/module-matrix.png'
import idmScreen from '../../assets/modules/module-idm.png'
import portalScreen from '../../assets/modules/module-portal.png'
import auditScreen from '../../assets/modules/module-audit.png'

const { t } = useLocale()

const activeIndex = ref(0)
const isPreviewOpen = ref(false)
const tabsRef = ref<HTMLElement | null>(null)
const tabRefs = ref<HTMLButtonElement[]>([])

const moduleImages = [
  matrixScreen,
  idmScreen,
  portalScreen,
  auditScreen,
] as const

const modules = computed(() =>
  t.value.modulesSection.items.map((item, index) => ({
    ...item,
    image: moduleImages[index] ?? moduleImages[0],
  }))
)

const activeModule = computed(
  () => modules.value[activeIndex.value] ?? modules.value[0]
)

const setTabRef = (
  el: Element | ComponentPublicInstance | null,
  index: number
) => {
  if (el instanceof HTMLButtonElement) {
    tabRefs.value[index] = el
  }
}

const setActive = (index: number) => {
  activeIndex.value = index

  const tabsEl = tabsRef.value
  const tabEl = tabRefs.value[index]

  if (!tabsEl || !tabEl) return

  const left =
    tabEl.offsetLeft -
    tabsEl.clientWidth / 2 +
    tabEl.clientWidth / 2

  tabsEl.scrollTo({
    left: Math.max(0, left),
    behavior: 'smooth',
  })
}

watch(isPreviewOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isPreviewOpen.value = false
  }
}

onMounted(() => {
  moduleImages.forEach((src) => {
    const img = new Image()
    img.src = src
  })

  window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.modules {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  background: var(--background-dark);
  border-top: 1px solid rgba(0, 157, 255, 0.12);
}

.modules__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.modules__head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.modules__eyebrow {
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

.modules__eyebrow::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: var(--color-primary);
}

.modules__title {
  margin: 0 0 18px;
  max-width: 1100px;
  color: var(--white);
  font-size: var(--font-size-title);
  font-weight: 800;
  line-height: 1.08;
}

.modules__description {
  margin: 0;
  max-width: 960px;
  color: rgba(220, 236, 255, 0.72);
  font-size: var(--font-size-subtitle);
  line-height: 1.55;
}

.modules__tabs {
  display: flex;
  align-items: flex-end;
  gap: 0;
  margin-top: 20px;
  border-bottom: 1px solid rgba(220, 236, 255, 0.12);

  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  scroll-snap-type: x proximity;
}

.modules__tabs::-webkit-scrollbar {
  display: none;
}

.modules__tab {
  flex: 0 0 auto;
  scroll-snap-align: center;

  min-height: 64px;
  padding: 0 28px;
  border: 0;
  border-radius: 16px 16px 0 0;
  background: transparent;

  color: rgba(220, 236, 255, 0.72);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;

  cursor: pointer;
  transition:
    color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}

.modules__tab:hover {
  color: var(--white);
  background: rgba(255, 255, 255, 0.04);
}

.modules__tab--active {
  color: var(--color-primary);
  background: rgba(255, 255, 255, 0.04);
  box-shadow:
    inset 0 0 0 1px rgba(220, 236, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.04);
}

.modules__content {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 18px;
  align-items: start;
  
}

.modules__info {
  min-width: 0;
  margin-top: 24px;
  
}

.modules__module-eyebrow {
  margin-bottom: 20px;
  color: rgba(220, 236, 255, 0.72);
  font-size: 14px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.modules__module-title {
  margin: 0 0 28px;
  color: var(--white);
  font-size: clamp(24px, 4vw, 32px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.modules__features {
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.modules__feature {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  color: rgba(220, 236, 255, 0.72);
  font-size: 20px;
  line-height: 1.45;
}

.modules__feature-icon {
  flex: 0 0 auto;
  color: var(--color-green, #22c55e);
  font-size: 16px;
  font-weight: 800;
  line-height: 1.45;
}

.modules__stage {
    min-width: 0;
  display: flex;
  align-items: flex-start;
}

.modules__screen-shell {
  min-height: 100%;
  overflow: hidden;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(220, 236, 255, 0.12);
  box-shadow:
    0 28px 90px rgba(0, 14, 40, 0.34),
    0 0 40px rgba(1, 157, 255, 0.08);
}

.modules__screen-main {
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: rgba(6, 14, 32, 0.88);
}

.modules__screen-topbar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(220, 236, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
}

.modules__screen-headings {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.modules__screen-title {
  color: var(--white);
  font-size: 18px;
  font-weight: 800;
  line-height: 1.2;
}

.modules__screen-breadcrumbs {
  color: rgba(220, 236, 255, 0.72);
  font-size: 18px;
  line-height: 1.2;
}

.modules__screen-preview {
  position: relative;
  flex: 1;
  overflow: hidden;
  padding: 12px;
  background: rgba(6, 14, 32, 0.6);
}

.modules__screen-preview::after {
  content: '';
  position: absolute;
  inset: 20px;
  border-radius: 12px;
  background: linear-gradient(
    120deg,
    transparent 40%,
    rgba(255, 255, 255, 0.08) 50%,
    transparent 60%
  );
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
}

.modules__screen-image {
  animation: moduleImageFade 0.22s ease;
  display: block;
  width: 100%;
   max-width: none;
  height: auto;
  border-radius: 12px;
  border: none;
  background: #ffffff;
  box-shadow:
    0 8px 24px rgba(0, 14, 40, 0.24),
    0 1px 0 rgba(255, 255, 255, 0.16) inset;
  transition: transform 0.6s ease;
  transform-origin: center center;
  cursor: zoom-in;
}

.modules__screen-preview:hover .modules__screen-image {
  transform: scale(1.04);
}

.modules__screen-preview:hover::after {
  opacity: 1;
}

.modules__lightbox {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 60px 24px 24px;
  background: rgba(3, 8, 20, 0.95);
  z-index: 99999;
  animation: fadeIn 0.25s ease;
}

.modules__lightbox-image {
  position: relative;
  z-index: 100000;
  max-width: 90vw;
  max-height: calc(100vh - 120px);
  border-radius: 16px;
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.6);
  animation: scaleIn 0.25s ease;
}

.modules__lightbox-close {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 100001;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.modules__lightbox-close:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: scale(1.05);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes moduleImageFade {
  from {
    opacity: 0;
    transform: translateY(6px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1100px) {
  .modules__content {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .modules {
    padding: 72px 0;
  }

  .modules__inner {
    gap: 32px;
  }

  .modules__eyebrow {
    margin-bottom: 18px;
    font-size: 12px;
    line-height: 1.2;
  }

  .modules__title {
    margin-bottom: 12px;
    max-width: 100%;
    font-size: 36px;
    line-height: 1.08;
    letter-spacing: -0.03em;
  }

  .modules__description {
    max-width: 100%;
    font-size: 16px;
    line-height: 1.55;
  }

  .modules__tabs {
    margin-top: 6px;
    margin-right: calc(var(--container-padding) * -1);
    padding-right: var(--container-padding);
    scroll-behavior: smooth;
  }

  .modules__tab {
    min-height: 54px;
    padding: 0 18px;
    font-size: 16px;
  }

  .modules__content {
    padding-top: 0;
  }

  .modules__module-eyebrow {
    margin-bottom: 14px;
    font-size: 12px;
  }

  .modules__module-title {
    margin-bottom: 20px;
    font-size: 32px;
  }

  .modules__features {
    gap: 14px;
  }

  .modules__feature {
    gap: 12px;
    font-size: 16px;
  }

 .modules__screen-shell {
  transition: transform 0.4s ease;
}

.modules__stage:hover .modules__screen-shell {
  transform: scale(1.04);
}

  .modules__screen-topbar {
    padding: 16px 18px;
  }

  .modules__screen-headings {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }

  .modules__screen-title,
  .modules__screen-breadcrumbs {
    font-size: 14px;
  }

  .modules__screen-preview {
    padding: 14px;
  }

  .modules__screen-preview::after {
    inset: 14px;
  }

  .modules__lightbox {
    padding: 56px 16px 16px;
  }

  .modules__lightbox-close {
    top: 16px;
    right: 16px;
  }
}
</style>
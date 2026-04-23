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

      <div class="modules__layout">
        <div
          class="modules__nav"
          role="tablist"
          aria-label="Modules navigation"
        >
          <button
            v-for="(item, index) in modules"
            :key="item.title"
            type="button"
            class="modules__nav-item"
            :class="{ 'modules__nav-item--active': activeIndex === index }"
            :aria-selected="activeIndex === index"
            :tabindex="activeIndex === index ? 0 : -1"
            @click="activeIndex = index"
          >
            <span class="modules__nav-icon">
              <img
                :src="item.icon"
                :alt="item.title"
                class="modules__nav-icon-image"
              />
            </span>

            <span class="modules__nav-content">
              <span class="modules__nav-title">
                {{ item.title }}
              </span>

              <span class="modules__nav-subtitle">
                {{ item.subtitle }}
              </span>
            </span>

            <span class="modules__nav-arrow">
            <img
              src="@/assets/icons/arrow-right.svg"
              alt=""
              class="modules__nav-arrow-icon"
            />
          </span>
          </button>
        </div>

        <div class="modules__stage">
          <div class="modules__screen-shell">
            <div class="modules__screen-main">
              <div class="modules__screen-topbar">
                <div class="modules__screen-headings">
                  <div class="modules__screen-title">
                    {{ activeModule.title }}
                  </div>

                  <div class="modules__screen-breadcrumbs">
                    IDMX / {{ activeModule.title }}
                  </div>
                </div>
              </div>

              <div class="modules__screen-preview">
                <div
                  v-if="activeModule.features?.length"
                  class="modules__features-top"
                >
                  <div
                    v-for="feature in activeModule.features"
                    :key="feature"
                    class="modules__feature-chip"
                  >
                    {{ feature }}
                  </div>
                </div>

                <img
                  :src="activeModule.image"
                  :alt="activeModule.title"
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
import { computed, ref, watch, onBeforeUnmount, onMounted } from 'vue'
import { useLocale } from '../../composables/useLocale'

import matrixScreen from '../../assets/modules/module-matrix.png'
import idmScreen from '../../assets/modules/module-idm.png'
import portalScreen from '../../assets/modules/module-portal.png'
import auditScreen from '../../assets/modules/module-audit.png'

import matrixIcon from '../../assets/modules/icons/matrix.png'
import idmIcon from '../../assets/modules/icons/idm.png'
import portalIcon from '../../assets/modules/icons/portal.png'
import auditIcon from '../../assets/modules/icons/audit.png'

const { t } = useLocale()
const activeIndex = ref(0)
const isPreviewOpen = ref(false)

const moduleImages = [
  matrixScreen,
  idmScreen,
  portalScreen,
  auditScreen,
] as const

const moduleIcons = [
  matrixIcon,
  idmIcon,
  portalIcon,
  auditIcon,
] as const

const modules = computed(() =>
  t.value.modulesSection.items.map((item, index) => ({
    ...item,
    image: moduleImages[index] ?? moduleImages[0],
    icon: moduleIcons[index] ?? moduleIcons[0],
  }))
)

const activeModule = computed(
  () => modules.value[activeIndex.value] ?? modules.value[0]
)

watch(isPreviewOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isPreviewOpen.value = false
  }
}

onMounted(() => {
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
  background:
    radial-gradient(circle at 50% 0%, rgba(1, 157, 255, 0.18), transparent 28%),
    radial-gradient(circle at 85% 20%, rgba(54, 177, 255, 0.12), transparent 24%),
    radial-gradient(circle at 12% 72%, rgba(1, 157, 255, 0.1), transparent 26%),
    linear-gradient(180deg, #07152b 0%, #081a35 100%);
}

.modules::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 20%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.03), transparent 42%);
  pointer-events: none;
}

.modules__inner {
  position: relative;
  z-index: 1;
}

.modules__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;
  text-align: center;
}

.modules__eyebrow {
  position: relative;
  display: inline-flex;
  justify-content: center;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.88);
  font-size: var(--font-size-problems-eyebrow);
  font-weight: var(--font-weight-problems-eyebrow);
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.modules__eyebrow::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -8px;
  width: 76px;
  height: 2px;
  border-radius: 999px;
  background: #019dff;
  transform: translateX(-50%);
}

.modules__title {
  margin: 0;
  color: #ffffff;
  font-size: var(--font-size-problems-title);
  font-weight: var(--font-weight-problems-title);
  line-height: var(--line-height-problems-title);
  letter-spacing: -0.02em;
}

.modules__description {
  max-width: 760px;
  margin: 18px 0 0;
  color: rgba(220, 241, 255, 0.78);
  font-size: 18px;
  line-height: 1.65;
}

.modules__layout {
  display: grid;
  grid-template-columns: 420px minmax(0, 1fr);
  gap: 32px;
  align-items: start;
}

.modules__nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: fit-content;
  gap: 0;
  align-self: start;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(119, 203, 255, 0.12);
  backdrop-filter: blur(14px);
  overflow: hidden;
  box-shadow:
    0 22px 60px rgba(0, 20, 51, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.modules__nav-item {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr) 24px;
  gap: 18px;
  align-items: center;
  width: 100%;
  padding: 28px 28px 28px 24px;
  text-align: left;
  background: transparent;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition:
    background 0.28s ease,
    border-color 0.28s ease,
    transform 0.28s ease;
}

.modules__nav-item:last-child {
  border-bottom: 0;
}

.modules__nav-item:hover {
  background: rgba(255, 255, 255, 0.04);
}

.modules__nav-item--active {
  background: linear-gradient(
    90deg,
    rgba(119, 203, 255, 0.12),
    rgba(119, 203, 255, 0.04)
  );
  box-shadow: inset 0 0 0 1px rgba(119, 203, 255, 0.18);
}

.modules__nav-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.08)),
    rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(119, 203, 255, 0.12);
  flex-shrink: 0;
  overflow: hidden;
}

.modules__nav-icon-image {
  display: block;
  width: 36px;
  height: 36px;
  object-fit: contain;
  transform: scale(1.1);
  filter: drop-shadow(0 2px 6px rgba(1, 157, 255, 0.25));
}

.modules__nav-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.modules__nav-title {
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.modules__nav-subtitle {
  color: rgba(220, 241, 255, 0.78);
  font-size: 15px;
  line-height: 1.6;
}

.modules__nav-arrow {
  color: rgba(119, 203, 255, 0.9);
  font-size: 24px;
  line-height: 1;
  transition: transform 0.28s ease;
}

.modules__nav-item:hover .modules__nav-arrow,
.modules__nav-item--active .modules__nav-arrow {
  transform: translateX(4px);
}

.modules__stage {
  min-width: 0;
}

.modules__screen-shell {
  min-height: 100%;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(194, 225, 255, 0.12);
  background: rgba(255, 255, 255, 0.96);
  box-shadow:
    0 28px 90px rgba(0, 14, 40, 0.34),
    0 0 40px rgba(1, 157, 255, 0.08);
}

.modules__screen-main {
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: #f7faff;
}

.modules__screen-topbar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  padding: 24px 24px 18px;
  border-bottom: 1px solid #e4eef8;
  background: rgba(255, 255, 255, 0.94);
}

.modules__screen-headings {
  min-width: 0;
}

.modules__screen-title {
  margin-bottom: 6px;
  color: #123e67;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.modules__screen-breadcrumbs {
  color: #8aa2b8;
  font-size: 13px;
  line-height: 1.4;
}

.modules__screen-preview {
  position: relative;
  flex: 1;
  overflow: hidden;
  padding: 12px;
  background: linear-gradient(180deg, #eef4fa 0%, #f7faff 100%);
}

.modules__screen-preview::after {
  content: '';
  position: absolute;
  inset: 12px;
  border-radius: 8px;
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

.modules__features-top {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 14px;
  margin-bottom: 20px;
}

.modules__screen-image {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid #e4eef8;
  background: #ffffff;
  box-shadow:
    0 8px 24px rgba(17, 43, 71, 0.08),
    0 1px 0 rgba(255, 255, 255, 0.8) inset;
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

.modules__feature-chip {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid #dce7f2;
  color: #4d6b86;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
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
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 1280px) {
  .modules__layout {
    grid-template-columns: 360px minmax(0, 1fr);
  }

  .modules__nav-title {
    font-size: 24px;
  }

  .modules__nav-subtitle {
    font-size: 15px;
  }

  .modules__screen-title {
    font-size: 12px;
  }
}

@media (max-width: 1100px) {
  .modules__layout {
    grid-template-columns: 1fr;
  }

  .modules__nav {
    order: 2;
  }

  .modules__stage {
    order: 1;
  }
}

@media (max-width: 768px) {
  .modules__nav-item {
    grid-template-columns: 48px minmax(0, 1fr);
    padding: 18px;
  }

  .modules__nav-arrow {
    display: none;
  }

  .modules__nav-icon {
    width: 48px;
    height: 48px;
  }

  .modules__nav-icon-image {
    width: 20px;
    height: 20px;
  }

  .modules__head {
    margin-bottom: 36px;
  }

  .modules__description {
    font-size: 16px;
  }

  .modules__layout {
    gap: 20px;
  }

  .modules__nav-title {
    font-size: 20px;
  }

  .modules__nav-subtitle {
    font-size: 14px;
    line-height: 1.5;
  }

  .modules__screen-topbar {
    flex-direction: column;
    align-items: stretch;
    padding: 18px 18px 14px;
  }

  .modules__screen-title {
    font-size: 24px;
  }

  .modules__screen-preview {
    padding: 14px;
  }

  .modules__screen-preview::after {
    inset: 14px;
  }

  .modules__features-top {
    gap: 10px;
    margin-bottom: 16px;
  }

  .modules__lightbox {
    padding: 56px 16px 16px;
  }

  .modules__lightbox-close {
    top: 16px;
    right: 16px;
  }
}

@media (max-width: 560px) {
  .modules__feature-chip {
    width: 100%;
    justify-content: center;
  }
}
</style>
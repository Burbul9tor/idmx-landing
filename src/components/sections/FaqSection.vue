<template>
  <section class="faq" id="faq">
    <div class="container faq__inner">
      <div class="faq__head">
        <div class="faq__eyebrow">
          {{ t.faqSection.eyebrow }}
        </div>

        <h2 class="faq__title">
          {{ t.faqSection.title }}
        </h2>
      </div>

      <div class="faq__list">
        <article
          v-for="(item, index) in t.faqSection.items"
          :key="item.question"
          class="faq__item"
          :class="{ 'faq__item--open': openItems[index] }"
        >
          <button
            class="faq__question"
            type="button"
            :aria-expanded="openItems[index]"
            @click="toggleItem(index)"
          >
            <span class="faq__question-text">
              {{ item.question }}
            </span>

            <span class="faq__icon" aria-hidden="true">
            <img :src="arrowIcon" alt="" />
            </span> 
          </button>

          <transition name="faq-content">
            <div v-if="openItems[index]" class="faq__answer-wrap">
              <div class="faq__answer">
                {{ item.answer }}
              </div>
            </div>
          </transition>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLocale } from '../../composables/useLocale'
import arrowIcon from '../../assets/icons/arrow.svg'

const { t } = useLocale()

const openItems = ref<Record<number, boolean>>({})

const toggleItem = (index: number) => {
  openItems.value[index] = !openItems.value[index]
}
</script>

<style scoped>
.faq {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  background: var(--background-dark);
  border-top: 1px solid rgba(0, 157, 255, 0.12);
}

.faq::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 40%, rgba(1, 157, 255, 0.14), transparent 34%),
    radial-gradient(circle at 80% 60%, rgba(119, 203, 255, 0.08), transparent 30%);
  pointer-events: none;
}

.faq__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.faq__head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.faq__eyebrow {
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

.faq__eyebrow::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: var(--color-primary);
}

.faq__title {
  margin: 0;
  max-width: 1100px;
  color: var(--white);
  font-size: var(--font-size-title);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.faq__list {
  max-width: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.faq__item {
  overflow: hidden;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(220, 236, 255, 0.1);
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}

.faq__item:hover {
  transform: translateY(-4px);
  border-color: rgba(1, 157, 255, 0.25);
  box-shadow: 0 10px 30px rgba(1, 157, 255, 0.12);
}

.faq__item--open {
  border-color: rgba(1, 157, 255, 0.35);
  background: rgba(255, 255, 255, 0.055);
  box-shadow: 0 10px 30px rgba(1, 157, 255, 0.14);
}

.faq__question {
  width: 100%;
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 28px;
  text-align: left;
  cursor: pointer;
  font: inherit;
}

.faq__question-text {
  margin: 0;
  color: var(--white);
  font-size: var(--font-size-card-title);
  font-weight: 700;
  line-height: 1.25;
}

.faq__icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.faq__icon img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.faq__item--open .faq__icon {
  opacity: 1;
  transform: rotate(180deg);
}

.faq__answer-wrap {
  overflow: hidden;
}

.faq__answer {
  margin: 0;
  padding: 16px 28px 22px;
  color: var(--white);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  background: rgba(255, 255, 255, 0.03);
  border-top: 1px solid rgba(220, 236, 255, 0.08);
}

.faq-content-enter-active,
.faq-content-leave-active {
  transition: all 0.28s ease;
}

.faq-content-enter-from,
.faq-content-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 768px) {
  .faq {
    padding: 72px 0;
  }

  .faq__inner {
    gap: 36px;
  }

  .faq__eyebrow {
    margin-bottom: 18px;
    font-size: 12px;
  }

  .faq__title {
    max-width: 100%;
    font-size: 36px;
    line-height: 1.08;
    letter-spacing: -0.03em;
  }

  .faq__question {
    padding: 20px;
  }

  .faq__question-text {
    font-size: 16px;
  }

  .faq__answer {
    padding: 14px 20px 18px;
    font-size: 14px;
  }
}
</style>
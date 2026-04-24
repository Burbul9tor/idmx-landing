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

const openItems = ref<Record<number, boolean>>({
  2: true,
})

const toggleItem = (index: number) => {
  openItems.value[index] = !openItems.value[index]
}
</script>

<style scoped>
.faq {
  padding: 120px 0;
  background: var(--background-block);
}

.faq__inner {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.faq__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.faq__eyebrow {
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

.faq__eyebrow::after {
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

.faq__title {
  margin: 0;
  max-width: 980px;
  color: #22252d;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.faq__list {
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.faq__item {
  border-radius: 18px;
  border: 1px solid rgba(46, 166, 255, 0.12);
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 10px 30px rgba(28, 31, 36, 0.04);
  overflow: hidden;
  transition:
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.faq__item:hover {
  box-shadow: 0 18px 38px rgba(28, 31, 36, 0.08);
  border-color: rgba(46, 166, 255, 0.24);
}

.faq__item--open {
  border-color: rgba(46, 166, 255, 0.5);
  box-shadow:
    0 12px 32px rgba(46, 166, 255, 0.14),
    0 0 0 1px rgba(46, 166, 255, 0.08);
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
  color: #22252d;
  font-size: 16px;
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

  transition: transform 0.25s ease;
}

.faq__icon img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.faq__item--open .faq__icon {
  transform: rotate(180deg);
}

.faq__answer-wrap {
  overflow: hidden;
}

.faq__answer {
  margin: 0;
  padding: 16px 28px 20px;

  color: #3e5166;
  font-size: 15px;            
  font-weight: 400;
  line-height: 1.6;           

  background: linear-gradient(
    180deg,
    rgba(220, 241, 255, 0.6) 0%,
    rgba(220, 241, 255, 0.85) 100%
  );

  border-top: 1px solid rgba(46, 166, 255, 0.12);
}
.faq__item--open .faq__answer {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
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
    padding: 88px 0;
  }

  .faq__title {
    font-size: 30px;
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
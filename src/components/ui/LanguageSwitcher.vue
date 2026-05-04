<template>
  <div class="lang-switcher">
    <button class="lang-switcher__button" @click="isOpen = !isOpen">
      <span>{{ locale.toUpperCase() }}</span>
      <svg
        class="lang-switcher__arrow"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="{ 'lang-switcher__arrow--open': isOpen }"
      >
        <path
          d="M3 4.5L6 7.5L9 4.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <div v-if="isOpen" class="lang-switcher__menu">
      <button
        v-for="item in locales"
        :key="item"
        class="lang-switcher__item"
        :class="{ 'lang-switcher__item--active': item === locale }"
        @click="selectLocale(item)"
      >
        {{ item.toUpperCase() }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Locale } from '../../types'
import { useLocale } from '../../composables/useLocale'

const { locale, setLocale } = useLocale()
const isOpen = ref(false)

const locales: Locale[] = ['ru', 'kz', 'en', 'uz']

function selectLocale(value: Locale) {
  setLocale(value)
  isOpen.value = false
}
</script>

<style scoped>
.lang-switcher {
  position: relative;
}

.lang-switcher__button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.88);
  font-size: 12px;
  font-weight: 400;
  line-height: 134%;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.lang-switcher__button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.lang-switcher__arrow {
  color: rgba(255, 255, 255, 0.6);
  transition: transform 0.2s ease;
}

.lang-switcher__arrow--open {
  transform: rotate(180deg);
}

.lang-switcher__menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 76px;
  padding: 6px;
  border-radius: 12px;
  background: rgba(10, 18, 40, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(12px);
  display: grid;
  gap: 4px;
  z-index: 50;
}

.lang-switcher__item {
  height: 34px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: rgba(255, 255, 255, 0.82);
  font-size: 12px;
  font-weight: 400;
  line-height: 134%;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.lang-switcher__item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.lang-switcher__item--active {
  background: rgba(1, 157, 255, 0.16);
  color: #fff;
  font-weight: 500;
}
</style>
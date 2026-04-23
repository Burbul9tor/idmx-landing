<template>
  <header :class="['header', { 'header--scrolled': isScrolled }]">
    <div class="container header__inner">
      
      <!-- LOGO -->
      <div class="logo">
        <img :src="logo" alt="IDMX" />
      </div>

      <!-- NAV -->
      <nav class="nav">
        <NavLink href="#solution">{{ t.nav.solution }}</NavLink>
        <NavLink href="#how">{{ t.nav.how }}</NavLink>
        <NavLink href="#modules">{{ t.nav.modules }}</NavLink>
        <NavLink href="#integrations">{{ t.nav.integrations }}</NavLink>
        <NavLink href="#scenarios">{{ t.nav.scenarios }}</NavLink>
        <NavLink href="#faq">{{ t.nav.faq }}</NavLink>
      </nav>

      <!-- ACTIONS -->
      <div class="actions">
        <LanguageSwitcher />

        <BaseButton variant="primary" @click="openDemoModal">
          {{ t.nav.demo }}
        </BaseButton>
      </div>

    </div>
  </header>

  <!-- MODAL -->
  <DemoModal v-model="isDemoModalOpen" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../../assets/images/logo.svg'
import { useLocale } from '../../composables/useLocale'
import BaseButton from '../ui/BaseButton.vue'
import NavLink from '../ui/NavLink.vue'
import LanguageSwitcher from '../ui/LanguageSwitcher.vue'
import DemoModal from './DemoModal.vue'

const { t } = useLocale()

const isScrolled = ref(false)
const isDemoModalOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 10
}

function openDemoModal() {
  isDemoModalOpen.value = true
}



onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
 position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(6, 14, 32, 0.92);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(1, 157, 255, 0.18);
  transition:
    background 0.35s ease,
    backdrop-filter 0.35s ease,
    border-color 0.35s ease;

  
}

.header--scrolled {
  background: rgba(6, 14, 32, 0.85);
  backdrop-filter: blur(16px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08)
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height:40px;
  width: auto;
  display: block;
  transition: transform 0.25s ease, opacity 0.25s ease;
  cursor: pointer;
}

.logo:hover img {
  transform: scale(1.04);
  opacity: 0.9;
}

.nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

@media (max-width: 1024px) {
  .nav {
    display: none;
  }
}
</style>
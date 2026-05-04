<template>
  <Preloader :visible="loading" />

  <div v-show="!loading">
    <SiteHeader @open-demo="openDemoModal" />

    <main>
      <HeroSection @open-demo="openDemoModal" />
      <ProblemsSection />
      <SolutionSection />
      <HowItWorksSection />
      <ModulesSection />
      <BusinessEffectsSection />
      <ComplianceSection />
      <IntegrationsSection />
      <ScenariosSection />
      <FinalCtaSection @open-demo="openDemoModal" />
      <FaqSection />
      <SiteFooter @open-demo="openDemoModal" />
    </main>

    <DemoModal v-model="isDemoModalOpen" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

import Preloader from '../components/ui/Preloader.vue'
import SiteHeader from '../components/layout/SiteHeader.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
import DemoModal from '../components/layout/DemoModal.vue'

import HeroSection from '../components/sections/HeroSection.vue'
import ProblemsSection from '../components/sections/ProblemsSection.vue'
import SolutionSection from '../components/sections/SolutionSection.vue'
import HowItWorksSection from '../components/sections/HowItWorksSection.vue'
import ModulesSection from '../components/sections/ModulesSection.vue'
import BusinessEffectsSection from '../components/sections/BusinessEffectsSection.vue'
import IntegrationsSection from '../components/sections/IntegrationsSection.vue'
import ScenariosSection from '../components/sections/ScenariosSection.vue'
import FinalCtaSection from '../components/sections/FinalCtaSection.vue'
import FaqSection from '../components/sections/FaqSection.vue'
import ComplianceSection from '../components/sections/ComplianceSection.vue'

const loading = ref(true)
const isDemoModalOpen = ref(false)

const openDemoModal = () => {
  isDemoModalOpen.value = true
}

function handleLoad() {
  window.setTimeout(() => {
    loading.value = false
  }, 1200)
}

onMounted(() => {
  if (document.readyState === 'complete') {
    handleLoad()
  } else {
    window.addEventListener('load', handleLoad)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('load', handleLoad)
})
</script>
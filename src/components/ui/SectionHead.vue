<template>
  <div class="section-head">
    <p v-if="eyebrow" class="section-head__eyebrow">
      {{ eyebrow }}
    </p>

    <h2 class="section-head__title">
      {{ title }}
    </h2>

    <p v-if="subtitle" class="section-head__subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
}>()
</script>

<style scoped>
.section-head {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 48px;
}

.section-head__eyebrow {
  font-size: 14px;
  color: var(--color-primary);
  margin-bottom: 12px;
  font-weight: 600;
}

.section-head__title {
  font-size: 36px;
  font-weight: 600;
  margin: 0 0 16px;
}

.section-head__subtitle {
  color: var(--color-muted);
  font-size: 16px;
}
</style>